# AZ-900 — Módulos de Reforço Personalizados

> Material de reforço criado a partir do resultado da avaliação prática do aluno (34/50 = 68%) e alinhado aos objetivos atuais do AZ-900, com habilidades medidas a partir de 20 de julho de 2026.

## Como estudar este reforço

A ideia aqui não é decorar uma lista de definições. Em cada assunto, primeiro entenda **o problema que o serviço resolve**, depois compare com os serviços parecidos e, por último, memorize as palavras-chave que normalmente aparecem nas questões.

### Seu resultado e prioridade

| Prioridade | Tema | Erros identificados | O que precisa dominar |
|---|---|---:|---|
| 🔴 1 | Monitoramento | 4 | Advisor × Monitor × Log Analytics × Service Health × Health Advisories |
| 🟠 2 | Arquitetura | 3 | Subscription × Resource Group × Resource × Management Group; região × zona × par de regiões |
| 🟡 3 | Governança | 2 | Policy × Tags × Locks |
| 🟢 4 | Identidade e acesso | 2 | Conditional Access × MFA × Entra Connect |
| 🔵 5 | Computação e rede | 2 | VMSS × Container Instances; Service Endpoints × ExpressRoute |
| ⚪ 6 | Benefícios da nuvem | 2 | Alta disponibilidade, escalabilidade, elasticidade e alcance global |
| ⚪ 7 | Modelo de consumo | 1 | Consumo/OpEx × CapEx |

---

# MÓDULO DE REFORÇO 1 — MONITORAMENTO NO AZURE

## 1.1 Primeiro entenda a diferença fundamental

Existem quatro perguntas diferentes que a prova pode fazer:

1. **"O que está acontecendo com meus recursos?"** → Azure Monitor.
2. **"Quero consultar/analisar os logs coletados."** → Log Analytics.
3. **"O que está acontecendo com a plataforma Azure e pode afetar meu ambiente?"** → Azure Service Health.
4. **"O que eu deveria melhorar no meu ambiente?"** → Azure Advisor.

Essa distinção resolve uma grande parte das questões de monitoramento.

---

## 1.2 Azure Monitor

O **Azure Monitor** é a plataforma de observabilidade do Azure. Ele coleta, analisa e permite agir sobre dados de telemetria provenientes de recursos do Azure, sistemas operacionais e aplicações.

### O que é telemetria?

São dados que ajudam a entender o comportamento de um ambiente, por exemplo:

- utilização de CPU;
- memória;
- latência;
- número de requisições;
- erros;
- logs;
- atividade de recursos;
- dados de aplicações.

### Pense assim

Você possui uma VM no Azure e quer saber:

> "A CPU está ficando alta? A aplicação está apresentando erros? Quantas requisições estão chegando?"

Isso é **Azure Monitor**.

### O que a prova pode dizer

- monitorar desempenho;
- coletar métricas;
- coletar logs;
- observar recursos;
- detectar problemas de desempenho;
- criar alertas baseados em métricas ou logs.

→ **Azure Monitor**.

### Pegadinha

Azure Monitor **não é a ferramenta de recomendações de boas práticas**. Se a questão disser "recomendar redução de custos", pense em **Advisor**.

---

# 1.3 Log Analytics

**Log Analytics** é uma capacidade do Azure Monitor usada para armazenar/analisar logs e executar consultas sobre esses dados.

A palavra-chave é:

> **CONSULTAR LOGS**

Imagine que sua empresa possui milhares de eventos de várias VMs. Você quer pesquisar:

- quais máquinas registraram erro;
- quantos erros ocorreram;
- em qual horário ocorreram;
- quais eventos possuem determinado código.

Você usa **Log Analytics**.

### Relação entre os dois

Não pense em Monitor e Log Analytics como dois concorrentes.

Pense assim:

```text
Azure Monitor
    │
    ├── coleta/analisa telemetria
    │
    └── Log Analytics
           └── consulta e análise de logs
```

### Pegadinha da sua avaliação

Se a questão falar em **RCA de uma interrupção do Azure** ou **manutenção planejada**, não escolha Log Analytics. Isso pertence ao **Service Health**.

---

# 1.4 Azure Advisor

O **Azure Advisor** funciona como um consultor de boas práticas para seu ambiente Azure.

Ele apresenta recomendações relacionadas a áreas como:

- custo;
- segurança;
- confiabilidade;
- desempenho;
- excelência operacional.

### Exemplo

A questão diz:

> "Uma organização deseja receber recomendações para reduzir seus custos no Azure."

Resposta:

**Azure Advisor**.

### Outra forma de pensar

Monitor responde:

> "Como meu ambiente está?"

Advisor responde:

> "Como posso melhorar meu ambiente?"

### Palavras-chave

- recomendação;
- melhores práticas;
- reduzir custos;
- melhorar desempenho;
- melhorar confiabilidade;
- recomendações de segurança.

→ **Advisor**.

---

# 1.5 Azure Service Health

Agora vem uma das diferenças mais importantes para sua prova.

**Service Health** informa sobre a saúde dos serviços Azure e eventos da plataforma que podem afetar seus recursos.

Pode envolver:

- interrupções/incidentes;
- manutenção planejada;
- avisos de integridade;
- informações personalizadas sobre problemas que podem afetar seus serviços.

### Exemplo

> "A Microsoft informou que haverá manutenção planejada na região utilizada pela organização. Qual serviço deve ser consultado?"

→ **Service Health**.

Outro exemplo:

> "Uma interrupção ocorreu no Azure e a organização deseja informações sobre o incidente e sua causa."

→ **Service Health**.

### Regra mental

```text
Problema no Azure/plataforma
        ↓
   Service Health
```

---

# 1.6 Health Advisories

Health Advisories fazem parte do contexto de Service Health e estão relacionados a avisos proativos sobre situações que podem exigir ação.

Exemplo conceitual:

> "Um recurso será descontinuado e a organização precisa saber que deve agir antes da mudança."

→ **Health Advisory / Service Health**.

A ideia é **avisar antes que o problema aconteça ou antes que uma mudança afete o ambiente**.

---

# 1.7 Não confunda Service Health com Resource Health

Essa distinção é extremamente útil:

### Service Health

Pergunta:

> "Existe algum problema no serviço/região do Azure que possa afetar meu ambiente?"

### Resource Health

Pergunta:

> "Qual é a saúde deste recurso específico?"

Exemplo:

- uma VM específica está indisponível → pense em **Resource Health**;
- existe uma interrupção do Azure afetando uma região → pense em **Service Health**.

---

# 1.8 Azure Status × Service Health

### Azure Status

Visão geral pública do status dos serviços Azure.

### Service Health

Informações personalizadas e relevantes para os serviços/regiões utilizados pelo cliente.

### Macete

```text
Status = visão geral
Service Health = impacto relevante para meu ambiente
```

---

# 1.9 Tabela definitiva de monitoramento

| Se a pergunta falar... | Resposta |
|---|---|
| Métricas | Azure Monitor |
| Logs | Azure Monitor / Log Analytics |
| Consultar logs | Log Analytics |
| Alertas de métricas/logs | Azure Monitor Alerts |
| Desempenho de aplicação | Application Insights |
| Recomendações | Azure Advisor |
| Reduzir custos por recomendação | Azure Advisor |
| Melhores práticas | Azure Advisor |
| Interrupção do Azure | Service Health |
| Manutenção planejada | Service Health |
| Incidente da plataforma | Service Health |
| Aviso proativo sobre mudança | Health Advisories / Service Health |
| Saúde de recurso individual | Resource Health |
| Status global do Azure | Azure Status |

## Regra de ouro

> **Meus recursos = Monitor.**
>
> **Meus logs = Log Analytics.**
>
> **Problema na plataforma Azure = Service Health.**
>
> **O que posso melhorar = Advisor.**

---

# MÓDULO DE REFORÇO 2 — ARQUITETURA DO AZURE

## 2.1 Hierarquia do Azure

Memorize a estrutura:

```text
Management Group
       ↓
   Subscription
       ↓
 Resource Group
       ↓
    Resource
```

### Resource

É o recurso individual que você utiliza.

Exemplos:

- máquina virtual;
- conta de armazenamento;
- VNet;
- banco de dados.

### Resource Group

É um agrupamento lógico de recursos relacionados.

Exemplo:

```text
RG-Sistema-Web
├── VM-Web
├── Storage Account
├── VNet
└── Banco de dados
```

### Subscription

É uma unidade de gerenciamento e cobrança que contém recursos.

Uma organização pode ter várias subscriptions.

Exemplo:

```text
Empresa
├── Subscription-Produção
├── Subscription-Homologação
└── Subscription-Desenvolvimento
```

### Management Group

Serve para organizar e aplicar governança em várias subscriptions.

```text
Management Group
├── Subscription A
├── Subscription B
└── Subscription C
```

---

## 2.2 Pegadinha: quem contém quem?

A questão pode apresentar várias opções parecidas.

Decore:

> **Management Group contém Subscriptions.**
>
> **Subscription contém Resource Groups.**
>
> **Resource Group contém Resources.**

Uma Storage Account é **Resource**.

Ela pode estar dentro de um Resource Group.

---

## 2.3 Subscription não cria Entra ID

Uma assinatura do Azure não deve ser confundida com o diretório de identidade.

O Microsoft Entra ID é o serviço de identidade da Microsoft.

Uma identidade pode ter acesso a diferentes subscriptions, de acordo com as permissões concedidas.

### Pegadinha

Se a questão perguntar o que existe dentro da hierarquia de gerenciamento da assinatura, pense em:

```text
Subscription
   ↓
Resource Groups
   ↓
Resources
```

Não coloque Entra ID como se fosse um filho da subscription.

---

# 2.4 Região, Availability Zone e Region Pair

Esse é outro assunto que você precisa separar mentalmente.

## Região

É uma área geográfica que contém datacenters do Azure.

A escolha da região pode afetar:

- latência;
- disponibilidade de serviços;
- requisitos de residência de dados;
- preço.

## Availability Zone

É uma localização física separada dentro de uma região.

O objetivo é aumentar a resiliência contra falhas locais de infraestrutura.

```text
Região Azure
├── Zona 1
├── Zona 2
└── Zona 3
```

### Pense assim

> **Zona protege contra problema dentro da região.**

---

## 2.5 Region Pair

Pares de regiões relacionam regiões geograficamente separadas para cenários de resiliência e continuidade de negócios.

### Pense assim

> **Zona = proteção local.**
>
> **Par de regiões = proteção geográfica.**

### Pegadinha clássica

Se a pergunta disser:

> "Uma empresa precisa se proteger contra uma falha que afete uma região inteira."

Não escolha Availability Zone como resposta principal.

A ideia é utilizar **outra região**, considerando os mecanismos de resiliência apropriados.

---

# MÓDULO DE REFORÇO 3 — GOVERNANÇA E CONFORMIDADE

## 3.1 Azure Policy

**Azure Policy** permite definir e aplicar regras de governança e conformidade.

Exemplos:

- permitir somente determinadas regiões;
- exigir determinados padrões de configuração;
- restringir tipos/tamanhos de recursos;
- impedir implantações que não estejam de acordo com uma regra.

### A palavra mais importante

> **REGRA**

Se a questão disser:

> "Impedir que sejam criados recursos que não atendam ao padrão da empresa."

→ **Azure Policy**.

---

## 3.2 Tags

Tags são metadados usados para organizar e classificar recursos.

Exemplo:

```text
Environment = Production
Department = Finance
Owner = Infraestrutura
CostCenter = 1234
```

Tags são excelentes para organização e identificação.

### Mas atenção

Tag **não é mecanismo de bloqueio de criação**.

Se a questão disser "identificar recursos por departamento" → Tags.

Se disser "impedir recursos fora do padrão" → Policy.

---

# 3.3 Resource Locks

Locks protegem recursos contra determinadas operações acidentais.

Os conceitos mais importantes são:

- **CanNotDelete** → impede exclusão;
- **ReadOnly** → impede alterações e permite apenas leitura, considerando as limitações desse tipo de bloqueio.

### Pegadinha

Resource Lock não serve para dizer:

> "Só podem ser criadas VMs com determinado tamanho."

Isso é **Azure Policy**.

Lock é usado principalmente para proteger um recurso **já existente**.

---

# 3.4 Policy × Tags × Locks

| Necessidade | Serviço |
|---|---|
| Organizar recursos | Tags |
| Classificar recursos | Tags |
| Definir regras | Azure Policy |
| Impedir criação fora do padrão | Azure Policy |
| Impedir exclusão | Resource Lock |
| Proteger recurso existente | Resource Lock |

### Regra definitiva

> **Tags = identificar/organizar.**
>
> **Policy = impor regras.**
>
> **Lock = proteger contra operações.**

---

# MÓDULO DE REFORÇO 4 — IDENTIDADE, ACESSO E SEGURANÇA

## 4.1 Authentication × Authorization

Antes de estudar MFA, Conditional Access e RBAC, separe duas perguntas:

### Authentication

> **Quem é você?**

Exemplo: usuário informa senha e realiza MFA.

### Authorization

> **O que você pode fazer?**

Exemplo: usuário pode ler uma VM, mas não pode excluí-la.

---

# 4.2 MFA

**MFA** adiciona uma segunda ou outra forma de verificação de identidade.

Exemplo:

```text
Senha
+
Código/app/biometria
=
MFA
```

### Pergunta típica

> "Qual recurso adiciona uma camada adicional de verificação ao login?"

→ **MFA**.

MFA responde principalmente:

> "Você realmente é quem afirma ser?"

---

# 4.3 Conditional Access

O **Acesso Condicional** decide se o acesso deve ser permitido, bloqueado ou submetido a requisitos adicionais com base em condições.

Condições podem considerar fatores como:

- usuário;
- grupo;
- aplicativo;
- localização;
- dispositivo;
- risco;
- contexto do acesso.

### Exemplo da sua prova

> "Permitir acesso somente a partir de aplicativos cliente aprovados."

→ **Conditional Access**.

Não escolha MFA só porque aparece a palavra "acesso".

---

# 4.4 Microsoft Entra Connect

O **Microsoft Entra Connect** é usado em cenários de identidade híbrida, sincronizando identidades entre o Active Directory local e o Microsoft Entra ID.

### Palavra-chave

> **SINCRONIZAR**

Se a pergunta disser:

> "A empresa possui Active Directory local e quer sincronizar identidades com o Entra ID."

→ **Microsoft Entra Connect**.

---

# 4.5 RBAC

Azure RBAC controla permissões sobre recursos do Azure.

Pergunta mental:

> "O que este usuário pode fazer neste recurso?"

Exemplo:

- Reader → leitura;
- Contributor → pode gerenciar recursos, sem administrar acesso em geral;
- Owner → controle amplo, incluindo gerenciamento de acesso.

### Não confunda

```text
MFA = confirmar identidade
Conditional Access = condições para acessar
RBAC = permissões no recurso
Entra Connect = sincronizar identidade híbrida
```

---

# MÓDULO DE REFORÇO 5 — COMPUTAÇÃO E REDE

## 5.1 Virtual Machine

VM é uma máquina virtual que fornece alto nível de controle sobre o sistema operacional e ambiente computacional.

Pense em:

> "Preciso administrar um servidor."

→ VM.

---

# 5.2 VM Scale Sets

**VM Scale Sets (VMSS)** permitem criar e gerenciar um conjunto de VMs de maneira escalável.

Exemplo:

```text
VMSS
├── VM 1
├── VM 2
├── VM 3
└── VM 4
```

Se a demanda aumenta, o conjunto pode escalar.

### Pergunta típica

> "A empresa precisa implantar e gerenciar várias VMs idênticas."

→ **VM Scale Sets**.

---

# 5.3 Azure Container Instances

Azure Container Instances executa contêineres sem exigir o gerenciamento de uma máquina virtual tradicional.

### Pegadinha da sua avaliação

Se a pergunta disser:

> "Implantar um conjunto de VMs idênticas."

Não escolha Container Instances.

**Container = contêiner.**

**VMSS = conjunto de VMs.**

---

# 5.4 Service Endpoint

Service Endpoints permitem estender a identidade da VNet para determinados serviços do Azure, permitindo acesso ao serviço a partir de uma rede virtual, mantendo o tráfego na rede backbone do Azure conforme o serviço e a configuração.

### Pergunta típica

> "Um recurso Azure precisa acessar um serviço Azure de forma integrada com uma VNet."

→ Considere **Service Endpoints** quando o enunciado estiver descrevendo esse mecanismo.

---

# 5.5 ExpressRoute

ExpressRoute fornece conectividade privada entre redes locais e a Microsoft Cloud por meio de uma conexão fornecida por um provedor.

### Palavra-chave

> **ON-PREMISES → AZURE**

Exemplo:

```text
Datacenter da empresa
        │
        │ ExpressRoute
        ↓
Microsoft Cloud
```

### Pegadinha

ExpressRoute não é a resposta para simplesmente conectar dois recursos que já estão dentro do Azure.

---

# 5.6 Service Endpoint × ExpressRoute

| Pergunta | Resposta |
|---|---|
| VNet → serviço Azure | Service Endpoint |
| On-premises → Microsoft Cloud | ExpressRoute |
| VNet → VNet | VNet Peering |
| On-premises → VNet usando VPN | VPN Gateway |

---

# MÓDULO DE REFORÇO 6 — BENEFÍCIOS DA NUVEM

## 6.1 Alta disponibilidade

Alta disponibilidade significa manter um serviço disponível com o mínimo possível de interrupção.

Na prova, pense em:

> **Disponibilidade.**

### Pegadinha

Backup não é sinônimo de alta disponibilidade.

Backup ajuda na recuperação de dados.

Alta disponibilidade está relacionada à capacidade de manter o serviço funcionando.

SLA é importante porque define compromissos de disponibilidade do serviço.

---

# 6.2 Escalabilidade

Escalabilidade é a capacidade de aumentar ou reduzir a capacidade de um sistema conforme a necessidade.

Exemplo:

```text
Demanda baixa → 2 instâncias
Demanda alta → 8 instâncias
```

---

# 6.3 Elasticidade

Elasticidade enfatiza a capacidade de ajustar recursos dinamicamente à demanda.

Para a prova:

> **Escalabilidade = capacidade de escalar.**
>
> **Elasticidade = ajustar dinamicamente conforme a demanda.**

---

# 6.4 Alcance global

Se a questão disser:

> "Implantar aplicações em datacenters/regiões distribuídos pelo mundo."

Pense em **alcance global / distribuição geográfica**.

### Não confunda com elasticidade

Elasticidade responde:

> "Quanto recurso preciso?"

Alcance global responde:

> "Onde posso colocar meus serviços para atender usuários em diferentes regiões?"

---

# MÓDULO DE REFORÇO 7 — MODELO BASEADO EM CONSUMO, CAPEX E OPEX

## 7.1 CapEx

**CapEx = Capital Expenditure.**

É investimento de capital.

Exemplos:

- comprar servidores;
- comprar storage;
- construir datacenter;
- comprar equipamentos de rede.

O dinheiro é investido antecipadamente para adquirir infraestrutura.

---

# 7.2 OpEx

**OpEx = Operational Expenditure.**

É despesa operacional.

No modelo de nuvem, é comum pagar pelos recursos consumidos conforme o modelo de cobrança do serviço.

---

# 7.3 Modelo baseado em consumo

A ideia principal é:

> **Você paga conforme consome.**

Isso reduz a necessidade de comprar toda a infraestrutura antecipadamente.

### Pegadinha da sua questão Q1

Se aparecer:

- alto investimento inicial;
- compra de servidores;
- compra de infraestrutura física;
- grandes despesas de capital;

→ isso aponta para **CapEx / modelo tradicional**.

Se aparecer:

- pagar pelo uso;
- sem grande investimento inicial em infraestrutura;
- aumentar/diminuir consumo;

→ pense em **modelo baseado em consumo / OpEx**.

---

# MAPA FINAL — AS CONFUSÕES QUE VOCÊ PRECISA ELIMINAR

```text
MONITORAMENTO

O que está acontecendo nos meus recursos?
→ Azure Monitor

Quero consultar logs
→ Log Analytics

Problema/manutenção/incidente do Azure
→ Service Health

Quero saber o que melhorar
→ Advisor

Aviso proativo sobre problema/mudança
→ Health Advisories

Saúde de recurso específico
→ Resource Health
```

```text
ARQUITETURA

Management Group
        ↓
Subscription
        ↓
Resource Group
        ↓
Resource
```

```text
RESILIÊNCIA

Falha local dentro da região
→ Availability Zone

Problema regional / continuidade geográfica
→ Outra região / Region Pair
```

```text
GOVERNANÇA

Organizar
→ Tags

Impor regra
→ Azure Policy

Impedir exclusão/alteração
→ Resource Lock
```

```text
IDENTIDADE

Quem é você?
→ Authentication / MFA

Em quais condições pode acessar?
→ Conditional Access

O que pode fazer?
→ RBAC

Sincronizar AD local com Entra ID
→ Entra Connect
```

```text
COMPUTAÇÃO E REDE

Servidor virtual
→ VM

Grupo escalável de VMs
→ VM Scale Sets

Contêiner
→ Container Instances

VNet → serviço Azure
→ Service Endpoint

On-premises → Azure privado
→ ExpressRoute
```

```text
FINANÇAS

Comprar infraestrutura
→ CapEx

Pagar operação/consumo
→ OpEx

Pagar conforme uso
→ Modelo baseado em consumo
```

# COMO A PROVA TENTA TE ENGANAR

## Cenário 1

> "A empresa deseja receber recomendações para reduzir a conta do Azure."

Não pense em Monitor porque existe a palavra "Azure" ou "conta".

→ **Advisor**.

## Cenário 2

> "A Microsoft anunciou manutenção planejada em uma região utilizada pela empresa."

Não pense em Monitor porque manutenção é um evento.

→ **Service Health**.

## Cenário 3

> "O administrador deseja consultar milhares de registros de log."

→ **Log Analytics**.

## Cenário 4

> "A organização quer impedir a implantação de recursos que não estejam em conformidade com uma regra."

→ **Azure Policy**.

## Cenário 5

> "A empresa quer impedir que uma conta de armazenamento crítica seja excluída."

→ **Resource Lock**.

## Cenário 6

> "A empresa possui Active Directory local e deseja sincronizar identidades com o Azure."

→ **Entra Connect**.

## Cenário 7

> "Usuários só podem acessar o aplicativo aprovado a partir de determinadas condições."

→ **Conditional Access**.

## Cenário 8

> "A empresa precisa executar várias VMs idênticas e escalá-las."

→ **VM Scale Sets**.

## Cenário 9

> "A empresa quer conectar sua rede local ao Azure por uma conexão privada."

→ **ExpressRoute**.

## Cenário 10

> "A empresa deseja pagar pelos recursos conforme o uso."

→ **Modelo baseado em consumo / OpEx**.

---

# TESTE DE DOMÍNIO — ANTES DE VOLTAR AO SIMULADO

Você deve conseguir responder rapidamente:

1. Qual serviço recomenda redução de custos? → Advisor.
2. Qual serviço coleta métricas e telemetria? → Azure Monitor.
3. Onde consulto logs? → Log Analytics.
4. Qual serviço informa interrupções e manutenção do Azure? → Service Health.
5. Qual componente fornece avisos proativos de saúde? → Health Advisories.
6. Qual nível contém subscriptions? → Management Group.
7. O que existe dentro de um Resource Group? → Resources.
8. Zona de disponibilidade protege contra quê? → Falhas locais dentro da região.
9. O que usar para impor uma regra de implantação? → Azure Policy.
10. O que usar para impedir exclusão? → Resource Lock.
11. O que sincroniza AD local e Entra ID? → Entra Connect.
12. O que controla acesso baseado em condições? → Conditional Access.
13. O que adiciona uma etapa extra de autenticação? → MFA.
14. O que controla permissões nos recursos? → RBAC.
15. O que gerencia um conjunto escalável de VMs? → VM Scale Sets.
16. O que executa contêineres? → Container Instances.
17. O que conecta uma VNet a determinados serviços Azure? → Service Endpoint.
18. O que conecta ambiente local ao Azure de forma privada? → ExpressRoute.
19. Alta disponibilidade significa o quê? → Minimizar indisponibilidade.
20. Pagar conforme o uso corresponde a quê? → Modelo baseado em consumo / OpEx.

Se você ainda hesitar em qualquer uma dessas 20, revise o respectivo módulo antes de fazer outro simulado.
