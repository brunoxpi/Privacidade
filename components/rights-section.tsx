import {
  Eye,
  Pencil,
  Trash2,
  Share2,
  Download,
  Info,
  RotateCcw,
  Ban,
  Bot,
} from "lucide-react";
import Link from "next/link";

const rights = [
  {
    icon: Eye,
    title: "Confirmação e Acesso",
    description: "Direito de confirmar a existência e acessar seus dados pessoais mantidos pela Anova.",
  },
  {
    icon: Pencil,
    title: "Correção",
    description: "Direito de corrigir dados pessoais incompletos, inexatos ou desatualizados.",
  },
  {
    icon: Trash2,
    title: "Anonimização e Eliminação",
    description: "Direito de anonimizar, bloquear ou eliminar dados desnecessários ou excessivos.",
  },
  {
    icon: Download,
    title: "Portabilidade",
    description: "Direito de transferir seus dados para outro fornecedor de serviço ou produto.",
  },
  {
    icon: Share2,
    title: "Informação",
    description: "Direito de saber com quais entidades seus dados foram compartilhados.",
  },
  {
    icon: Info,
    title: "Consentimento",
    description: "Direito de ser informado sobre a possibilidade de não fornecer consentimento.",
  },
  {
    icon: RotateCcw,
    title: "Revogação",
    description: "Direito de revogar o consentimento a qualquer momento de forma gratuita.",
  },
  {
    icon: Ban,
    title: "Oposição",
    description: "Direito de se opor ao tratamento em caso de descumprimento da LGPD.",
  },
  {
    icon: Bot,
    title: "Revisão Automatizada",
    description: "Direito de solicitar revisão de decisões tomadas unicamente com base em tratamento automatizado.",
  },
];

export function RightsSection() {
  return (
    <section
      id="direitos"
      className="scroll-mt-20 border-b border-border bg-muted/30 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            LGPD Art. 18
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-balance">Seus Direitos como Titular</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Em conformidade com a Lei Geral de Proteção de Dados, você possui os
            seguintes direitos que podem ser exercidos a qualquer momento.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rights.map((right) => (
            <div
              key={right.title}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-foreground">
                <right.icon className="h-6 w-6 transition-colors group-hover:text-background" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold">{right.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {right.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* How to Exercise */}
        <div className="mx-auto mt-20 max-w-3xl">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <h3 className="mb-6 text-center text-2xl font-bold">
              Como Exercer Seus Direitos
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-foreground font-mono text-sm text-background">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Portal de Privacidade</h4>
                  <p className="text-sm text-muted-foreground">
                    Acesse{" "}
                    <Link
                      href="https://privacidade.anovainvestimentos.com.br"
                      className="underline underline-offset-4 transition-colors hover:text-foreground"
                    >
                      privacidade.anovainvestimentos.com.br
                    </Link>{" "}
                    para submeter sua solicitação de forma rápida e segura.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-foreground font-mono text-sm text-background">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">E-mail</h4>
                  <p className="text-sm text-muted-foreground">
                    Envie um e-mail para{" "}
                    <Link
                      href="mailto:contato@anovainvestimentos.com.br"
                      className="underline underline-offset-4 transition-colors hover:text-foreground"
                    >
                      contato@anovainvestimentos.com.br
                    </Link>{" "}
                    descrevendo sua solicitação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-foreground font-mono text-sm text-background">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Prazo de Resposta</h4>
                  <p className="text-sm text-muted-foreground">
                    Sua solicitação será respondida em até{" "}
                    <strong className="text-foreground">15 dias úteis</strong>,
                    conforme estabelecido pela LGPD.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-center">
              <Link
                href="https://privacidade.anovainvestimentos.com.br"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto"
              >
                Acessar Portal
              </Link>
              <Link
                href="mailto:contato@anovainvestimentos.com.br"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted sm:w-auto"
              >
                Enviar E-mail
              </Link>
            </div>
          </div>
        </div>

        {/* ANPD Notice */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-sm text-muted-foreground">
            Caso não esteja satisfeito com a resposta, poderá apresentar
            reclamação à{" "}
            <strong className="text-foreground">
              Autoridade Nacional de Proteção de Dados (ANPD)
            </strong>{" "}
            em{" "}
            <Link
              href="https://www.gov.br/anpd"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              gov.br/anpd
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
