/* ============================================================
   Simulado AZ-900 — motor do simulado
   Banco de questões ORIGINAIS, escrito a partir do skills outline
   oficial do AZ-900 (não reproduz conteúdo da Microsoft).
   d: 1 = Conceitos de nuvem | 2 = Arquitetura e serviços | 3 = Gerenciamento e governança
   c: índice(s) da(s) alternativa(s) correta(s)
   ============================================================ */
const BANCO = [
/* ---------- DOMÍNIO 1 — Conceitos de nuvem (14) ---------- */
{d:1,q:"Uma empresa executa máquinas virtuais no Azure sob o modelo de IaaS. Quem é responsável por aplicar as atualizações de segurança do sistema operacional convidado dessas VMs?",a:["A Microsoft, porque a VM roda na infraestrutura dela","O cliente, porque o sistema operacional convidado está sob a responsabilidade dele","A responsabilidade é sempre dividida em partes iguais","Nenhuma das partes: atualizações são automáticas em IaaS"],c:[1],e:"Em IaaS o provedor cuida do hardware, da rede física e do hipervisor. A partir do sistema operacional convidado para cima (patches, aplicativos, configuração) a responsabilidade é do cliente. Quanto mais o modelo se aproxima de SaaS, mais responsabilidade migra para o provedor."},
{d:1,q:"Uma organização deixa de comprar servidores a cada três anos e passa a pagar mensalmente pelo consumo de recursos no Azure. Como essa mudança é classificada financeiramente?",a:["Sai de despesa operacional (OpEx) para despesa de capital (CapEx)","Sai de despesa de capital (CapEx) para despesa operacional (OpEx)","Continua sendo CapEx, apenas com fornecedor diferente","Não há mudança de classificação; só muda o fornecedor"],c:[1],e:"CapEx é o investimento adiantado em ativos físicos, com depreciação ao longo dos anos. OpEx é a despesa recorrente pelo uso de um serviço. O modelo de consumo da nuvem converte o gasto de CapEx para OpEx."},
{d:1,q:"Um site de vendas recebe picos de acesso na Black Friday e volta ao volume normal em seguida. A infraestrutura adiciona instâncias durante o pico e as remove automaticamente depois. Qual característica da nuvem descreve esse comportamento?",a:["Elasticidade","Alta disponibilidade","Governança","Recuperação de desastre"],c:[0],e:"Elasticidade é a capacidade de aumentar e reduzir recursos automaticamente conforme a demanda oscila. Escalabilidade é a capacidade de crescer; elasticidade acrescenta o ajuste dinâmico nos dois sentidos."},
{d:1,q:"Uma instituição mantém os dados sensíveis em um datacenter próprio e usa o Azure para o processamento de relatórios e picos sazonais, com conectividade entre os dois ambientes. Que modelo de nuvem está em uso?",a:["Nuvem pública","Nuvem privada","Nuvem híbrida","Nuvem comunitária"],c:[2],e:"A nuvem híbrida combina recursos locais (ou de nuvem privada) com recursos de nuvem pública, permitindo manter cargas específicas no ambiente próprio e usar a nuvem pública para o restante."},
{d:1,q:"Qual das opções descreve corretamente a diferença entre alta disponibilidade e recuperação de desastre?",a:["Alta disponibilidade mantém o serviço funcionando diante de falhas localizadas; recuperação de desastre restaura o serviço após um evento de grande escala","Alta disponibilidade só existe em nuvem privada; recuperação de desastre só existe em nuvem pública","São sinônimos usados por fornecedores diferentes","Alta disponibilidade trata de backup de dados; recuperação de desastre trata de balanceamento de carga"],c:[0],e:"Alta disponibilidade busca minimizar a indisponibilidade no dia a dia, com redundância dentro da região. Recuperação de desastre trata da retomada do serviço depois de um evento maior, geralmente com replicação para outra região."},
{d:1,q:"O Microsoft 365, no qual o cliente apenas usa os aplicativos e administra usuários e dados, é exemplo de qual modelo de serviço?",a:["IaaS","PaaS","SaaS","Nuvem privada"],c:[2],e:"Em SaaS o provedor entrega o software pronto e gerencia toda a pilha, da infraestrutura ao aplicativo. Ao cliente restam os dados, as contas e a configuração do serviço."},
{d:1,q:"Uma equipe de desenvolvimento quer publicar uma API sem administrar sistema operacional, patches ou balanceadores, concentrando-se apenas no código. Qual modelo de serviço atende melhor?",a:["IaaS","PaaS","SaaS","Colocation"],c:[1],e:"PaaS entrega a plataforma de execução pronta: o provedor cuida do sistema operacional, do runtime e da manutenção da infraestrutura, e a equipe entrega apenas o código e a configuração do aplicativo."},
{d:1,q:"Qual cenário justifica melhor a escolha de IaaS em vez de PaaS?",a:["A equipe quer o mínimo de administração possível","É necessário migrar um sistema legado que exige configuração específica do sistema operacional","O software já existe pronto no mercado e só precisa ser assinado","A carga de trabalho é totalmente orientada a eventos e sem estado"],c:[1],e:"IaaS oferece o maior grau de controle sobre o ambiente, o que é necessário quando o sistema depende de versões, drivers ou ajustes específicos do sistema operacional — típico de migrações de aplicações legadas."},
{d:1,q:"Adicionar mais memória e mais vCPUs a uma máquina virtual existente é um exemplo de:",a:["Escala horizontal (scale out)","Escala vertical (scale up)","Elasticidade automática","Balanceamento de carga"],c:[1],e:"Escala vertical aumenta a capacidade de uma única instância. Escala horizontal aumenta o número de instâncias que atendem à carga."},
{d:1,q:"Independentemente de o modelo ser IaaS, PaaS ou SaaS, quais itens permanecem sempre sob responsabilidade do cliente? (Escolha duas.)",a:["Os dados e as informações armazenados no serviço","As contas e identidades dos usuários","Os data centers físicos","A rede física do provedor"],c:[0,1],e:"No modelo de responsabilidade compartilhada, dados e identidades nunca são transferidos ao provedor. Data centers, rede física e hosts são sempre do provedor."},
{d:1,q:"O que caracteriza o modelo baseado em consumo da nuvem pública?",a:["Um valor fixo mensal, independentemente do uso","Pagamento apenas pelos recursos efetivamente consumidos, sem investimento inicial em hardware","Um contrato mínimo de três anos por recurso","Cobrança apenas por armazenamento, sem cobrança por processamento"],c:[1],e:"O modelo de consumo elimina o investimento adiantado e cobra pelo que é usado, o que evita pagar por capacidade ociosa e permite ajustar o gasto conforme a demanda."},
{d:1,q:"Uma empresa precisa manter controle físico total sobre o hardware por exigência regulatória, mesmo assumindo o custo e a manutenção dele. Que modelo atende a esse requisito?",a:["Nuvem pública","Nuvem privada","SaaS multilocatário","Nuvem pública com pagamento antecipado"],c:[1],e:"A nuvem privada é de uso exclusivo de uma organização, o que preserva controle e isolamento do hardware — em troca do custo de aquisição e da responsabilidade pela operação."},
{d:1,q:"Quais são dois benefícios diretos de adotar a nuvem pública? (Escolha duas.)",a:["Eliminação do investimento inicial em hardware","Capacidade de escalar recursos rapidamente conforme a demanda","Controle físico exclusivo sobre os servidores","Dispensa de qualquer configuração de segurança pelo cliente"],c:[0,1],e:"A nuvem pública remove o CapEx inicial e permite provisionar ou liberar capacidade em minutos. O controle físico continua sendo do provedor, e a segurança permanece uma responsabilidade compartilhada."},
{d:1,q:"O que o benefício de \"governança\" na nuvem descreve?",a:["A velocidade de provisionamento de novos recursos","A aplicação de padrões, políticas e auditoria para manter os recursos em conformidade","O tempo de resposta do suporte técnico","A quantidade de regiões disponíveis"],c:[1],e:"Governança na nuvem é a capacidade de definir e impor padrões — nomenclatura, marcação, configurações permitidas — e auditar desvios automaticamente, mantendo o ambiente aderente às regras da organização."},

/* ---------- DOMÍNIO 2 — Arquitetura e serviços (19) ---------- */
{d:2,q:"O que é um par de regiões no Azure?",a:["Duas regiões na mesma cidade, ligadas por fibra dedicada","Duas regiões do mesmo território geográfico, que não recebem atualizações planejadas ao mesmo tempo e priorizam a recuperação em caso de falha ampla","Duas zonas de disponibilidade dentro de uma mesma região","Duas assinaturas replicadas entre si"],c:[1],e:"Cada região é emparelhada com outra dentro da mesma geografia. As atualizações planejadas são aplicadas em sequência, e não simultaneamente, e a recuperação recebe prioridade caso uma falha atinja várias regiões."},
{d:2,q:"O que são zonas de disponibilidade?",a:["Regiões distintas em continentes diferentes","Locais fisicamente separados dentro de uma mesma região, com energia, refrigeração e rede independentes","Cópias de segurança armazenadas fora do Azure","Segmentos lógicos de uma rede virtual"],c:[1],e:"Zonas de disponibilidade são instalações separadas dentro da mesma região do Azure. Distribuir instâncias entre zonas protege a carga contra a falha de um datacenter isolado."},
{d:2,q:"Sobre grupos de recursos no Azure, qual afirmação é verdadeira?",a:["Um grupo de recursos só pode conter recursos de uma única região","Um recurso pode pertencer a vários grupos de recursos ao mesmo tempo","Um grupo de recursos pode conter recursos de regiões diferentes, e cada recurso pertence a apenas um grupo","Excluir um grupo de recursos preserva os recursos contidos nele"],c:[2],e:"O grupo de recursos é um contêiner lógico de gerenciamento. Ele pode agrupar recursos de várias regiões, cada recurso pertence a exatamente um grupo, e excluir o grupo exclui tudo o que está dentro dele."},
{d:2,q:"Uma organização tem 40 assinaturas e precisa aplicar a mesma política de conformidade a todas elas de uma vez. Qual recurso deve usar?",a:["Grupos de gerenciamento","Grupos de recursos","Grupos de segurança de rede","Zonas de disponibilidade"],c:[0],e:"Grupos de gerenciamento ficam acima das assinaturas na hierarquia e permitem aplicar políticas e controles de acesso que são herdados por todas as assinaturas contidas neles."},
{d:2,q:"Qual é a ordem correta da hierarquia de gerenciamento do Azure, do escopo mais amplo para o mais restrito?",a:["Assinatura → Grupo de gerenciamento → Grupo de recursos → Recurso","Grupo de gerenciamento → Assinatura → Grupo de recursos → Recurso","Grupo de recursos → Assinatura → Grupo de gerenciamento → Recurso","Recurso → Grupo de recursos → Grupo de gerenciamento → Assinatura"],c:[1],e:"A hierarquia começa nos grupos de gerenciamento, que contêm assinaturas; cada assinatura contém grupos de recursos; e cada grupo de recursos contém os recursos. Configurações aplicadas em um nível são herdadas pelos níveis abaixo."},
{d:2,q:"Uma aplicação web precisa manter várias instâncias idênticas de máquina virtual, aumentando e diminuindo a quantidade conforme o uso de CPU. Qual serviço atende diretamente a esse requisito?",a:["Instâncias de Contêiner do Azure","Conjuntos de dimensionamento de máquinas virtuais","Azure Functions","Azure Virtual Desktop"],c:[1],e:"Os conjuntos de dimensionamento (VM Scale Sets) gerenciam um grupo de VMs idênticas e ajustam automaticamente a quantidade de instâncias conforme regras de dimensionamento."},
{d:2,q:"Um processo precisa ser executado somente quando um arquivo novo chega a uma conta de armazenamento, sem servidor dedicado e com cobrança apenas pela execução. Qual serviço é o mais adequado?",a:["Azure Functions","Máquinas Virtuais do Azure","Azure Files","Azure ExpressRoute"],c:[0],e:"O Azure Functions é um serviço sem servidor orientado a eventos: o código é executado em resposta a um gatilho e a cobrança acompanha o consumo, sem infraestrutura para administrar."},
{d:2,q:"Qual é a diferença entre Instâncias de Contêiner do Azure (ACI) e Serviço de Kubernetes do Azure (AKS)?",a:["ACI orquestra clusters complexos; AKS executa um contêiner isolado","ACI executa contêineres de forma simples e rápida, sem orquestração; AKS fornece orquestração gerenciada do Kubernetes para cargas maiores","Os dois são idênticos, mudando apenas o preço","AKS não suporta contêineres Linux"],c:[1],e:"ACI é a via mais direta para rodar um contêiner isolado, sem orquestrador. AKS entrega um plano de controle de Kubernetes gerenciado, indicado quando há muitos contêineres, escalonamento e implantações coordenadas."},
{d:2,q:"Uma empresa quer disponibilizar áreas de trabalho e aplicativos Windows remotos para funcionários em vários locais, gerenciados de forma centralizada no Azure. Qual serviço é indicado?",a:["Azure Virtual Desktop","Azure App Service","Azure Arc","Azure Batch"],c:[0],e:"O Azure Virtual Desktop entrega áreas de trabalho e aplicativos virtualizados a partir do Azure, com gerenciamento centralizado e acesso a partir de dispositivos variados."},
{d:2,q:"Duas redes virtuais no Azure precisam se comunicar diretamente pela rede da Microsoft, sem passar pela internet pública e sem gateway de VPN. Qual recurso deve ser usado?",a:["Emparelhamento de rede virtual (peering)","Gateway de VPN site a site","ExpressRoute","Azure DNS"],c:[0],e:"O emparelhamento conecta duas redes virtuais pela rede de backbone da Microsoft, com baixa latência e sem tráfego pela internet pública."},
{d:2,q:"Uma organização precisa de uma conexão privada e dedicada entre o datacenter local e o Azure, que não trafegue pela internet pública e ofereça largura de banda consistente. Qual serviço atende?",a:["Gateway de VPN ponto a site","ExpressRoute","Emparelhamento de rede virtual","Azure Front Door"],c:[1],e:"O ExpressRoute estabelece conectividade privada com o Azure por meio de um provedor de conectividade, sem usar a internet pública, com maior previsibilidade de latência e largura de banda."},
{d:2,q:"Registros de auditoria precisam ser mantidos por sete anos, com acesso muito raro e o menor custo de armazenamento possível. Qual camada de blob deve ser escolhida?",a:["Quente (hot)","Fria (cool)","Arquivo morto (archive)","Premium"],c:[2],e:"A camada de arquivo morto tem o menor custo de armazenamento, em troca do maior tempo de recuperação e de custos de acesso mais altos — perfil típico de retenção legal de longo prazo."},
{d:2,q:"Qual opção de redundância replica os dados entre zonas de disponibilidade da região primária e também para uma região secundária?",a:["LRS","ZRS","GRS","GZRS"],c:[3],e:"LRS mantém cópias em um único datacenter; ZRS replica entre zonas na mesma região; GRS replica para a região secundária; GZRS combina as duas proteções — zonas na região primária e cópia na região secundária."},
{d:2,q:"Uma equipe precisa de um compartilhamento de arquivos totalmente gerenciado, acessível por SMB e montável tanto por servidores locais quanto por VMs do Azure. Qual serviço deve usar?",a:["Armazenamento de Blobs","Arquivos do Azure (Azure Files)","Armazenamento de Filas","Azure Data Box"],c:[1],e:"O Azure Files oferece compartilhamentos de arquivos gerenciados acessíveis por SMB (e NFS), permitindo montar a mesma unidade de rede em ambientes locais e na nuvem."},
{d:2,q:"Uma empresa precisa transferir 500 TB para o Azure, e a conexão de internet disponível levaria meses. Qual solução é a mais apropriada?",a:["AzCopy","Azure Data Box","Gerenciador de Armazenamento do Azure","Azure File Sync"],c:[1],e:"O Data Box é um dispositivo físico enviado ao cliente, que grava os dados localmente e o devolve à Microsoft para carga no Azure — indicado quando o volume é grande demais para transferência pela rede."},
{d:2,q:"No Microsoft Entra ID, qual afirmação distingue corretamente autenticação de autorização?",a:["Autenticação define o que o usuário pode fazer; autorização confirma quem ele é","Autenticação confirma a identidade do usuário; autorização define a quais recursos ele tem acesso","As duas verificam apenas a senha, em momentos diferentes","Autorização ocorre antes da autenticação"],c:[1],e:"A autenticação responde \"quem é você\", validando credenciais. A autorização responde \"o que você pode fazer\", avaliando permissões — e sempre ocorre depois da autenticação."},
{d:2,q:"Um usuário informa a senha e, em seguida, aprova a entrada em um aplicativo autenticador no celular. Qual mecanismo de segurança está em uso?",a:["Autenticação multifator","Acesso condicional","Controle de acesso baseado em função","Criptografia em repouso"],c:[0],e:"A autenticação multifator exige fatores de categorias diferentes: algo que o usuário sabe (senha) somado a algo que ele tem (o dispositivo com o aplicativo autenticador) ou algo que ele é (biometria)."},
{d:2,q:"Uma política exige MFA apenas quando o acesso vem de fora da rede corporativa ou de um dispositivo não gerenciado. Qual recurso do Entra ID implementa esse tipo de regra?",a:["Acesso condicional","Serviços de Domínio do Entra","Bloqueios de recursos","Azure Policy"],c:[0],e:"O acesso condicional avalia sinais como localização, dispositivo, aplicativo e risco da entrada, e então decide se concede o acesso, exige um fator adicional ou bloqueia."},
{d:2,q:"Qual princípio faz parte do modelo Confiança Zero (Zero Trust)?",a:["Confiar automaticamente em todo tráfego originado da rede interna","Verificar explicitamente cada solicitação e presumir que uma violação já ocorreu","Conceder acesso administrativo amplo para reduzir chamados","Substituir totalmente a necessidade de criptografia"],c:[1],e:"O modelo Confiança Zero parte de verificar explicitamente cada solicitação, aplicar acesso com privilégio mínimo e presumir a violação — sem confiança implícita por estar dentro do perímetro da rede."},

/* ---------- DOMÍNIO 3 — Gerenciamento e governança (17) ---------- */
{d:3,q:"Quais fatores influenciam diretamente o custo de um recurso no Azure? (Escolha duas.)",a:["A região em que o recurso é implantado","O tráfego de saída de dados (egresso)","A quantidade de usuários cadastrados no portal","O idioma configurado no portal do Azure"],c:[0,1],e:"O preço varia conforme a região (energia, impostos, disponibilidade local) e conforme o volume de dados que sai do datacenter. Tipo e tamanho do recurso e tempo de uso também pesam; idioma e número de contas no portal, não."},
{d:3,q:"Qual ferramenta permite estimar o custo mensal de uma arquitetura no Azure antes de qualquer recurso ser criado?",a:["Calculadora de Preços do Azure","Calculadora de TCO","Microsoft Cost Management","Azure Advisor"],c:[0],e:"A Calculadora de Preços monta uma estimativa a partir dos serviços e tamanhos escolhidos. A Calculadora de TCO tem outra função: comparar o custo do ambiente local atual com o custo equivalente no Azure."},
{d:3,q:"Qual é o objetivo da Calculadora de TCO?",a:["Comparar o custo total de propriedade da infraestrutura local com o custo estimado no Azure","Gerar a fatura mensal da assinatura","Definir alertas de orçamento","Recomendar tamanhos de máquina virtual subutilizados"],c:[0],e:"A Calculadora de TCO estima o custo total de propriedade do ambiente local — hardware, licenças, energia, espaço, pessoal — e compara com o custo projetado da mesma carga no Azure, apoiando a decisão de migração."},
{d:3,q:"Uma equipe precisa acompanhar o gasto real da assinatura e ser avisada quando o consumo atingir 80% do valor planejado do mês. Qual ferramenta usar?",a:["Calculadora de Preços do Azure","Microsoft Cost Management","Azure Monitor","Portal de Confiança do Serviço"],c:[1],e:"O Microsoft Cost Management analisa o gasto real, permite criar orçamentos e dispara alertas quando o consumo atinge os limites definidos."},
{d:3,q:"Qual é a principal utilidade das marcas (tags) aplicadas a recursos do Azure?",a:["Aumentar o desempenho do recurso","Associar metadados que permitem organizar, filtrar e ratear custos por área ou projeto","Impedir a exclusão acidental do recurso","Criptografar o recurso automaticamente"],c:[1],e:"Marcas são pares de nome e valor anexados ao recurso. Elas não alteram o comportamento técnico, mas permitem agrupar recursos em relatórios de custo e organizar o inventário por centro de custo, ambiente ou responsável."},
{d:3,q:"Uma organização quer impedir que qualquer recurso seja criado fora das regiões do Brasil. Qual serviço aplica essa restrição automaticamente?",a:["Azure Policy","Bloqueios de recursos","Controle de acesso baseado em função","Microsoft Purview"],c:[0],e:"O Azure Policy avalia os recursos contra regras definidas e pode negar a criação de itens fora do padrão, além de auditar e corrigir recursos existentes que estejam em desacordo."},
{d:3,q:"Um recurso crítico não pode ser excluído por engano, mas precisa continuar recebendo alterações de configuração. Qual bloqueio deve ser aplicado?",a:["ReadOnly","CanNotDelete","Deny assignment","Nenhum: apenas RBAC resolve isso"],c:[1],e:"O bloqueio CanNotDelete impede a exclusão, mas permite leitura e modificação. O ReadOnly é mais restritivo: além de impedir a exclusão, bloqueia qualquer alteração no recurso."},
{d:3,q:"Onde uma equipe de conformidade encontra relatórios de auditoria independentes e documentação sobre as certificações dos serviços da Microsoft?",a:["Portal de Confiança do Serviço","Azure Advisor","Azure Monitor","Portal do Azure, na guia Custos"],c:[0],e:"O Portal de Confiança do Serviço reúne relatórios de auditoria, documentos de conformidade e materiais sobre as práticas de segurança e privacidade adotadas pela Microsoft."},
{d:3,q:"Qual solução é voltada à governança de dados — descoberta, classificação e mapeamento de dados sensíveis em vários repositórios?",a:["Microsoft Purview","Azure Policy","Azure Arc","Azure Blueprints"],c:[0],e:"O Microsoft Purview trata da governança do patrimônio de dados: cataloga fontes, classifica informações sensíveis e mapeia a linhagem dos dados entre ambientes."},
{d:3,q:"Uma empresa quer gerenciar servidores físicos do próprio datacenter e VMs de outra nuvem usando as ferramentas de governança do Azure. Qual serviço permite isso?",a:["Azure Arc","Azure Migrate","Azure Site Recovery","Azure Lighthouse"],c:[0],e:"O Azure Arc estende o plano de gerenciamento do Azure a recursos que estão fora dele — servidores locais, Kubernetes e outras nuvens — permitindo aplicar políticas e monitoramento de forma unificada."},
{d:3,q:"Qual opção descreve uma implantação com infraestrutura como código no Azure?",a:["Criar cada recurso manualmente pelo portal e documentar o passo a passo","Definir a infraestrutura em arquivos declarativos, como modelos ARM ou Bicep, e implantá-los de forma repetível","Tirar um backup dos recursos e restaurá-lo em outra assinatura","Usar o Azure Advisor para replicar recursos"],c:[1],e:"Modelos ARM e Bicep descrevem o estado desejado da infraestrutura em arquivos versionáveis, o que torna a implantação repetível, consistente entre ambientes e auditável."},
{d:3,q:"Qual ferramenta oferece um shell no navegador, com Bash e PowerShell já autenticados, sem exigir instalação local?",a:["Azure Cloud Shell","Azure CLI instalado na estação","Windows PowerShell ISE","Azure Data Studio"],c:[0],e:"O Cloud Shell é executado pelo navegador, já vem autenticado na sessão do portal e oferece as duas experiências, Bash e PowerShell, com as ferramentas do Azure pré-instaladas."},
{d:3,q:"Qual serviço analisa o ambiente e gera recomendações personalizadas nas áreas de custo, segurança, confiabilidade, desempenho e excelência operacional?",a:["Azure Advisor","Azure Service Health","Application Insights","Azure Policy"],c:[0],e:"O Azure Advisor examina a configuração e a telemetria dos recursos e sugere ações concretas — como redimensionar VMs subutilizadas ou corrigir riscos de disponibilidade — organizadas por essas cinco categorias."},
{d:3,q:"Uma equipe precisa saber se uma instabilidade em andamento é um problema do próprio ambiente ou uma ocorrência que afeta os serviços do Azure na região. Qual serviço consultar?",a:["Azure Service Health","Azure Advisor","Microsoft Cost Management","Azure Policy"],c:[0],e:"O Azure Service Health mostra incidentes de serviço, manutenções planejadas e avisos de integridade que afetam especificamente as assinaturas e regiões usadas pelo cliente."},
{d:3,q:"Qual serviço coleta telemetria de desempenho e de exceções de dentro de um aplicativo web, incluindo tempo de resposta e falhas de requisição?",a:["Application Insights","Azure Service Health","Azure Arc","Azure Blueprints"],c:[0],e:"O Application Insights é o recurso de monitoramento de desempenho de aplicativos dentro do Azure Monitor, com instrumentação de requisições, dependências, exceções e uso."},
{d:3,q:"Uma equipe precisa consultar logs coletados de várias fontes usando linguagem de consulta para investigar um incidente. Qual componente é usado?",a:["Workspace do Log Analytics","Calculadora de Preços","Azure Migrate","Bloqueios de recursos"],c:[0],e:"O workspace do Log Analytics armazena os logs coletados pelo Azure Monitor e permite consultá-los com KQL, combinando dados de recursos, sistemas operacionais e aplicativos."},
{d:3,q:"O que ocorre com o SLA composto quando uma aplicação depende de vários serviços do Azure ligados em série?",a:["O SLA final passa a ser o do serviço com maior disponibilidade","O SLA final tende a ficar abaixo do SLA de cada serviço isolado","O SLA composto é sempre 99,99%","O SLA deixa de ser aplicável a arquiteturas com mais de um serviço"],c:[1],e:"Quando os serviços são dependentes em série, os percentuais se multiplicam, e o resultado é menor do que o de qualquer componente isolado. Para elevar o número, usa-se redundância entre zonas ou regiões."}
];

(function () {
  "use strict";

  const DOM_NOMES={1:"Conceitos de nuvem",2:"Arquitetura e serviços do Azure",3:"Gerenciamento e governança"};
  const DOM_PESOS={1:"25–30%",2:"35–40%",3:"30–35%"};
  const CORTE_PCT = 70;
  let S={};
  const app=document.getElementById("simulado-root");
  if(!app) return;

  function embaralhar(arr){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

  function preparar(qs){
    return embaralhar(qs).map(q=>{
      const idx=embaralhar(q.a.map((_,i)=>i));
      return{
        d:q.d,
        q:q.q,
        e:q.e,
        a:idx.map(i=>q.a[i]),
        c:idx.map((orig,novo)=>q.c.includes(orig)?novo:-1).filter(i=>i>=0).sort((x,y)=>x-y),
        multi:q.c.length>1
      };
    });
  }

  window.iniciarSimulado=function(modo,dominio){
    const base = dominio ? BANCO.filter(q=>q.d===dominio) : BANCO;
    S={
      modo, dominio,
      qs:preparar(base),
      i:0,
      respostas:[],
      marcadas:[],
      revelada:false,
      fim:false,
      restante: modo==="prova" ? 45*60 : null,
      timer:null
    };
    S.qs.forEach(()=>{S.respostas.push([]);S.marcadas.push(false);});
    if(S.modo==="prova"){
      S.timer=setInterval(()=>{
        S.restante--;
        if(S.restante<=0){clearInterval(S.timer);finalizar();return;}
        const el=document.getElementById("sim-cron");
        if(el){el.textContent=fmt(S.restante);el.classList.toggle("alerta",S.restante<300);}
      },1000);
    }
    render();
  };

  function fmt(s){const m=Math.floor(s/60),r=s%60;return String(m).padStart(2,"0")+":"+String(r).padStart(2,"0");}
  function acertou(i){
    const r=[...S.respostas[i]].sort((a,b)=>a-b), c=S.qs[i].c;
    return r.length===c.length && r.every((v,k)=>v===c[k]);
  }

  function voltarLink(){
    return '<a href="#" class="sim-back" onclick="voltarAoCurso(event)">← Voltar ao curso</a>';
  }

  window.voltarAoCurso=function(e){
    if(e) e.preventDefault();
    if(S.timer) clearInterval(S.timer);
    location.hash="";
  };

  /* ============================ Telas ============================ */
  window.telaInicialSimulado=function(){
    const porDom = d=>BANCO.filter(q=>q.d===d).length;
    app.innerHTML=`
      ${voltarLink()}
      <div class="eyebrow">Microsoft Certified · Fundamentals</div>
      <h2 class="sim-h1">Simulado do Exame</h2>
      <p class="sim-lead">Banco de ${BANCO.length} questões inéditas, escritas a partir do roteiro oficial de habilidades da prova e distribuídas com o mesmo peso por domínio. Ao final, você vê se passaria ou não, conforme o corte da certificação.</p>

      <div class="sim-trilha">
        <div class="t1 on"></div><div class="t2 on"></div><div class="t3 on"></div>
      </div>
      <div class="sim-trilha-legenda">
        <span>1 · NUVEM ${DOM_PESOS[1]}</span><span>2 · ARQUITETURA ${DOM_PESOS[2]}</span><span>3 · GOVERNANÇA ${DOM_PESOS[3]}</span>
      </div>

      <button class="sim-modo" onclick="iniciarSimulado('prova',null)">
        <strong>Simulado completo</strong>
        <span>${BANCO.length} questões · 45 minutos · resultado só no fim, como na prova real</span>
      </button>
      <button class="sim-modo" onclick="iniciarSimulado('estudo',null)">
        <strong>Modo estudo</strong>
        <span>${BANCO.length} questões · sem cronômetro · resposta e explicação a cada questão</span>
      </button>
      <div class="eyebrow" style="margin:22px 0 10px">Praticar um domínio isolado</div>
      ${[1,2,3].map(d=>`
        <button class="sim-modo" onclick="iniciarSimulado('estudo',${d})">
          <strong>Domínio ${d} — ${DOM_NOMES[d]}</strong>
          <span>${porDom(d)} questões · peso na prova ${DOM_PESOS[d]}</span>
        </button>`).join("")}
      <p class="sim-footnote">A prova oficial do AZ-900 exige 700 de 1000 pontos (70%) para aprovação. Este simulado usa o mesmo corte de 70% como referência de aprovação/reprovação.</p>
    `;
  };

  function telaQuestao(){
    const q=S.qs[S.i], resp=S.respostas[S.i], mostrar=S.revelada;
    const alts=q.a.map((txt,k)=>{
      let cls="sim-alt";
      if(mostrar){
        if(q.c.includes(k)) cls+=" certa";
        else if(resp.includes(k)) cls+=" errada";
      }else if(resp.includes(k)) cls+=" sel";
      return `<button class="${cls}" ${mostrar?"disabled":""} onclick="marcarSimulado(${k})">
        <span class="sim-letra">${String.fromCharCode(65+k)}</span><span>${txt}</span></button>`;
    }).join("");

    app.innerHTML=`
      ${voltarLink()}
      <div class="sim-trilha">
        <div class="t1 ${q.d===1?"on":""}"></div>
        <div class="t2 ${q.d===2?"on":""}"></div>
        <div class="t3 ${q.d===3?"on":""}"></div>
      </div>
      <div class="sim-barra-topo">
        <span class="sim-tag d${q.d}">Domínio ${q.d} · ${DOM_NOMES[q.d]}</span>
        <span class="sim-contador">${S.i+1} / ${S.qs.length}</span>
        ${S.modo==="prova"?`<span class="sim-cronometro ${S.restante<300?"alerta":""}" id="sim-cron">${fmt(S.restante)}</span>`:""}
      </div>
      <div class="sim-card">
        <p class="sim-enunciado">${q.q}</p>
        ${q.multi?`<p class="sim-instrucao">Escolha ${q.c.length} respostas</p>`:""}
        ${alts}
        ${mostrar?`<div class="sim-explica"><b>${acertou(S.i)?"Resposta correta":"Resposta incorreta"}</b>${q.e}</div>`:""}
      </div>
      <div class="sim-acoes">
        <button class="sim-btn sec" onclick="voltarQuestao()" ${S.i===0?"disabled":""}>Anterior</button>
        ${S.modo==="estudo" && !mostrar
          ? `<button class="sim-btn" onclick="verificarSimulado()" ${resp.length===0?"disabled":""}>Verificar</button>`
          : `<button class="sim-btn" onclick="avancarSimulado()">${S.i===S.qs.length-1?"Finalizar":"Próxima"}</button>`}
        <button class="sim-btn ghost ${S.marcadas[S.i]?"marcada":""}" onclick="alternarMarcaSimulado()">
          ${S.marcadas[S.i]?"Marcada":"Marcar para revisão"}</button>
      </div>
      <div class="sim-grade">
        ${S.qs.map((_,k)=>{
          let c="";
          if(S.respostas[k].length) c+=" resp";
          if(S.marcadas[k]) c+=" marc";
          if(k===S.i) c+=" atual";
          return `<button class="${c}" onclick="irParaSimulado(${k})">${k+1}</button>`;
        }).join("")}
      </div>
      <div class="sim-acoes">
        <button class="sim-btn ghost" onclick="finalizarSimulado()">Encerrar e ver resultado</button>
      </div>
    `;
  }

  function telaResultado(){
    const total=S.qs.length;
    const certas=S.qs.map((_,i)=>acertou(i)).filter(Boolean).length;
    const pct=Math.round(certas/total*100);
    const ok=pct>=CORTE_PCT;

    const porDominio=[1,2,3].map(d=>{
      const idx=S.qs.map((q,i)=>q.d===d?i:-1).filter(i=>i>=0);
      if(!idx.length) return "";
      const acc=idx.filter(i=>acertou(i)).length;
      const p=Math.round(acc/idx.length*100);
      const cor=d===1?"var(--d1)":d===2?"var(--d2)":"var(--d3)";
      return `<div class="sim-dominio-linha">
        <span class="nome">Domínio ${d} — ${DOM_NOMES[d]}</span>
        <span class="barra"><i style="width:${p}%;background:${cor}"></i></span>
        <span class="num">${acc}/${idx.length}</span>
      </div>`;
    }).join("");

    const revisao=S.qs.map((q,i)=>{
      const acertei=acertou(i);
      const minhas=S.respostas[i].length
        ? S.respostas[i].map(k=>String.fromCharCode(65+k)+". "+q.a[k]).join(" | ")
        : "Sem resposta";
      const certas_=q.c.map(k=>String.fromCharCode(65+k)+". "+q.a[k]).join(" | ");
      return `<div class="sim-rev-item" data-acertou="${acertei}">
        <div class="sim-rev-cab">
          <span class="sim-rev-num">Q${i+1}</span>
          <span class="sim-tag d${q.d}">D${q.d}</span>
          <span class="sim-rev-marca ${acertei?"ok":"nao"}">${acertei?"ACERTOU":"ERROU"}</span>
        </div>
        <p class="sim-rev-q">${q.q}</p>
        ${acertei?"":`<p class="sim-rev-r">Você marcou: <b>${minhas}</b></p>`}
        <p class="sim-rev-r">Correta: <b>${certas_}</b></p>
        <div class="sim-explica" style="margin-top:10px"><b>Por quê</b>${q.e}</div>
      </div>`;
    }).join("");

    app.innerHTML=`
      ${voltarLink()}
      <div class="sim-card sim-placar">
        <div class="eyebrow">Resultado</div>
        <div class="sim-nota">${pct}%</div>
        <span class="sim-veredito ${ok?"ok":"nao"}">${ok?"Você passaria: aprovado no corte de 70%":"Você não passaria: abaixo do corte de 70%"}</span>
        <p class="sim-lead" style="margin-top:16px">${certas} de ${total} questões corretas${S.modo==="prova"?` · tempo restante ${fmt(Math.max(S.restante,0))}`:""}</p>
        <p class="sim-footnote">A prova oficial exige 700 de 1000 pontos (70%) para aprovação. Este resultado usa o mesmo corte como referência — não é uma pontuação oficial da Microsoft.</p>
      </div>
      <div class="sim-card">
        <h3>Desempenho por domínio</h3>
        ${porDominio}
      </div>
      <div class="sim-acoes" style="margin-bottom:18px">
        <button class="sim-btn" onclick="telaInicialSimulado()">Novo simulado</button>
        <a href="#" class="sim-btn sec sim-btn-link" onclick="voltarAoCurso(event)">Voltar ao curso</a>
      </div>
      <div class="sim-card">
        <div class="sim-rev-header">
          <h3>Revisão das questões</h3>
          <div class="sim-rev-filtros">
            <button type="button" class="sim-filtro-btn active" data-filtro="todas" onclick="filtrarRevisaoSimulado('todas')">Todas <span class="count">${total}</span></button>
            <button type="button" class="sim-filtro-btn" data-filtro="acertos" onclick="filtrarRevisaoSimulado('acertos')">Acertos <span class="count">${certas}</span></button>
            <button type="button" class="sim-filtro-btn" data-filtro="erros" onclick="filtrarRevisaoSimulado('erros')">Erros <span class="count">${total-certas}</span></button>
          </div>
        </div>
        ${revisao}
        <p class="sim-rev-vazio" id="sim-rev-vazio" hidden>Nenhuma questão nesta categoria.</p>
      </div>
    `;
    app.scrollIntoView({block:"start"});
  }

  window.filtrarRevisaoSimulado=function(tipo){
    var itens=document.querySelectorAll(".sim-rev-item");
    var visiveis=0;
    itens.forEach(function(item){
      var acertou=item.dataset.acertou==="true";
      var mostrar = tipo==="todas" || (tipo==="acertos" && acertou) || (tipo==="erros" && !acertou);
      item.style.display = mostrar ? "" : "none";
      if(mostrar) visiveis++;
    });
    document.querySelectorAll(".sim-filtro-btn").forEach(function(btn){
      btn.classList.toggle("active", btn.dataset.filtro===tipo);
    });
    var vazio=document.getElementById("sim-rev-vazio");
    if(vazio) vazio.hidden = visiveis>0;
  };

  /* ============================ Ações ============================ */
  window.marcarSimulado=function(k){
    const q=S.qs[S.i], r=S.respostas[S.i];
    if(q.multi){
      const p=r.indexOf(k);
      if(p>=0) r.splice(p,1);
      else if(r.length<q.c.length) r.push(k);
    }else{
      S.respostas[S.i]=[k];
    }
    render();
  };
  window.verificarSimulado=function(){S.revelada=true;render();};
  window.alternarMarcaSimulado=function(){S.marcadas[S.i]=!S.marcadas[S.i];render();};
  window.avancarSimulado=function(){
    if(S.i===S.qs.length-1){finalizar();return;}
    S.i++;S.revelada=false;render();app.scrollIntoView({block:"start"});
  };
  window.voltarQuestao=function(){if(S.i>0){S.i--;S.revelada=false;render();app.scrollIntoView({block:"start"});}};
  window.irParaSimulado=function(k){S.i=k;S.revelada=false;render();app.scrollIntoView({block:"start"});};
  window.finalizarSimulado=function(){
    const semResposta=S.respostas.filter(r=>r.length===0).length;
    if(semResposta>0 && !S.fim){
      if(!confirm(`Faltam ${semResposta} questão(ões) sem resposta. Encerrar mesmo assim?`)) return;
    }
    S.fim=true;
    if(S.timer) clearInterval(S.timer);
    telaResultado();
  };
  function finalizar(){ window.finalizarSimulado(); }
  function render(){S.fim?telaResultado():telaQuestao();}

  window.telaInicialSimulado();
})();
