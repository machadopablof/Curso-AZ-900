#!/usr/bin/env python3
"""Gerador de senha forte para banco de dados.

Uso:
    python3 tools/gerar_senha.py                 # 1 senha de 32 caracteres, modo seguro
    python3 tools/gerar_senha.py -n 48 -q 5      # 5 senhas de 48 caracteres
    python3 tools/gerar_senha.py --todos-simbolos
    python3 tools/gerar_senha.py --sem-simbolos

O modo padrão evita caracteres que quebram connection strings, URLs, SQL e shell
(' " ` \\ / @ : ; % & ? # = + $ e espaço). Usa o módulo `secrets` (CSPRNG).
"""
import argparse
import math
import secrets
import string
import sys

SIMBOLOS_SEGUROS = "!*-_.~^()[]{}"
SIMBOLOS_TODOS = "!#$%&()*+,-./:;<=>?@[]^_{|}~"
AMBIGUOS = set("0Oo1lI|")


def gerar(tamanho, conjuntos, comecar_com_letra=True):
    todos = "".join(conjuntos)
    chars = [secrets.choice(c) for c in conjuntos]  # 1 de cada categoria
    chars += [secrets.choice(todos) for _ in range(tamanho - len(chars))]
    secrets.SystemRandom().shuffle(chars)
    if comecar_com_letra:
        idx = next((i for i, c in enumerate(chars) if c.isalpha()), 0)
        chars[0], chars[idx] = chars[idx], chars[0]
    return "".join(chars)


def main():
    p = argparse.ArgumentParser(description="Gera senhas fortes para banco de dados.")
    p.add_argument("-n", "--tamanho", type=int, default=32, help="tamanho (12-128, padrão 32)")
    p.add_argument("-q", "--quantidade", type=int, default=1, help="quantas senhas gerar")
    g = p.add_mutually_exclusive_group()
    g.add_argument("--todos-simbolos", action="store_true", help="usa todos os símbolos (menos seguro p/ connection string)")
    g.add_argument("--sem-simbolos", action="store_true", help="só letras e números")
    p.add_argument("--sem-ambiguos", action="store_true", help="remove 0 O o 1 l I |")
    p.add_argument("--livre", action="store_true", help="não força começar com letra")
    a = p.parse_args()

    if not 12 <= a.tamanho <= 128:
        p.error("tamanho deve estar entre 12 e 128")

    conjuntos = [string.ascii_uppercase, string.ascii_lowercase, string.digits]
    if not a.sem_simbolos:
        conjuntos.append(SIMBOLOS_TODOS if a.todos_simbolos else SIMBOLOS_SEGUROS)
    if a.sem_ambiguos:
        conjuntos = ["".join(c for c in s if c not in AMBIGUOS) for s in conjuntos]

    for _ in range(a.quantidade):
        print(gerar(a.tamanho, conjuntos, not a.livre))

    bits = a.tamanho * math.log2(len("".join(conjuntos)))
    print(f"# entropia aproximada: {bits:.0f} bits", file=sys.stderr)


if __name__ == "__main__":
    main()
