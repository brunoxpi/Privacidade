import {
  ShieldCheck,
  Lock,
  KeyRound,
  Activity,
  Bug,
  GraduationCap,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Criptografia de Ponta",
    description: "TLS 1.2+ em trânsito e AES-256 em repouso para máxima proteção dos seus dados.",
    badge: "Enterprise",
  },
  {
    icon: KeyRound,
    title: "Controle de Acesso",
    description: "Autenticação multifator (MFA), princípio do menor privilégio e revisão periódica de acessos.",
    badge: "MFA",
  },
  {
    icon: Activity,
    title: "Monitoramento 24/7",
    description: "Cloudflare, logs de auditoria via OpenSearch e alertas automatizados em tempo real.",
    badge: "Real-time",
  },
  {
    icon: Bug,
    title: "Gestão de Vulnerabilidades",
    description: "SonarQube, testes periódicos e canal dedicado para reporte de vulnerabilidades.",
    badge: "Proativo",
  },
  {
    icon: GraduationCap,
    title: "Segurança Organizacional",
    description: "Políticas internas, treinamento contínuo e acordos de confidencialidade.",
    badge: "Compliance",
  },
  {
    icon: ShieldCheck,
    title: "Práticas Proibidas",
    description: "Nunca usamos dados para discriminação, vigilância, venda ou reidentificação.",
    badge: "Zero-Trust",
  },
];

const serviceProviders = [
  { category: "Autenticação", purpose: "Login e controle de acesso", provider: "Auth0 (Okta)" },
  { category: "Infraestrutura", purpose: "Hospedagem e armazenamento", provider: "DigitalOcean" },
  { category: "Comunicação", purpose: "Mensagens transacionais", provider: "WhatsApp Business API" },
  { category: "Segurança", purpose: "Firewall e auditoria", provider: "Cloudflare, SonarQube" },
  { category: "Observabilidade", purpose: "Monitoramento", provider: "OpenSearch" },
];

export function SecuritySection() {
  return (
    <section
      id="seguranca"
      className="scroll-mt-20 border-b border-border py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Segurança da Informação
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              <span className="text-balance">
                Proteção em múltiplas camadas
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Implementamos controles técnicos e organizacionais rigorosos para
              garantir a segurança dos seus dados em todos os níveis.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-muted/50 p-6">
              <h4 className="mb-2 font-semibold">Canal de Reporte de Vulnerabilidades</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Identificou uma vulnerabilidade de segurança? Entre em contato:
              </p>
              <a
                href="mailto:seguranca@anovainvestimentos.com.br"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                seguranca@anovainvestimentos.com.br
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border p-5 transition-all hover:bg-muted/50"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-foreground">
                    <feature.icon className="h-5 w-5 transition-colors group-hover:text-background" />
                  </div>
                  <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {feature.badge}
                  </span>
                </div>
                <h4 className="mb-1 font-semibold">{feature.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Providers Table */}
        <div className="mt-24">
          <div className="mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Compartilhamento de Dados
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
              Prestadores de Serviços
            </h3>
            <p className="mt-4 text-muted-foreground">
              A Anova <strong className="text-foreground">não vende, licencia ou comercializa</strong> dados pessoais.
              Compartilhamos dados apenas com os seguintes prestadores de serviços essenciais:
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Categoria
                  </th>
                  <th className="px-6 py-4 text-left font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Finalidade
                  </th>
                  <th className="px-6 py-4 text-left font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Provedor
                  </th>
                </tr>
              </thead>
              <tbody>
                {serviceProviders.map((provider, index) => (
                  <tr
                    key={provider.category}
                    className={index !== serviceProviders.length - 1 ? "border-b border-border" : ""}
                  >
                    <td className="px-6 py-4 text-sm font-medium">
                      {provider.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {provider.purpose}
                    </td>
                    <td className="px-6 py-4 font-mono text-sm">
                      {provider.provider}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Retention Table */}
        <div className="mt-16">
          <h3 className="mb-6 text-2xl font-bold tracking-tight">
            Retenção e Exclusão de Dados
          </h3>
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Tipo de Dado
                  </th>
                  <th className="px-6 py-4 text-left font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Retenção
                  </th>
                  <th className="px-6 py-4 text-left font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Fundamento
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-6 py-4 text-sm font-medium">Dados cadastrais</td>
                  <td className="px-6 py-4 font-mono text-sm">Contrato + 5 anos</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Prescrição civil</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4 text-sm font-medium">Registros de acesso</td>
                  <td className="px-6 py-4 font-mono text-sm">6 meses</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Marco Civil da Internet</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4 text-sm font-medium">Platform Data</td>
                  <td className="px-6 py-4 font-mono text-sm">Necessidade do serviço</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Meta Platform Terms</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4 text-sm font-medium">Dados fiscais</td>
                  <td className="px-6 py-4 font-mono text-sm">5 anos</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Código Tributário Nacional</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">Comunicação comercial</td>
                  <td className="px-6 py-4 font-mono text-sm">Contrato + 1 ano</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">Legítimo interesse</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
