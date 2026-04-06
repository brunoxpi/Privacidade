"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PolicyItem {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

const policyItems: PolicyItem[] = [
  {
    id: "s11",
    number: "11",
    title: "Uso por Menores",
    content: (
      <p className="text-card-foreground">
        A Plataforma Anova <strong className="text-foreground">não é destinada</strong> a menores de 18 anos. A Anova não coleta intencionalmente dados pessoais de menores.
      </p>
    ),
  },
  {
    id: "s12",
    number: "12",
    title: "Cookies",
    content: (
      <div className="space-y-4">
        <ul className="space-y-3 text-card-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
            <span><strong className="text-foreground">Essenciais:</strong> funcionamento, autenticação e segurança</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
            <span><strong className="text-foreground">Desempenho:</strong> monitoramento (dados agregados e anonimizados)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
            <span><strong className="text-foreground">Funcionalidade:</strong> preferências e personalização</span>
          </li>
        </ul>
        <p className="text-card-foreground">
          A Anova <strong className="text-foreground">não utiliza</strong> cookies de publicidade comportamental, pixels de rastreamento ou retargeting.
        </p>
      </div>
    ),
  },
  {
    id: "s13",
    number: "13",
    title: "Compromisso do Usuário",
    content: (
      <p className="text-card-foreground">
        O Usuário compromete-se a utilizar a Plataforma de forma adequada e em conformidade com a legislação, abstendo-se de atividades ilegais, difusão de conteúdo discriminatório, causar danos aos sistemas ou tentar acessar dados sem autorização.
      </p>
    ),
  },
  {
    id: "s14",
    number: "14",
    title: "Conformidade com Terceiros",
    content: (
      <p className="text-card-foreground">
        Quando a Anova atua como Tech Provider, esta Política opera em conjunto com os termos da plataforma de origem. Em caso de conflito, prevalecem os termos mais restritivos para a Anova e mais protetivos para o Usuário.
      </p>
    ),
  },
  {
    id: "s15",
    number: "15",
    title: "Alterações nesta Política",
    content: (
      <p className="text-card-foreground">
        A Anova poderá atualizar esta Política periodicamente. Alterações materiais serão comunicadas por e-mail ou através da Plataforma. O uso contínuo dos serviços constitui aceitação da Política atualizada.
      </p>
    ),
  },
  {
    id: "s16",
    number: "16",
    title: "Legislação e Foro",
    content: (
      <p className="text-card-foreground">
        Esta Política é regida pelas leis do Brasil, com observância da LGPD e do Marco Civil da Internet. Foro: comarca de São Paulo — SP.
      </p>
    ),
  },
  {
    id: "s7",
    number: "07",
    title: "Transferência Internacional",
    content: (
      <p className="text-card-foreground">
        A Anova poderá transferir dados para países com grau adequado de proteção, mediante cláusulas contratuais padrão, para cumprimento de obrigações de plataformas de terceiros, ou mediante consentimento específico do titular.
      </p>
    ),
  },
];

function AccordionItem({ item, isOpen, onToggle }: { item: PolicyItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-foreground"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-muted-foreground">{item.number}</span>
          <span className="font-semibold">{item.title}</span>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all",
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="pl-10 pr-4 text-sm leading-relaxed">
            {item.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PolicySection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="politica" className="scroll-mt-20 border-b border-border py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Disposições Adicionais
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Outras Seções da Política
          </h2>
        </div>

        <div className="rounded-2xl border border-border bg-card">
          {policyItems.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openItems.includes(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
