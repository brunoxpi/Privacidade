"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Shield, Lock, Eye } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;

      const col = (a: number) => `rgba(0,0,0,${a})`;

      // Grid lines
      for (let x = 0; x < w; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.strokeStyle = col(0.03);
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      for (let y = 0; y < h; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.strokeStyle = col(0.03);
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Radial lines
      const fx = w * 0.7;
      const fy = h * 0.5;

      for (let i = 0; i < 24; i++) {
        const a = (i / 24) * Math.PI * 2;
        const rl = Math.max(w, h) * 0.8;
        ctx.beginPath();
        ctx.moveTo(fx, fy);
        ctx.lineTo(fx + Math.cos(a) * rl, fy + Math.sin(a) * rl);
        ctx.strokeStyle = col(0.02);
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Concentric circles
      for (let rl = 60; rl < Math.max(w, h) * 0.8; rl += 80) {
        ctx.beginPath();
        ctx.arc(fx, fy, rl, 0, Math.PI * 2);
        ctx.strokeStyle = col(0.015);
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden border-b border-border">
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              ANOVA — Documento Legal
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-balance">
              Política de
              <br />
              Privacidade
            </span>
          </h1>

          <p className="mb-10 max-w-xl text-lg font-light leading-relaxed text-card-foreground md:text-xl">
            Transparência e confiança no tratamento de seus dados pessoais. Em
            conformidade com a LGPD e os Meta Platform Terms.
          </p>

          <div className="mb-12 flex flex-wrap gap-8 md:gap-12">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Atualização
              </span>
              <span className="font-mono text-sm text-card-foreground">
                06/04/2026
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                LGPD
              </span>
              <span className="font-mono text-sm text-card-foreground">
                Lei nº 13.709/2018
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                DPO
              </span>
              <span className="font-mono text-sm text-card-foreground">
                João Beni Borja
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#politica"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Ler Política Completa
              <ArrowDown className="h-4 w-4" />
            </Link>
            <Link
              href="#recursos"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              Explorar Recursos
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:bg-card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
              <Shield className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Proteção Total</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Seus dados são protegidos com criptografia AES-256 em repouso e
              TLS 1.2+ em trânsito.
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:bg-card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
              <Lock className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">LGPD Compliant</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Total conformidade com a Lei Geral de Proteção de Dados e
              regulamentações internacionais.
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:bg-card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
              <Eye className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Transparência</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Acesso completo às informações sobre como seus dados são coletados
              e processados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
