/* ============================================================
   Simulado AZ-900 — motor do simulado
   Banco de questões ORIGINAIS, escrito a partir do skills outline
   oficial do AZ-900 (não reproduz conteúdo da Microsoft).
   d: 1 = Conceitos de nuvem | 2 = Arquitetura e serviços | 3 = Gerenciamento e governança
   c: índice(s) da(s) alternativa(s) correta(s)
   ============================================================ */
const BANCO = [
/* ---------- DOMÍNIO 1 — Conceitos de nuvem ---------- */
{d:1,q:"Quais são as duas características centrais do modelo baseado em consumo da nuvem pública? (Escolha duas.)",a:["Não há custos iniciais para começar a usar os recursos","É possível parar de pagar assim que o recurso deixa de ser usado","Exige contrato mínimo de três anos por recurso","Cobra um valor fixo mensal, independentemente do uso"],c:[0,1],e:"O modelo de consumo elimina o investimento adiantado (CapEx) e permite parar de pagar assim que o recurso não é mais necessário — sem contrato mínimo nem valor fixo."},
{d:1,q:"Por que a computação em nuvem geralmente sai mais barata do que manter datacenters locais equivalentes?",a:["Você paga apenas pelo que consome, sem manter capacidade ociosa","O provedor terceiriza toda a segurança para o cliente","Os preços são fixados por lei em todas as regiões","A nuvem elimina a necessidade de qualquer suporte técnico"],c:[0],e:"Datacenters locais exigem comprar capacidade para o pico de demanda e mantê-la ociosa no resto do tempo. Na nuvem, você paga só pelo que usa, evitando esse desperdício."},
{d:1,t:"reforco-fundamentos",q:"Adicionar mais memória e mais vCPUs a uma máquina virtual existente é um exemplo de:",a:["Escala horizontal (scale out)","Escala vertical (scale up)","Elasticidade automática","Recuperação de desastre"],c:[1],e:"Escala vertical aumenta a capacidade de uma única instância (mais RAM/CPU). Escala horizontal aumenta o número de instâncias que atendem à carga."},
{d:1,q:"Implantar e configurar rapidamente recursos conforme os requisitos de negócio mudam é chamado de:",a:["Agilidade","Elasticidade","Escalabilidade","Governança"],c:[0],e:"Agilidade é a velocidade de reação a uma nova necessidade do negócio. Elasticidade é o ajuste automático em tempo real à demanda; escalabilidade é a capacidade de crescer."},
{d:1,t:"reforco-fundamentos",q:"Aumentar a capacidade de um sistema adicionando mais instâncias de um recurso (em vez de aumentar o tamanho de uma única instância) é chamado de:",a:["Escala vertical (scale up)","Escala horizontal (scale out)","Redução de custos","Governança"],c:[1],e:"Escala horizontal (scale out) soma mais instâncias idênticas para atender à carga. Escala vertical troca o tamanho de uma instância só."},
{d:1,q:"De que a alta disponibilidade em nuvem pública depende diretamente?",a:["Do SLA (contrato de nível de serviço) firmado com o provedor","Do preço pago pela assinatura","Do idioma configurado no portal","Da quantidade de contas de usuário criadas"],c:[0],e:"O SLA é o compromisso contratual de disponibilidade do provedor — é ele que define, em número, o quanto o serviço promete ficar no ar."},
{d:1,q:"Dimensionar automaticamente um aplicativo para cima e para baixo, conforme a demanda oscila em tempo real, é um exemplo de:",a:["Agilidade","Elasticidade","Governança","Recuperação de desastre"],c:[1],e:"Elasticidade é justamente o ajuste automático (para cima e para baixo) em resposta a mudanças reais de carga, ao contrário de agilidade, que é sobre velocidade de implantar algo novo."},
{d:1,q:"Na computação em nuvem, o que permite implantar os mesmos aplicativos em datacenters regionais espalhados pelo mundo, aproximando o serviço dos usuários finais?",a:["Recuperação de desastre","Localização geográfica (distribuição geográfica)","Elasticidade","Governança"],c:[1],e:"A distribuição geográfica dos datacenters do provedor é o que permite posicionar aplicativos fisicamente perto dos usuários em qualquer parte do mundo — não é sobre recuperação de desastre nem sobre ajuste automático de carga."},
{d:1,t:"reforco-classificacao",q:"Qual modelo de serviço de nuvem oferece o maior grau de controle sobre o ambiente?",a:["Software como serviço (SaaS)","Plataforma como serviço (PaaS)","Infraestrutura como serviço (IaaS)","Nenhum: o controle é sempre do provedor"],c:[2],e:"Em IaaS o cliente controla o sistema operacional e tudo acima dele — é o modelo com maior grau de controle, em troca de mais responsabilidade de gerenciamento."},
{d:1,q:"Em um modelo PaaS, quais dois componentes permanecem como responsabilidade do provedor de nuvem? (Escolha duas.)",a:["O sistema operacional","A rede física","Os dados da aplicação","As identidades dos usuários"],c:[0,1],e:"Em PaaS, o provedor cuida do sistema operacional e de toda a infraestrutura física (incluindo a rede), liberando o cliente para focar só na aplicação. Dados e identidades continuam sempre sob responsabilidade do cliente, em qualquer modelo."},
{d:1,q:"Em um modelo SaaS, do que o cliente é responsável?",a:["Do sistema operacional das máquinas que executam o software","Dos dados inseridos no serviço e do controle de acesso a eles","Da rede física do datacenter","Da manutenção do hardware"],c:[1],e:"Em SaaS o provedor entrega e gerencia toda a pilha técnica. Ao cliente restam os dados que ele insere no serviço e quem tem acesso a eles."},
{d:1,q:"Uma equipe quer focar só em escrever e publicar o código de uma aplicação, sem se preocupar em gerenciar servidores, sistema operacional ou runtime. Qual modelo de serviço atende melhor?",a:["Infraestrutura como serviço (IaaS)","Plataforma como serviço (PaaS)","Colocation","Nenhum modelo de nuvem resolve isso"],c:[1],e:"PaaS entrega a plataforma de execução pronta (SO, runtime, manutenção), deixando a equipe livre para cuidar só do código e da configuração da aplicação."},
{d:1,t:"reforco-classificacao",q:"O Banco de Dados SQL do Azure (Azure SQL Database), um serviço de banco de dados totalmente gerenciado pela Microsoft, é um exemplo de qual modelo de serviço?",a:["Infraestrutura como serviço (IaaS)","Plataforma como serviço (PaaS)","Software como serviço (SaaS)","Nenhum dos três — é um serviço à parte"],c:[1],e:"O Azure SQL Database é PaaS: a Microsoft gerencia o sistema operacional, o motor do banco e a infraestrutura; o cliente cuida só do schema, dos dados e da configuração da aplicação."},
{d:1,t:"reforco-classificacao",q:"Redes virtuais (VNets) do Azure são um exemplo de qual tipo de serviço de nuvem?",a:["Infraestrutura como serviço (IaaS)","Plataforma como serviço (PaaS)","Software como serviço (SaaS)","Function as a Service (FaaS)"],c:[0],e:"Redes virtuais são um recurso de infraestrutura de baixo nível que o cliente configura diretamente — por isso pertencem ao IaaS, não a PaaS ou SaaS."},
{d:1,q:"[ ] refere-se aos custos iniciais, incorridos uma única vez, como comprar servidores físicos para um datacenter.",a:["Despesas operacionais (OpEx)","Despesas de capital (CapEx)","Modelo de consumo","Custo de propriedade recorrente"],c:[1],e:"CapEx é o investimento adiantado, único, tipicamente em ativos físicos — o oposto do gasto contínuo e proporcional ao uso (OpEx), que é o modelo típico da nuvem."},
{d:1,t:"reforco-classificacao",q:"Qual modelo de serviço de nuvem normalmente é licenciado por assinatura mensal ou anual, com o software já pronto para uso final?",a:["Infraestrutura como serviço (IaaS)","Plataforma como serviço (PaaS)","Software como serviço (SaaS)","Nenhum: todos usam o mesmo modelo de licenciamento"],c:[2],e:"SaaS entrega o software pronto, com licenciamento tipicamente cobrado por assinatura recorrente (ex.: Microsoft 365), sem que o cliente gerencie nenhuma camada técnica por baixo."},
{d:1,q:"Quais são dois atributos característicos do modelo de implantação de nuvem privada? (Escolha duas.)",a:["O hardware precisa ser comprado pela organização","A organização tem controle total sobre os recursos físicos e a segurança","O custo inicial é sempre zero","Os recursos são compartilhados publicamente com outras empresas"],c:[0,1],e:"Nuvem privada é de uso exclusivo de uma organização, que precisa comprar/manter o hardware — em troca, ganha controle total sobre os recursos físicos e a postura de segurança."},
{d:1,q:"Uma empresa mantém parte da infraestrutura em servidores locais e migra progressivamente outras cargas para o Azure, mantendo os dois ambientes conectados. Qual modelo de implantação está em uso?",a:["Nuvem pública","Nuvem privada","Nuvem híbrida","Nuvem comunitária"],c:[2],e:"Nuvem híbrida combina um ambiente local (ou privado) com a nuvem pública, permitindo migrar cargas gradualmente e manter os dois ambientes integrados."},
{d:1,q:"Backup em nuvem, replicação de dados entre regiões e distribuição geográfica são recursos usados para viabilizar o quê?",a:["Um plano de recuperação de desastre","A redução do CapEx","A governança de custos","O modelo de consumo"],c:[0],e:"Backup, replicação e distribuição geográfica são os blocos de construção clássicos de um plano de recuperação de desastre (disaster recovery) — restaurar o serviço depois de um evento de grande escala."},
{d:1,q:"Qual benefício é obtido ao distribuir recursos de uma aplicação entre várias regiões do Azure?",a:["Escalabilidade","Alta disponibilidade","Redução automática de custos","Governança"],c:[1],e:"Distribuir recursos entre regiões protege a aplicação contra a indisponibilidade de uma região inteira, aumentando a disponibilidade geral do serviço — isso é alta disponibilidade, não escalabilidade (que é sobre crescer capacidade)."},
{d:1,q:"No modelo de responsabilidade compartilhada, ao implantar máquinas virtuais no Azure, do que o provedor de nuvem permanece responsável?",a:["Do sistema operacional da VM","Dos datacenters físicos e do hardware","Dos dados armazenados dentro da VM","Da configuração de rede dentro da VM"],c:[1],e:"Mesmo em IaaS, onde o cliente controla o sistema operacional e tudo acima dele, o provedor continua responsável pelos datacenters físicos e pelo hardware — a camada que nunca deixa de ser dele, em nenhum modelo de serviço."},
{d:1,q:"Quais são duas características do modelo de implantação de nuvem pública? (Escolha duas.)",a:["Os servidores e o armazenamento pertencem a um provedor terceiro","Os serviços são oferecidos pela internet para quem quiser contratá-los","O hardware precisa ser comprado pela própria organização","Os recursos são de uso exclusivo de uma única empresa"],c:[0,1],e:"Na nuvem pública, a infraestrutura pertence e é operada por um provedor terceiro (como a Microsoft), que oferece os serviços pela internet a qualquer cliente — o oposto da nuvem privada, onde a própria organização compra o hardware e mantém uso exclusivo."},
{d:1,q:"Quais são dois serviços básicos que praticamente todo provedor de nuvem oferece?",a:["Computação","Armazenamento","Suporte técnico humano 24 horas por telefone","Treinamento presencial das equipes"],c:[0,1],e:"Não importa o provedor: computação (processamento) e armazenamento são os dois serviços básicos presentes em praticamente qualquer oferta de nuvem — os demais itens não são serviços de nuvem em si."},

/* ---------- DOMÍNIO 2 — Arquitetura e serviços ---------- */
{d:2,t:"revisao-hierarquia",q:"[ ] é o contêiner lógico usado para organizar e gerenciar recursos relacionados do Azure, como uma unidade só.",a:["Um grupo de gerenciamento","Um grupo de recursos","O Azure Resource Manager","Uma zona de disponibilidade"],c:[1],e:"O grupo de recursos é o contêiner lógico dentro do qual recursos relacionados são organizados, implantados e gerenciados como uma unidade — não confundir com o ARM (o serviço que processa as solicitações) nem com grupos de gerenciamento (que agrupam assinaturas)."},
{d:2,q:"Uma conta de armazenamento chamada 'storage001' criada no Azure é, tecnicamente, o quê?",a:["Uma assinatura","Um recurso","Um grupo de gerenciamento","Uma região"],c:[1],e:"Uma conta de armazenamento é um recurso do Azure como qualquer outro — vive dentro de um grupo de recursos, dentro de uma assinatura."},
{d:2,q:"Por padrão, para qual unidade o Azure gera faturas de cobrança separadas?",a:["Grupo de recursos","Região","Assinatura","Grupo de gerenciamento"],c:[2],e:"A assinatura é a unidade de cobrança do Azure — cada assinatura recebe sua própria fatura, mesmo que existam vários grupos de recursos dentro dela."},
{d:2,t:"revisao-regioes",q:"O que permite replicar recursos entre regiões geograficamente distantes, viabilizando a continuidade de negócios em caso de falha de uma região inteira?",a:["Zonas de disponibilidade","Pares de região (region pairs)","Grupos de recursos","Bloqueios de recursos"],c:[1],e:"Cada região do Azure é emparelhada com outra dentro da mesma geografia — os pares de região existem justamente para dar suporte à recuperação entre regiões em caso de falha ampla."},
{d:2,t:"revisao-regioes",q:"O que são zonas de disponibilidade do Azure?",a:["Regiões distintas em continentes diferentes","Datacenters fisicamente separados dentro de uma mesma região, com energia e rede independentes","Cópias de segurança armazenadas fora do Azure","Duas regiões emparelhadas para continuidade de negócios"],c:[1],e:"Zonas de disponibilidade são datacenters fisicamente separados dentro da MESMA região — não devem ser confundidas com pares de região, que são duas regiões diferentes emparelhadas entre si."},
{d:2,q:"Quais dois recursos do Azure podem ser implantados usando zonas de disponibilidade para maior resiliência? (Escolha duas.)",a:["Bancos de Dados SQL do Azure","Máquinas virtuais do Azure","Grupos de gerenciamento","Bloqueios de recursos"],c:[0,1],e:"VMs e o Azure SQL Database são exemplos de recursos que suportam implantação com reconhecimento de zona de disponibilidade. Grupos de gerenciamento e bloqueios são construções lógicas, não recursos que 'rodam' em uma zona."},
{d:2,q:"Qual serviço do Azure implanta e gerencia um conjunto de máquinas virtuais idênticas, ajustando automaticamente a quantidade conforme a demanda?",a:["Instâncias de Contêiner do Azure","Conjuntos de Escala de Máquinas Virtuais (VM Scale Sets)","Azure Functions","Azure Virtual Desktop"],c:[1],e:"VM Scale Sets gerenciam um grupo de VMs idênticas e ajustam automaticamente a quantidade de instâncias conforme regras de dimensionamento — diferente de Instâncias de Contêiner, que roda um único contêiner isolado."},
{d:2,t:"revisao-containers",q:"O que você deve usar para executar um pequeno trecho de código em resposta a um evento, sem precisar administrar nenhum servidor?",a:["Máquinas Virtuais do Azure","Azure Functions","Azure Virtual Desktop","Conjuntos de Escala de VMs"],c:[1],e:"Azure Functions é o serviço serverless orientado a eventos: você escreve a função, ela roda quando o evento acontece, e a cobrança acompanha só a execução."},
{d:2,q:"Qual cenário é um caso de uso típico de um Gateway de VPN do Azure?",a:["Conectar um datacenter local ao Azure por uma conexão criptografada pela internet","Conectar duas VNets do Azure entre si","Expor um serviço PaaS dentro de uma VNet","Distribuir tráfego HTTP entre várias regiões"],c:[0],e:"O Gateway de VPN cria um túnel criptografado entre uma rede local (on-premises) e uma rede virtual do Azure, tipicamente sobre a internet pública."},
{d:2,q:"O que dá a usuários em dispositivos Mac ou Android acesso a um ambiente de trabalho Windows completo, hospedado no Azure?",a:["Azure Virtual Desktop","Azure Functions","Azure Arc","Application Gateway"],c:[0],e:"O Azure Virtual Desktop entrega áreas de trabalho e aplicativos Windows virtualizados a partir do Azure, acessíveis de qualquer dispositivo, incluindo Mac e Android."},
{d:2,q:"Quais são dois cenários de uso comuns para o Armazenamento de Blobs do Azure? (Escolha duas.)",a:["Servir imagens e documentos diretamente para um navegador Web","Armazenar dados para fins de backup e restauração","Montar um compartilhamento de rede acessível por SMB","Rodar um banco de dados relacional gerenciado"],c:[0,1],e:"Blob Storage é feito para grandes volumes de dados não estruturados — servir arquivos estáticos para a Web e guardar backups são cenários clássicos. Compartilhamento SMB é papel do Azure Files; banco relacional é outro serviço."},
{d:2,t:"revisao-storage",q:"Qual serviço de armazenamento do Azure oferece compartilhamentos de arquivos totalmente gerenciados, acessíveis pelos protocolos SMB e NFS?",a:["Armazenamento de Blobs do Azure","Arquivos do Azure (Azure Files)","Armazenamento de Filas do Azure","Azure Data Box"],c:[1],e:"Azure Files é o serviço de compartilhamento de arquivos gerenciado, acessível via SMB (e NFS), podendo ser montado tanto por servidores locais quanto por VMs do Azure."},
{d:2,q:"Qual camada (tier) de acesso do Armazenamento de Blobs tem o maior custo de armazenamento, em troca do acesso mais rápido aos dados?",a:["Frequente (Hot)","Esporádica (Cool)","Arquivo morto (Archive)","Fria (Cold)"],c:[0],e:"A camada Hot é otimizada para acesso frequente e rápido, o que a torna a mais cara para armazenar — o oposto de Archive, a mais barata e a mais lenta para recuperar."},
{d:2,t:"revisao-identidade",q:"O que garante que apenas dispositivos compatíveis e gerenciados possam acessar determinados aplicativos corporativos?",a:["Acesso condicional","Controle de acesso baseado em função (RBAC)","Autenticação multifator (MFA) sozinha","Marcas de recurso (tags)"],c:[0],e:"Acesso condicional avalia sinais como o estado de compatibilidade do dispositivo e decide se libera, bloqueia ou exige um fator extra — é a ferramenta certa quando a pergunta menciona uma condição de acesso."},
{d:2,q:"O que permite que um usuário gerencie todos os recursos de um grupo de recursos específico, sem conceder acesso a outros grupos?",a:["Azure Policy","Controle de acesso baseado em função (RBAC)","Bloqueio de recursos","Acesso condicional"],c:[1],e:"RBAC atribui papéis que definem o que uma identidade pode fazer sobre um escopo específico (como um grupo de recursos) — é sobre permissão, não sobre regras de criação nem condições de login."},
{d:2,t:"reforco-fundamentos",q:"Qual estratégia de segurança usa uma série de mecanismos de proteção em camadas, para retardar o avanço de um invasor que busca acesso não autorizado a dados?",a:["DDoS (negação de serviço distribuído)",  "Defesa em profundidade (defense in depth)", "Acesso condicional", "Zero Trust sozinho"],c:[1],e:"Defesa em profundidade é o conceito de várias camadas de proteção (rede, identidade, aplicação, dados) que juntas retardam um ataque. DDoS é um tipo de ataque, não uma estratégia de defesa."},
{d:2,t:"revisao-identidade",q:"Um usuário informa a senha e, em seguida, precisa aprovar a entrada usando um aplicativo autenticador no celular. Qual mecanismo de segurança está em uso?",a:["Autenticação multifator (MFA)","Acesso condicional","Controle de acesso baseado em função (RBAC)","Criptografia em repouso"],c:[0],e:"MFA exige mais de um fator de categorias diferentes — algo que você sabe (senha) e algo que você tem (o celular com o app autenticador)."},
{d:2,t:"revisao-identidade",q:"O que você deve usar para criar identidades híbridas, sincronizando contas de um Active Directory local com um locatário do Microsoft Entra ID?",a:["Microsoft Entra Connect","Azure Key Vault","Acesso condicional","Microsoft Entra Domain Services"],c:[0],e:"O Microsoft Entra Connect sincroniza identidades entre o Active Directory local e o Entra ID, criando uma identidade híbrida usável nos dois ambientes."},
{d:2,q:"O que permite que um usuário faça login uma única vez e, a partir daí, acesse vários aplicativos e recursos de provedores diferentes sem se autenticar de novo?",a:["RBAC","SSO (logon único)","Acesso condicional","Zero Trust"],c:[1],e:"SSO (Single Sign-On) é exatamente isso: uma autenticação válida para múltiplos sistemas, eliminando a necessidade de logar de novo em cada um."},
{d:2,q:"Como você acessa recursos do Active Directory Domain Services (AD DS) no Azure sem precisar implantar e manter seus próprios controladores de domínio?",a:["Usando o Microsoft Entra Connect","Usando o Microsoft Entra Domain Services","Usando o Azure Key Vault","Usando o Azure Arc"],c:[1],e:"O Microsoft Entra Domain Services fornece serviços de domínio gerenciados (compatíveis com AD DS) sem que você precise operar seus próprios controladores de domínio."},
{d:2,t:"revisao-rede",q:"Como permitir que recursos hospedados em duas redes virtuais (VNets) diferentes do Azure se comuniquem diretamente entre si, pela rede da Microsoft?",a:["Configurando um emparelhamento de rede virtual (VNet peering)","Configurando um Service Endpoint","Criando um Gateway de rede local","Habilitando o Azure Front Door"],c:[0],e:"O emparelhamento de VNets conecta duas redes virtuais entre si pelo backbone da Microsoft, sem passar pela internet pública."},
{d:2,t:"revisao-rede",q:"O que você deve usar para conectar um recurso PaaS do Azure, como o Banco de Dados SQL do Azure, diretamente a uma rede virtual, mantendo o tráfego dentro da rede da Microsoft?",a:["Emparelhamento de rede virtual (peering)","Um Service Endpoint (ponto de extremidade de serviço)","Um Gateway de rede local","O Azure Front Door"],c:[1],e:"Service Endpoints conectam um serviço PaaS (como o SQL Database) a uma VNet — diferente do peering, que conecta duas VNets entre si."},
{d:2,q:"Em uma configuração de VPN Site a Site, qual objeto do Azure representa a rede local (on-premises) do outro lado da conexão?",a:["Um gateway de rede virtual","Um gateway de rede local","Uma zona de disponibilidade","Um Service Endpoint"],c:[1],e:"O 'gateway de rede local' é o objeto que descreve, do lado do Azure, o endereço e o espaço de endereçamento da rede local com a qual a VPN Site a Site se conecta."},
{d:2,t:"revisao-rede",q:"Quais dois serviços do Azure conectam uma rede local (on-premises) diretamente a recursos do Azure? (Escolha duas.)",a:["Gateway de VPN do Azure","ExpressRoute","Emparelhamento de rede virtual","Azure Front Door"],c:[0,1],e:"Tanto o Gateway de VPN (sobre a internet pública, criptografado) quanto o ExpressRoute (conexão privada dedicada) conectam uma rede local ao Azure — peering e Front Door não envolvem uma rede local."},
{d:2,q:"Uma organização tem 40 assinaturas do Azure e precisa aplicar a mesma política de conformidade a todas elas de uma vez. Qual recurso deve usar?",a:["Grupos de gerenciamento","Grupos de recursos","Grupos de segurança de rede","Zonas de disponibilidade"],c:[0],e:"Grupos de gerenciamento ficam acima das assinaturas na hierarquia e permitem aplicar políticas e controles de acesso herdados por todas as assinaturas contidas neles de uma vez."},
{d:2,q:"Quais dois componentes ficam contidos dentro de uma assinatura do Azure?",a:["Grupos de recursos","Recursos individuais","Grupos de gerenciamento","Locatários do Microsoft Entra ID"],c:[0,1],e:"A assinatura contém os grupos de recursos e, dentro deles, os recursos individuais. Grupos de gerenciamento ficam ACIMA da assinatura na hierarquia, não dentro dela; o locatário do Entra ID é uma estrutura de identidade separada."},
{d:2,q:"O que é, tecnicamente, uma máquina virtual do Azure?",a:["Uma emulação por software de um computador físico, com processador, memória, armazenamento e rede próprios","Um contêiner leve que compartilha o kernel do sistema operacional host","Um serviço de armazenamento de arquivos gerenciado","Um grupo de servidores físicos dedicados a um único cliente"],c:[0],e:"Uma VM é uma emulação de software de um computador físico completo — com seu próprio processador, memória, armazenamento e placa de rede virtuais — rodando sobre o hardware físico do datacenter do Azure."},
{d:2,q:"Quais dois serviços o Microsoft Entra ID fornece?",a:["Autenticação","Logon único (SSO)","Armazenamento de blobs","Balanceamento de carga de rede"],c:[0,1],e:"O Entra ID é a plataforma de identidade do Azure: autentica usuários e viabiliza o logon único (SSO) entre múltiplos aplicativos. Armazenamento e balanceamento de carga são serviços de infraestrutura, sem relação com identidade."},

/* ---------- DOMÍNIO 3 — Gerenciamento e governança ---------- */
{d:3,t:"revisao-custos",q:"Quais dois fatores influenciam diretamente o custo de um recurso no Azure? (Escolha duas.)",a:["A região em que o recurso é implantado","O tráfego de saída de dados (egresso)","A quantidade de contas de usuário cadastradas no portal","O idioma configurado no portal do Azure"],c:[0,1],e:"O preço varia conforme a região (energia, impostos, disponibilidade local) e conforme o volume de dados que sai do datacenter. Idioma do portal e número de contas cadastradas não afetam o preço."},
{d:3,t:"revisao-custos",q:"Qual ferramenta você deve usar para estimar o custo mensal de uma solução PaaS antes de implantar qualquer recurso?",a:["Calculadora de Preços do Azure","Microsoft Cost Management","Azure Advisor","Calculadora de TCO"],c:[0],e:"A Calculadora de Preços monta a estimativa a partir dos serviços e tamanhos escolhidos, antes mesmo de criar o recurso — a Calculadora de TCO, em contraste, compara o custo de um ambiente local já existente com o Azure."},
{d:3,t:"revisao-custos",q:"Quais dois recursos estão disponíveis no Gerenciamento de Custos + Cobrança do Azure (Cost Management + Billing)? (Escolha duas.)",a:["Criar e gerenciar orçamentos","Gerar relatórios históricos e prever uso futuro","Estimar o custo total de propriedade antes da implantação","Bloquear a exclusão acidental de um recurso"],c:[0,1],e:"Cost Management + Billing acompanha o gasto real: orçamentos, alertas e previsões. Estimar TCO antes da implantação é papel da Calculadora de Preços/TCO, não do Cost Management; bloquear exclusão é função de Resource Locks."},
{d:3,t:"revisao-governanca",q:"Como associar os custos de recursos do Azure a diferentes departamentos ou projetos, sem alterar a localização física ou o grupo de recursos onde esses recursos vivem?",a:["Criando assinaturas separadas por departamento","Aplicando marcas de recurso (tags)","Movendo os recursos para grupos de recursos diferentes","Usando Azure Policy"],c:[1],e:"Tags são pares chave-valor anexados aos recursos que permitem organizar relatórios de custo por departamento, ambiente ou projeto — sem precisar mexer em onde o recurso está hospedado."},
{d:3,t:"revisao-governanca",q:"A quais escopos um bloqueio de recursos (resource lock) pode ser aplicado no Azure?",a:["Apenas a uma assinatura inteira","Apenas a um grupo de recursos inteiro","A uma assinatura, um grupo de recursos ou um recurso individual","Apenas a um grupo de gerenciamento"],c:[2],e:"Bloqueios podem ser aplicados em três níveis: assinatura, grupo de recursos ou recurso individual — mas não a um grupo de gerenciamento, que fica acima das assinaturas."},
{d:3,q:"O que você precisa para acessar o Azure Cloud Shell?",a:["Um navegador da Web","O Azure CLI instalado localmente","Uma VM dedicada só para o Cloud Shell","Uma licença adicional do Azure"],c:[0],e:"O Cloud Shell roda inteiramente no navegador, já autenticado na sessão do portal — não exige nenhuma instalação local nem licença extra."},
{d:3,q:"Quais duas ferramentas do Azure você pode usar para criar uma nova máquina virtual mesmo a partir de um smartphone Android? (Escolha duas.)",a:["O portal do Azure, pelo navegador do celular","O PowerShell rodando dentro do Azure Cloud Shell","Um aplicativo nativo de desktop do Windows","Um cliente RDP instalado localmente"],c:[0,1],e:"Tanto o portal do Azure (acessível por qualquer navegador) quanto o PowerShell dentro do Cloud Shell (também acessado via navegador) funcionam em qualquer dispositivo com navegador, incluindo Android — nenhum exige um app de desktop."},
{d:3,q:"Como gerenciar e aplicar governança (políticas, RBAC, tags) sobre servidores físicos do próprio datacenter e VMs de outra nuvem, sem migrá-los para o Azure?",a:["Azure Arc","Azure Migrate","Azure Site Recovery","Azure Lighthouse"],c:[0],e:"Azure Arc estende as ferramentas de gerenciamento e governança do Azure a recursos que estão fora dele — servidores locais, outras nuvens — sem precisar migrar fisicamente nada."},
{d:3,t:"revisao-monitor",q:"Quais duas ações o Azure Advisor realiza sobre o seu ambiente? (Escolha duas.)",a:["Analisa recursos existentes e recomenda melhorias de custo, segurança, confiabilidade e desempenho","Notifica quando surgem novas recomendações de redução de custo","Coleta métricas de CPU em tempo real e dispara alertas","Informa sobre interrupções na plataforma Azure"],c:[0,1],e:"O Advisor é proativo em analisar sua configuração e sugerir melhorias — inclusive te avisando quando aparecem novas formas de economizar. Coletar métricas é papel do Monitor; informar interrupções é papel do Service Health."},
{d:3,t:"revisao-monitor",q:"Onde você encontra o relatório de causa raiz (RCA) de uma interrupção de serviço do Azure, além de avisos sobre manutenções planejadas essenciais à sua organização?",a:["Azure Monitor","Azure Advisor","Integridade do Serviço do Azure (Service Health)","Application Insights"],c:[2],e:"O Service Health é a fonte de RCAs, interrupções e manutenções planejadas que afetam especificamente as assinaturas e regiões usadas pelo cliente — não confundir com Monitor (telemetria dos seus próprios recursos)."},
{d:3,t:"revisao-monitor",q:"Qual serviço detecta automaticamente anomalias de desempenho em aplicativos Web, monitorando tempo de resposta e taxa de falhas de requisição?",a:["Azure Service Health","Azure Application Insights","Azure Arc","Azure Blueprints"],c:[1],e:"Application Insights é o componente do Azure Monitor voltado ao desempenho de aplicações, com detecção automática de anomalias em requisições e exceções."},
{d:3,t:"revisao-monitor",q:"Uma equipe quer configurar uma solução personalizada com limites (thresholds) de uso de CPU que, ao serem ultrapassados, acionem o dimensionamento automático de um grupo de VMs. Qual serviço deve incluir na solução?",a:["Azure Advisor","Azure Monitor","Integridade do Serviço do Azure","Azure Policy"],c:[1],e:"Azure Monitor é quem coleta métricas e permite configurar limites (thresholds) que disparam ações automáticas, como o autoscaling — o padrão inverso do Advisor, que só recomenda, não aciona nada sozinho."},
{d:3,t:"revisao-governanca",q:"Uma organização quer garantir que nenhuma equipe implante máquinas virtuais com mais de 4 vCPUs, em nenhuma assinatura. Qual serviço aplica essa restrição automaticamente?",a:["Bloqueio de recursos (resource lock)","Azure Policy","Controle de acesso baseado em função (RBAC)","Marcas de recurso (tags)"],c:[1],e:"Azure Policy é quem impõe regras sobre COMO os recursos podem ser criados (como um limite de tamanho de VM) — bloqueios protegem recursos já existentes, não limitam a criação."},
{d:3,t:"revisao-governanca",q:"Uma organização quer impedir que qualquer recurso seja criado fora de uma região específica, em qualquer assinatura da empresa. Qual serviço aplica essa restrição automaticamente?",a:["Bloqueio de recursos (resource lock)","Controle de acesso baseado em função (RBAC)","Azure Policy","Grupos de gerenciamento sozinhos"],c:[2],e:"Azure Policy avalia os recursos contra regras definidas — incluindo a região permitida — e pode negar a criação de itens fora do padrão."},
{d:3,t:"revisao-hierarquia",q:"Qual camada do Azure recebe e processa as solicitações de qualquer ferramenta ou API (portal, CLI, PowerShell, SDKs) para criar, atualizar ou excluir recursos?",a:["Grupos de gerenciamento","Grupo de recursos","Azure Resource Manager (ARM)","Microsoft Entra ID"],c:[2],e:"O ARM é a camada única de gerenciamento por trás de tudo no Azure — processa qualquer solicitação, venha de onde vier. Não é um contêiner (isso é grupo de recursos) nem um agrupador de assinaturas (isso é grupo de gerenciamento)."},
{d:3,t:"revisao-hierarquia",q:"O que você deve usar para definir, em um arquivo JSON declarativo, quais recursos do Azure provisionar e com quais configurações?",a:["Um script imperativo em Azure CLI","Um Modelo do Azure Resource Manager (ARM template)","Um grupo de gerenciamento","Uma marca de recurso (tag)"],c:[1],e:"Modelos ARM descrevem o estado final desejado da infraestrutura em JSON declarativo — diferente da CLI/PowerShell, que são formas imperativas (um comando de cada vez)."},
{d:3,q:"Uma VM de produção é usada de forma consistente ao longo de todo o ano, sem grandes variações. Qual opção de compra reduz o custo dessa VM sem perder nenhuma funcionalidade?",a:["Redimensionar a VM para um tamanho menor","Azure Reservations","Desalocar a VM fora do horário comercial","Mudar a VM para a camada Archive"],c:[1],e:"Reservations é a opção certa para uso previsível e constante de longo prazo — oferece desconto significativo em troca de um compromisso de 1 ou 3 anos, sem reduzir a capacidade disponível."},
{d:3,q:"Uma VM é usada apenas em horário comercial e precisa ter seus discos e dados preservados fora desse período, com a menor cobrança possível de computação. Qual ação resolve isso?",a:["Redimensionar a VM para um tamanho menor","Excluir a VM todo fim de expediente","Desalocar a VM quando ela não estiver em uso","Aplicar um bloqueio de recursos na VM"],c:[2],e:"Desalocar libera o hardware de computação e interrompe essa cobrança — discos e dados continuam preservados, intactos, prontos para quando a VM for iniciada de novo."},
{d:3,q:"Quais duas ferramentas você pode usar dentro do Azure Cloud Shell para gerenciar o ambiente?",a:["Azure CLI","Azure PowerShell","Visual Studio instalado localmente","Um cliente RDP dedicado"],c:[0,1],e:"O Cloud Shell dá acesso, direto do navegador, tanto ao Azure CLI (bash) quanto ao Azure PowerShell — as duas interfaces de linha de comando oficiais para gerenciar recursos, sem precisar instalar nada localmente."},
{d:3,q:"Uma equipe acostumada a shell bash em Linux precisa administrar recursos do Azure por linha de comando. Qual ferramenta recomendar?",a:["Azure CLI","Azure PowerShell","Modelos do Azure Resource Manager (ARM)","Azure Advisor"],c:[0],e:"O Azure CLI usa uma sintaxe multiplataforma pensada para shells como bash, o ambiente já familiar para equipes Linux — o PowerShell, embora também multiplataforma, usa uma sintaxe orientada a cmdlets mais associada ao mundo Windows."}
];
/* ============================================================
   Questões extras — usadas SÓ nos testes de conhecimento por tema
   (aulas com botão "Testar meu conhecimento sobre este tema"), para
   cobrir todo item citado em cada aula. Não entram no simulado geral
   nem na prática por domínio, que continuam usando só o BANCO de 50
   questões acima.
   ============================================================ */
const BANCO_TOPICOS_EXTRA = [
{d:2,t:"revisao-containers",q:"Qual é a diferença entre Instâncias de Contêiner do Azure (ACI) e Serviço de Kubernetes do Azure (AKS)?",a:["ACI orquestra clusters complexos; AKS executa um contêiner isolado","ACI executa contêineres de forma simples e rápida, sem orquestração; AKS fornece orquestração gerenciada do Kubernetes para cargas maiores","Os dois são idênticos, mudando apenas o preço","AKS não suporta contêineres Linux"],c:[1],e:"ACI é a via mais direta para rodar um contêiner isolado, sem orquestrador. AKS entrega um plano de controle de Kubernetes gerenciado, indicado quando há muitos contêineres, escalonamento e implantações coordenadas."},
{d:3,t:"revisao-governanca",q:"Um gestor de TI precisa garantir que um determinado usuário só possa reiniciar máquinas virtuais em um grupo de recursos, sem poder excluí-las nem criar recursos novos. Qual mecanismo do Azure permite atribuir exatamente esse tipo de permissão?",a:["Controle de acesso baseado em função (RBAC)","Azure Policy","Bloqueio de recursos (resource lock)","Marcas (tags)"],c:[0],e:"RBAC atribui papéis que definem quais ações uma identidade pode executar sobre quais recursos — é a ferramenta certa para conceder permissões granulares como 'reiniciar, mas não excluir'. Policy define regras sobre como os recursos podem existir, não quem pode operá-los; Locks protegem contra exclusão/alteração independentemente de quem tenta; Tags só organizam, não controlam permissão."},
{d:3,t:"revisao-custos",q:"Uma empresa sabe que vai manter um conjunto fixo de VMs rodando 24 horas por dia, todos os dias, pelos próximos 3 anos. Qual opção de compra reduz o custo dessas VMs em troca de um compromisso de uso de longo prazo?",a:["Reservas do Azure","Calculadora de Preços do Azure","Alertas do Azure Monitor","Desalocação programada"],c:[0],e:"Reservas do Azure oferecem desconto significativo (até cerca de 72% frente ao pay-as-you-go) em troca de um compromisso de uso de 1 ou 3 anos sobre um recurso específico — ideal para cargas previsíveis e constantes. A Calculadora estima custo antes de criar, não reduz preço; Alertas do Monitor notificam eventos, não afetam preço; desalocar economiza em VMs ociosas, não em cargas que rodam o tempo todo."},
{d:3,t:"revisao-custos",q:"Uma equipe desliga uma VM de testes todo fim de semana usando 'Desalocar' pelo portal do Azure, em vez de só desligar o sistema operacional de dentro da VM. Qual é o efeito prático dessa escolha?",a:["Os discos da VM são apagados, mas a cobrança de computação continua","A VM é excluída permanentemente e precisa ser recriada do zero","A cobrança pela computação (CPU/RAM) para, mas os discos continuam existindo e sendo cobrados normalmente","Não há diferença nenhuma em relação a desligar pelo sistema operacional"],c:[2],e:"Desalocar libera o hardware de computação reservado para a VM e interrompe a cobrança de CPU/RAM — mas os discos permanecem intactos (e continuam sendo cobrados, a um custo bem menor que a computação). Só desligar pelo sistema operacional mantém o hardware reservado e a cobrança de computação ativa mesmo com a VM 'apagada' na tela."},
{d:2,t:"revisao-identidade",q:"Uma empresa mantém um Active Directory local com todas as contas de funcionários e quer que essas mesmas credenciais funcionem também para acessar recursos no Azure, sem duplicar cadastros. Qual ferramenta sincroniza as identidades entre o ambiente local e o Microsoft Entra ID?",a:["Microsoft Entra Connect","Azure Key Vault","Azure Arc","Acesso Condicional"],c:[0],e:"O Microsoft Entra Connect sincroniza identidades de um Active Directory local com o Microsoft Entra ID, criando uma identidade híbrida que funciona nos dois ambientes. Key Vault guarda segredos/chaves/certificados, não identidades de usuário; Arc estende gerenciamento de recursos (não identidade) para fora do Azure; Acesso Condicional decide condições de login, não sincroniza contas."},
{d:2,t:"revisao-rede",q:"Uma aplicação dentro de uma rede virtual do Azure precisa acessar uma conta de armazenamento (Storage) sem que esse tráfego passe pela internet pública, mantendo o acesso restrito à própria VNet. Qual recurso resolve isso diretamente, sem exigir uma conexão dedicada com um datacenter local?",a:["Ponto de extremidade de serviço (Service Endpoint)","ExpressRoute","Gateway de VPN","Emparelhamento de rede virtual (peering)"],c:[0],e:"Pontos de extremidade de serviço conectam um serviço PaaS do Azure (como Storage ou SQL Database) diretamente a uma rede virtual, mantendo o tráfego dentro da rede da Microsoft. ExpressRoute e VPN Gateway conectam uma rede local ao Azure — não fazem sentido aqui, já que não há datacenter local envolvido. Peering conecta duas VNets entre si, não uma VNet a um serviço PaaS."},
{d:2,q:"Uma equipe precisa bloquear todo o tráfego de entrada na porta 22 (SSH) para uma sub-rede, liberando apenas o vindo de um único endereço IP confiável. Qual recurso do Azure implementa esse tipo de regra de tráfego?",a:["Grupo de Segurança de Rede (NSG)","Azure Policy","Bloqueio de recursos","Azure Front Door"],c:[0],e:"NSGs funcionam como um firewall básico: definem regras de entrada e saída de tráfego (por porta, protocolo, origem/destino) para sub-redes e recursos dentro de uma rede virtual — exatamente o cenário de liberar uma porta só para um IP específico. Policy define conformidade de recursos, não regras de tráfego de rede; Locks protegem contra exclusão/alteração; Front Door distribui tráfego HTTP(S) globalmente, não filtra por porta/IP."},
{d:1,t:"conceitos-nuvem",q:"Uma equipe de produto consegue provisionar um novo ambiente de testes completo em minutos, sempre que surge uma nova ideia para validar, sem esperar semanas por aprovação de compra de hardware. Qual característica da nuvem esse cenário exemplifica?",a:["Agilidade","Elasticidade","Alta disponibilidade","Governança"],c:[0],e:"Agilidade é a capacidade de implantar e configurar recursos rapidamente conforme os requisitos do negócio mudam — é sobre velocidade de reação a uma nova necessidade, não sobre ajuste automático a variações de carga (elasticidade) nem sobre manter o serviço no ar diante de falhas (alta disponibilidade)."},
{d:1,t:"conceitos-nuvem",q:"Uma aplicação distribui suas instâncias entre múltiplas zonas de disponibilidade de uma região, de forma que, se uma zona tiver um problema, o serviço continua respondendo aos usuários sem interrupção perceptível. Qual característica da nuvem esse desenho busca garantir?",a:["Alta disponibilidade","Agilidade","Modelo de consumo","Escalabilidade"],c:[0],e:"Alta disponibilidade é a capacidade de manter o serviço funcionando sem interrupção perceptível ao usuário mesmo quando algo falha localmente — tipicamente alcançada distribuindo recursos entre zonas ou regiões. Agilidade é sobre velocidade de implantação; modelo de consumo é sobre forma de pagamento; escalabilidade é sobre crescer capacidade, não sobre resistir a falhas."},
{d:3,t:"revisao-monitor",q:"A CPU de uma VM de produção ultrapassou 80% de uso pela terceira vez esta semana, e a equipe quer criar um alerta automático para ser avisada sempre que isso acontecer de novo. Qual serviço do Azure resolve diretamente essa necessidade?",a:["Azure Monitor","Azure Advisor","Azure Service Health","Microsoft Purview"],c:[0],e:"Azure Monitor coleta métricas (como uso de CPU), permite analisar logs e criar alertas disparados por essas métricas — é o serviço voltado a 'o que está acontecendo com meus recursos agora'. Advisor dá recomendações de melhoria, não monitora métricas em tempo real; Service Health informa sobre problemas na plataforma Azure, não nos seus recursos específicos; Purview é sobre governança de dados."},
{d:2,t:"revisao-regioes",q:"Uma empresa quer entender a diferença entre a área geográfica ampla usada para atender a requisitos de residência de dados e as unidades menores dentro dela que hospedam os datacenters do Azure. Como essas duas coisas são chamadas, respectivamente?",a:["Geography e regiões","Região e zonas de disponibilidade","Region pair e regiões","Zona de disponibilidade e geography"],c:[0],e:"Uma geography é uma área geográfica definida (frequentemente alinhada a fronteiras nacionais) que contém uma ou mais regiões do Azure, atendendo a requisitos de residência de dados, soberania e conformidade. As regiões são as unidades menores dentro de cada geography, e cada região pode conter várias zonas de disponibilidade."},
{d:2,t:"revisao-storage",q:"Uma aplicação precisa gravar continuamente novas linhas de log ao final de um arquivo, sem nunca alterar o conteúdo já escrito. Qual tipo de blob do Azure Storage é o mais adequado para esse padrão de gravação?",a:["Block Blob","Page Blob","Append Blob","Queue Blob"],c:[2],e:"Append Blob é otimizado para operações de acréscimo (append) no final do arquivo — o caso clássico de logs que só crescem. Block Blob é o tipo genérico para arquivos comuns (imagens, vídeos, documentos); Page Blob é usado como disco de VM (arquivos VHD); 'Queue Blob' não existe como tipo de blob."},
{d:2,t:"revisao-storage",q:"Uma equipe vai hospedar um banco de dados de produção que exige alto desempenho de leitura e escrita. Qual tipo de disco gerenciado do Azure é o mais indicado?",a:["HDD Standard","SSD Standard","SSD Premium","Nenhum: bancos de dados usam Blob Storage diretamente"],c:[2],e:"SSD Premium é indicado para cargas de produção e bancos de dados, que exigem desempenho consistente e baixa latência. HDD Standard e SSD Standard atendem cargas leves ou de baixo tráfego, com custo menor mas desempenho inferior. Bancos de dados em VM usam discos gerenciados (Managed Disks), não Blob Storage diretamente."}
];

(function () {
  "use strict";

  const DOM_NOMES={1:"Conceitos de nuvem",2:"Arquitetura e serviços do Azure",3:"Gerenciamento e governança"};
  const DOM_PESOS={1:"25–30%",2:"35–40%",3:"30–35%"};
  const ESCALA_MAX = 1000;
  const CORTE_PONTOS = 700;
  const HIST_KEY = "az900:sim-historico";
  const HIST_MAX = 50;
  const SIM_TOTAL_QUESTOES = 50; // mesmo total de questões da prova real
  const PROVA_SEG_POR_QUESTAO = 54; // mesmo ritmo de 45min/50 questões da prova real
  const PROVA_MIN_TOTAL = Math.round((SIM_TOTAL_QUESTOES * PROVA_SEG_POR_QUESTAO) / 60);

  function paraEscala(certas,total){
    return Math.round((certas/total)*ESCALA_MAX);
  }

  // sorteia SIM_TOTAL_QUESTOES do BANCO, mantendo a proporção de peso por
  // domínio, revezando quais questões entram a cada simulado aberto
  function sortearQuestoesSimulado(){
    const doms=[1,2,3];
    let restante=SIM_TOTAL_QUESTOES;
    const alvo={};
    doms.slice(0,-1).forEach(d=>{
      const n=Math.round(BANCO.filter(q=>q.d===d).length/BANCO.length*SIM_TOTAL_QUESTOES);
      alvo[d]=n; restante-=n;
    });
    alvo[doms[doms.length-1]]=restante;
    let selecionadas=[];
    doms.forEach(d=>{
      const doDominio=BANCO.filter(q=>q.d===d);
      selecionadas=selecionadas.concat(embaralhar(doDominio).slice(0,alvo[d]));
    });
    return selecionadas;
  }
  let S={};
  let filtroResultado="todas";
  let filtroDominio="todos";
  const app=document.getElementById("simulado-root");
  if(!app) return;

  function lerHistorico(){
    try { return JSON.parse(localStorage.getItem(HIST_KEY)) || []; } catch(e){ return []; }
  }
  function salvarHistoricoSimulado(registro){
    const hist=lerHistorico();
    hist.unshift(registro);
    if(hist.length>HIST_MAX) hist.length=HIST_MAX;
    localStorage.setItem(HIST_KEY, JSON.stringify(hist));
    document.dispatchEvent(new CustomEvent("az900:sim-history-saved"));
  }

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
    const base = dominio ? BANCO.filter(q=>q.d===dominio) : sortearQuestoesSimulado();
    S={
      modo, dominio,
      topico:null, topicoTitulo:null, origemLessonId:null,
      qs:preparar(base),
      i:0,
      respostas:[],
      marcadas:[],
      revelada:false,
      fim:false,
      restante: modo==="prova" ? PROVA_MIN_TOTAL*60 : null,
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

  window.iniciarQuizTopico=function(topico,titulo,origemLessonId){
    const base=BANCO.concat(BANCO_TOPICOS_EXTRA).filter(q=>q.t===topico);
    S={
      modo:"estudo", dominio:null,
      topico, topicoTitulo:titulo, origemLessonId:origemLessonId||null,
      qs:preparar(base),
      i:0,
      respostas:[],
      marcadas:[],
      revelada:false,
      fim:false,
      restante:null,
      timer:null
    };
    S.qs.forEach(()=>{S.respostas.push([]);S.marcadas.push(false);});
    render();
  };

  window.abrirQuizTopico=function(topico,titulo,origemLessonId){
    window.iniciarQuizTopico(topico,titulo,origemLessonId);
    location.hash="simulado";
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
    location.hash = S.origemLessonId || "";
  };

  /* ============================ Telas ============================ */
  window.telaInicialSimulado=function(){
    const porDom = d=>BANCO.filter(q=>q.d===d).length;
    const totalHist=lerHistorico().length;
    app.innerHTML=`
      <div class="sim-top-actions">
        ${voltarLink()}
        <button type="button" class="sim-hist-btn" onclick="telaHistoricoSimulado()">📊 Histórico ${totalHist?`<span class="count">${totalHist}</span>`:""}</button>
      </div>
      <div class="eyebrow">Microsoft Certified · Fundamentals</div>
      <h2 class="sim-h1">Simulado do Exame</h2>
      <p class="sim-lead">Banco de ${BANCO.length} questões inéditas, escritas a partir do roteiro oficial de habilidades da prova. A cada simulado aberto, ${SIM_TOTAL_QUESTOES} questões são sorteadas do banco — como na prova real —, mantendo o mesmo peso por domínio e revezando as questões a cada tentativa. Ao final, você vê se passaria ou não, conforme o corte da certificação.</p>

      <div class="sim-trilha">
        <div class="t1 on"></div><div class="t2 on"></div><div class="t3 on"></div>
      </div>
      <div class="sim-trilha-legenda">
        <span>1 · NUVEM ${DOM_PESOS[1]}</span><span>2 · ARQUITETURA ${DOM_PESOS[2]}</span><span>3 · GOVERNANÇA ${DOM_PESOS[3]}</span>
      </div>

      <button class="sim-modo" onclick="iniciarSimulado('prova',null)">
        <strong>Simulado completo</strong>
        <span>${SIM_TOTAL_QUESTOES} questões sorteadas · ${PROVA_MIN_TOTAL} minutos · resultado só no fim, como na prova real</span>
      </button>
      <button class="sim-modo" onclick="iniciarSimulado('estudo',null)">
        <strong>Modo estudo</strong>
        <span>${SIM_TOTAL_QUESTOES} questões sorteadas · sem cronômetro · resposta e explicação a cada questão</span>
      </button>
      <div class="eyebrow" style="margin:22px 0 10px">Praticar um domínio isolado</div>
      ${[1,2,3].map(d=>`
        <button class="sim-modo" onclick="iniciarSimulado('estudo',${d})">
          <strong>Domínio ${d} — ${DOM_NOMES[d]}</strong>
          <span>${porDom(d)} questões · peso na prova ${DOM_PESOS[d]}</span>
        </button>`).join("")}
      <p class="sim-footnote">A prova oficial do AZ-900 exige ${CORTE_PONTOS} de ${ESCALA_MAX} pontos para aprovação. Este simulado usa o mesmo corte de ${CORTE_PONTOS} pontos como referência de aprovação/reprovação.</p>
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
    const pontuacao=paraEscala(certas,total);
    const ok=pontuacao>=CORTE_PONTOS;

    filtroResultado="todas";
    filtroDominio="todos";

    const domSet=Array.from(new Set(S.qs.map(q=>q.d))).sort();
    const domData=domSet.map(d=>{
      const idx=S.qs.map((q,i)=>q.d===d?i:-1).filter(i=>i>=0);
      const acc=idx.filter(i=>acertou(i)).length;
      return {d, acc, total:idx.length, pct:Math.round(acc/idx.length*100)};
    });

    if(!S.fimSalvo){
      salvarHistoricoSimulado({
        data:Date.now(),
        modo:S.modo,
        dominio:S.dominio,
        topico:S.topico, topicoTitulo:S.topicoTitulo,
        total, certas, pontuacao, aprovado:ok,
        porDominio:domData
      });
      S.fimSalvo=true;
    }

    const porDominio=domData.map(o=>{
      const cor=o.d===1?"var(--d1)":o.d===2?"var(--d2)":"var(--d3)";
      return `<div class="sim-dominio-linha">
        <span class="nome">Domínio ${o.d} — ${DOM_NOMES[o.d]}</span>
        <span class="barra"><i style="width:${o.pct}%;background:${cor}"></i></span>
        <span class="num">${o.acc}/${o.total}</span>
      </div>`;
    }).join("");

    const domFiltroHtml = domSet.length>1 ? `
      <div class="sim-rev-filtros sim-rev-filtros-dom">
        <button type="button" class="sim-filtro-dom-btn active" data-dom="todos" onclick="filtrarRevisaoPorDominio('todos')">Todos os módulos</button>
        ${domSet.map(d=>`<button type="button" class="sim-filtro-dom-btn" data-dom="${d}" onclick="filtrarRevisaoPorDominio('${d}')">Domínio ${d}</button>`).join("")}
      </div>` : "";

    const revisao=S.qs.map((q,i)=>{
      const acertei=acertou(i);
      const minhas=S.respostas[i].length
        ? S.respostas[i].map(k=>String.fromCharCode(65+k)+". "+q.a[k]).join(" | ")
        : "Sem resposta";
      const certas_=q.c.map(k=>String.fromCharCode(65+k)+". "+q.a[k]).join(" | ");
      return `<div class="sim-rev-item" data-acertou="${acertei}" data-dominio="${q.d}">
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
        <div class="eyebrow">${S.topico?`Teste de conhecimento · ${S.topicoTitulo}`:"Resultado"}</div>
        <div class="sim-nota">${pontuacao}<span class="sim-nota-max">/${ESCALA_MAX}</span></div>
        <span class="sim-veredito ${ok?"ok":"nao"}">${ok?`Você passaria: aprovado no corte de ${CORTE_PONTOS} pontos`:`Você não passaria: abaixo do corte de ${CORTE_PONTOS} pontos`}</span>
        <p class="sim-lead" style="margin-top:16px">${certas} de ${total} questões corretas${S.modo==="prova"?` · tempo restante ${fmt(Math.max(S.restante,0))}`:""}</p>
        <p class="sim-footnote">A prova oficial usa uma escala de pontuação de até ${ESCALA_MAX}, com ${CORTE_PONTOS} pontos para aprovação. A Microsoft não divulga a fórmula exata de conversão nem o peso de cada questão — esta pontuação é uma aproximação linear a partir do percentual de acertos, para referência de estudo, não uma pontuação oficial.</p>
      </div>
      <div class="sim-card">
        <h3>Desempenho por domínio</h3>
        ${porDominio}
      </div>
      <div class="sim-acoes" style="margin-bottom:18px">
        ${S.topico
          ? `<button class="sim-btn" onclick="iniciarQuizTopico('${S.topico}',${JSON.stringify(S.topicoTitulo)},${S.origemLessonId?JSON.stringify(S.origemLessonId):"null"})">Refazer este teste</button>`
          : `<button class="sim-btn" onclick="telaInicialSimulado()">Novo simulado</button>`}
        <button class="sim-btn sec" onclick="telaHistoricoSimulado()">Ver histórico</button>
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
        ${domFiltroHtml}
        ${revisao}
        <p class="sim-rev-vazio" id="sim-rev-vazio" hidden>Nenhuma questão nesta categoria.</p>
      </div>
    `;
    app.scrollIntoView({block:"start"});
  }

  function aplicarFiltrosRevisao(){
    var itens=document.querySelectorAll(".sim-rev-item");
    var visiveis=0;
    itens.forEach(function(item){
      var acertouQ=item.dataset.acertou==="true";
      var dom=item.dataset.dominio;
      var passaResultado = filtroResultado==="todas" || (filtroResultado==="acertos" && acertouQ) || (filtroResultado==="erros" && !acertouQ);
      var passaDominio = filtroDominio==="todos" || filtroDominio===dom;
      var mostrar = passaResultado && passaDominio;
      item.style.display = mostrar ? "" : "none";
      if(mostrar) visiveis++;
    });
    document.querySelectorAll(".sim-filtro-btn[data-filtro]").forEach(function(btn){
      btn.classList.toggle("active", btn.dataset.filtro===filtroResultado);
    });
    document.querySelectorAll(".sim-filtro-dom-btn[data-dom]").forEach(function(btn){
      btn.classList.toggle("active", btn.dataset.dom===filtroDominio);
    });
    var vazio=document.getElementById("sim-rev-vazio");
    if(vazio) vazio.hidden = visiveis>0;
  }

  window.filtrarRevisaoSimulado=function(tipo){
    filtroResultado=tipo;
    aplicarFiltrosRevisao();
  };
  window.filtrarRevisaoPorDominio=function(dom){
    filtroDominio=dom;
    aplicarFiltrosRevisao();
  };

  /* ============================ Histórico ============================ */
  window.telaHistoricoSimulado=function(){
    const hist=lerHistorico();

    const modoLabel=(r)=>{
      if(r.topico) return `Teste de tema — ${r.topicoTitulo||r.topico}`;
      if(r.modo==="prova") return "Simulado completo";
      if(r.dominio) return `Prática — Domínio ${r.dominio} (${DOM_NOMES[r.dominio]})`;
      return "Modo estudo";
    };

    const linhas = hist.length===0
      ? `<p class="sim-hist-vazio">Nenhum simulado realizado ainda neste navegador. Faça um simulado para começar a registrar seu histórico.</p>`
      : hist.map(r=>{
          const dataFmt=new Date(r.data).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"});
          const domBreak=(r.porDominio||[]).map(o=>`<span class="sim-hist-dom">D${o.d} ${o.acc}/${o.total}</span>`).join("");
          const pontuacao = r.pontuacao!=null ? r.pontuacao : paraEscala(r.certas,r.total);
          return `<div class="sim-hist-item">
            <div class="sim-hist-cab">
              <span class="sim-hist-data">${dataFmt}</span>
              <span class="sim-veredito ${r.aprovado?"ok":"nao"} sim-hist-veredito">${r.aprovado?"Aprovado":"Reprovado"}</span>
            </div>
            <div class="sim-hist-linha2">
              <span class="sim-hist-modo">${modoLabel(r)}</span>
              <span class="sim-hist-pct">${pontuacao}/${ESCALA_MAX}</span>
              <span class="sim-hist-frac">${r.certas}/${r.total} corretas</span>
            </div>
            ${domBreak?`<div class="sim-hist-doms">${domBreak}</div>`:""}
          </div>`;
        }).join("");

    app.innerHTML=`
      ${voltarLink()}
      <div class="sim-hist-header">
        <div>
          <p class="eyebrow">Simulado do Exame</p>
          <h2 class="sim-h1">Histórico de simulados</h2>
        </div>
        <button type="button" class="sim-btn sec" onclick="telaInicialSimulado()">← Novo simulado</button>
      </div>
      <p class="sim-lead">${hist.length ? `${hist.length} tentativa${hist.length>1?"s":""} registrada${hist.length>1?"s":""} neste navegador, mais recente primeiro.` : "Seus resultados aparecem aqui automaticamente após cada simulado."}</p>
      ${linhas}
      ${hist.length ? `<div class="sim-acoes" style="margin-top:8px"><button type="button" class="sim-btn ghost" onclick="limparHistoricoSimulado()">Limpar histórico</button></div>` : ""}
    `;
    app.scrollIntoView({block:"start"});
  };

  window.limparHistoricoSimulado=function(){
    if(!confirm("Apagar todo o histórico de simulados deste navegador? Essa ação não pode ser desfeita.")) return;
    localStorage.removeItem(HIST_KEY);
    window.telaHistoricoSimulado();
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
