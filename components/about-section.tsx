import { Building2, Users, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-20 border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Sobre a Anova
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              <span className="text-balance">
                Sistema operacional conversacional para redes financeiras
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Anova Financial Technologies é uma empresa brasileira de
              tecnologia financeira que atua como Provedora de Tecnologia (Tech
              Provider) para plataformas de terceiros, incluindo a Meta
              Platform.
            </p>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="rounded-2xl border border-border bg-muted/50 p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                  <Building2 className="h-5 w-5 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold">Anova Financial Technologies Ltda.</h3>
                  <p className="text-sm text-muted-foreground">
                    Controlador de Dados
                  </p>
                </div>
              </div>
              <div className="space-y-2 font-mono text-sm text-card-foreground">
                <p>
                  <strong className="text-foreground">CNPJ:</strong>{" "}
                  56.956.505/0001-89
                </p>
                <p>
                  <strong className="text-foreground">Sede:</strong> Av.
                  Paulista, 1106, Sala 01, Andar 16
                </p>
                <p>Bela Vista, São Paulo — SP, CEP 01.310-914</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted/50 p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                  <Users className="h-5 w-5 text-background" />
                </div>
                <div>
                  <h3 className="font-semibold">
                    Encarregado de Proteção de Dados (DPO)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Responsável pela privacidade
                  </p>
                </div>
              </div>
              <div className="space-y-2 font-mono text-sm text-card-foreground">
                <p>
                  <strong className="text-foreground">Nome:</strong> João Beni
                  Borja
                </p>
                <p>
                  <strong className="text-foreground">E-mail:</strong>{" "}
                  contato@anovainvestimentos.com.br
                </p>
                <p>
                  <strong className="text-foreground">Telefone:</strong> (41)
                  9888-0068
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scope */}
        <div className="mt-24">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Escopo e Aplicação
          </span>
          <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
            Esta Política aplica-se a:
          </h3>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border p-6 transition-colors hover:bg-muted/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                <Globe className="h-6 w-6" />
              </div>
              <h4 className="mb-2 font-semibold">Plataforma Anova</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Sistema operacional conversacional para redes financeiras
                comerciais e todas suas funcionalidades.
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6 transition-colors hover:bg-muted/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <h4 className="mb-2 font-semibold">Integrações de Terceiros</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Incluindo Meta Platform, onde a Anova atua como Provedora de
                Tecnologia (Tech Provider).
              </p>
            </div>

            <div className="rounded-2xl border border-border p-6 transition-colors hover:bg-muted/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                  <polyline points="7.5 19.79 7.5 14.6 3 12" />
                  <polyline points="21 12 16.5 14.6 16.5 19.79" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h4 className="mb-2 font-semibold">APIs e Serviços</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Sites, aplicativos, APIs e demais serviços operados pela Anova
                Financial Technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
