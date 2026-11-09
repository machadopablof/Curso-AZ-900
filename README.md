# AZ-900 — Curso Completo (Azure Fundamentals)

Site estático de estudo para o exame AZ-900, gerado a partir do guia oficial de habilidades do Microsoft Learn.

## Recursos

- Navegação por módulos e aulas, com progresso salvo no navegador (`localStorage`).
- Checklist de preparação interativo.
- Tema claro/escuro (segue o sistema por padrão, com alternância manual).
- Totalmente responsivo (menu lateral vira gaveta no mobile).
- Sem dependências externas — HTML, CSS e JS puros.

## Estrutura

```
index.html            # marcação e conteúdo de todas as aulas
assets/css/style.css   # estilos e temas
assets/js/app.js       # navegação, progresso, checklist, tema, busca
```

## Publicação (GitHub Pages)

O deploy é automático via GitHub Actions (`.github/workflows/deploy-pages.yml`) a cada push. Em **Settings → Pages**, a origem deve estar configurada como **GitHub Actions**.

> Material de estudo independente, sem afiliação oficial com a Microsoft. Não reproduz questões reais do exame.
