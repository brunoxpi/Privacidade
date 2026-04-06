import type { Metadata, Viewport } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Política de Privacidade — ANOVA",
  description:
    "Política de Privacidade da Anova Financial Technologies. Transparência no tratamento de dados pessoais, em conformidade com a LGPD e Meta Platform Terms.",
  authors: [{ name: "Anova Financial Technologies Ltda." }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Política de Privacidade — ANOVA",
    description:
      "Transparência e confiança no tratamento de seus dados pessoais. Em conformidade com a LGPD.",
    url: "https://privacidade.anovainvestimentos.com.br",
    siteName: "Anova Investimentos",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidade — ANOVA",
    description:
      "Transparência e confiança no tratamento de seus dados pessoais.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmMono.variable} font-sans`}>{children}</body>
    </html>
  );
}
