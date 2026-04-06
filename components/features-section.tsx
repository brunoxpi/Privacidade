import {
  Database,
  FileText,
  MessageSquare,
  Monitor,
  Server,
  Key,
} from "lucide-react";

const dataTypes = [
  {
    icon: FileText,
    title: "Dados Cadastrais",
    items: [
      "Nome completo, e-mail, telefone",
      "CPF ou CNPJ",
      "Endereço comercial",
    ],
  },
  {
    icon: Key,
    title: "Dados de Autenticação",
    items: [
      "Credenciais de acesso via Auth0",
      "Senhas nunca são armazenadas em texto claro",
      "Tokens de sessão seguros",
    ],
  },
  {
    icon: MessageSquare,
    title: "Dados de Comunicação",
    items: [
      "Mensagens via plataforma",
      "Integrações WhatsApp Business API",
      "Histórico de interações",
    ],
  },
  {
    icon: Monitor,
    title: "Dados de Uso",
    items: [
      "Páginas acessadas",
      "Funcionalidades utilizadas",
      "Padrões de navegação",
    ],
  },
  {
    icon: Server,
    title: "Dados de Dispositivo",
    items: [
      "Endereço IP",
      "Tipo e versão do navegador",
      "Sistema operacional",
    ],
  },
  {
    icon: Database,
    title: "Platform Data",
    items: [
      "Dados de plataformas de terceiros",
      "Processados sob direção do Cliente",
      "Segregação lógica por cliente",
    ],
  },
];

const legalBases = [
  {
    article: "Art. 7º, V",
    title: "Execução de Contrato",
    description:
      "Criar e gerenciar contas, operar a plataforma, processar Platform Data em nome de Clientes, fornecer suporte técnico.",
  },
  {
    article: "Art. 7º, II",
    title: "Obrigação Legal",
    description:
      "Atender reguladores (BACEN, CVM, SUSEP), cumprir obrigações fiscais e responder a requisições judiciais.",
  },
  {
    article: "Art. 7º, I",
    title: "Consentimento",
    description:
      "Enviar comunicações de marketing, ativar integrações com terceiros, processar dados sensíveis quando aplicável.",
  },
  {
    article: "Art. 7º, IX",
    title: "Interesse Legítimo",
    description:
      "Melhorar segurança e desempenho, realizar análises anonimizadas, prevenir fraudes.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="recursos"
      className="scroll-mt-20 border-b border-border bg-muted/30 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Dados Coletados
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-balance">
              Transparência em cada dado que coletamos
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Entenda exatamente quais informações coletamos e como as utilizamos
            para fornecer nossos serviços.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dataTypes.map((type) => (
            <div
              key={type.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-foreground">
                <type.icon className="h-6 w-6 transition-colors group-hover:text-background" />
              </div>
              <h3 className="mb-3 text-lg font-semibold">{type.title}</h3>
              <ul className="space-y-2">
                {type.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Bases */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Bases Legais
            </span>
            <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Finalidades e fundamentos jurídicos
            </h3>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {legalBases.map((base) => (
              <div
                key={base.article}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-foreground px-3 py-1 font-mono text-xs text-background">
                    {base.article}
                  </span>
                  <h4 className="font-semibold">{base.title}</h4>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {base.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-16 rounded-2xl border-l-4 border-l-foreground bg-card p-6">
          <h4 className="mb-2 font-semibold">
            Tratamento como Tech Provider
          </h4>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Platform Data são processados{" "}
            <strong className="text-foreground">exclusivamente</strong> em nome
            e sob a direção do Cliente. A Anova{" "}
            <strong className="text-foreground">não utiliza</strong> Platform
            Data para propósitos próprios, de outro Cliente ou de qualquer
            terceiro. Dados de cada Cliente são logicamente segregados com
            controles técnicos e organizacionais.
          </p>
        </div>
      </div>
    </section>
  );
}
