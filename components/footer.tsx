import Link from "next/link";

const footerLinks = {
  navegacao: [
    { label: "Sobre", href: "#sobre" },
    { label: "Recursos", href: "#recursos" },
    { label: "Segurança", href: "#seguranca" },
    { label: "Seus Direitos", href: "#direitos" },
    { label: "Contato", href: "#contato" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "#politica" },
    { label: "Portal de Privacidade", href: "https://privacidade.anovainvestimentos.com.br" },
    { label: "ANPD", href: "https://www.gov.br/anpd" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                <span className="text-[8px] font-bold tracking-widest text-background">
                  ANOVA
                </span>
              </div>
              <span className="text-lg font-semibold tracking-wide">Anova</span>
            </Link>
            <p className="mb-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Sistema operacional conversacional para redes financeiras
              comerciais. Transparência e confiança no tratamento de seus dados
              pessoais.
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Confiança que vira execução
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Navegação
            </h4>
            <ul className="space-y-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-card-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-card-foreground transition-colors hover:text-foreground"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            ANOVA FINANCIAL TECHNOLOGIES LTDA.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            CNPJ 56.956.505/0001-89
          </p>
          <p className="text-xs text-muted-foreground">
            Esta política é efetiva a partir de 06 de abril de 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}
