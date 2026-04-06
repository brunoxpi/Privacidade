import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Entre em Contato
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              <span className="text-balance">Fale Conosco</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Dúvidas sobre privacidade, solicitações de direitos ou qualquer
              outra questão relacionada ao tratamento de seus dados pessoais?
              Estamos à disposição.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-muted">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">E-mail</h3>
                  <Link
                    href="mailto:contato@anovainvestimentos.com.br"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    contato@anovainvestimentos.com.br
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-muted">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <Link
                    href="tel:+554198880068"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    (41) 9888-0068
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-muted">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="text-muted-foreground">
                    Av. Paulista, 1106, Sala 01, Andar 16
                    <br />
                    Bela Vista, São Paulo — SP
                    <br />
                    CEP 01.310-914
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
              <div className="mb-8 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground">
                  <span className="text-xs font-bold tracking-widest text-background">
                    ANOVA
                  </span>
                </div>
              </div>

              <h3 className="mb-2 text-center text-xl font-bold">
                Anova Financial Technologies Ltda.
              </h3>
              <p className="mb-6 text-center font-mono text-sm text-muted-foreground">
                CNPJ 56.956.505/0001-89
              </p>

              <div className="mb-8 rounded-xl bg-muted/50 p-4">
                <h4 className="mb-2 text-center text-sm font-semibold">
                  Encarregado de Proteção de Dados (DPO)
                </h4>
                <p className="text-center text-sm text-muted-foreground">
                  João Beni Borja
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="mailto:contato@anovainvestimentos.com.br"
                  className="flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  <Mail className="h-4 w-4" />
                  Enviar E-mail
                </Link>
                <Link
                  href="https://privacidade.anovainvestimentos.com.br"
                  className="flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Portal de Privacidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
