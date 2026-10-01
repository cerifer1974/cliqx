import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SolutionsShowcase } from "@/components/SolutionsShowcase";
import { ConceptSection } from "@/components/ConceptSection";
import logoAsset from "@/assets/cliqx-logo.jpeg.asset.json";
import markAsset from "@/assets/cliqx-mark.jpeg.asset.json";
import casaSpaAsset from "@/assets/casaspa-showcase.png.asset.json";
import terraceAsset from "@/assets/terrace-showcase.png.asset.json";
import persianasAsset from "@/assets/persianas-showcase.png.asset.json";
import heroVideoAsset from "@/assets/cliqx-hero.webm.asset.json";
import heroPosterAsset from "@/assets/cliqx-hero-poster.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cliqx — Transformação da Presença Digital" },
      {
        name: "description",
        content:
          "A Cliqx projeta experiências digitais que fazem grandes negócios serem percebidos como grandes negócios.",
      },
      { property: "og:title", content: "Cliqx — Transformação da Presença Digital" },
      {
        property: "og:description",
        content: "Seu negócio é bom. Ele parece tão bom assim na internet?",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    name: "Casa Spa",
    place: "Campos do Jordão · SP",
    type: "Hospitalidade",
    description: "Arquitetura, fogo e silêncio transformados em uma experiência digital de luxo.",
    href: "https://casaspa-camposdojordao.lovable.app/",
    image: casaSpaAsset.url,
  },
  {
    name: "Terrace Chalés",
    place: "Monte Verde · MG",
    type: "Natureza",
    description: "A essência da montanha traduzida em uma presença autoral, imersiva e acolhedora.",
    href: "https://terrace-chales.netlify.app/",
    image: terraceAsset.url,
  },
  {
    name: "Persianas Piracicaba",
    place: "Piracicaba · SP",
    type: "Interiores",
    description: "Quiet luxury aplicado a uma marca local por meio de luz, matéria e precisão.",
    href: "https://persianaspiracicaba.netlify.app/",
    image: persianasAsset.url,
  },
];

const process = [
  ["01", "Descobrimos", "Seu negócio, público, personalidade e objetivos."],
  ["02", "Imaginamos", "Estratégia, narrativa, direção visual e experiência."],
  ["03", "Criamos", "Design, conteúdo, desenvolvimento e experiência mobile."],
  ["04", "Colocamos no mundo", "Performance, SEO, publicação e acompanhamento."],
];

function Index() {
  return (
    <main className="site-shell relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="ambient ambient-cyan" />
      <div className="ambient ambient-violet" />
      <div className="scanline scanline-one" />
      <div className="scanline scanline-two" />

      <header className="relative z-40 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 md:px-10 lg:px-14">
        <a href="#top" aria-label="Cliqx — início" className="flex items-center gap-3">
          <img src={markAsset.url} alt="" className="size-10 rounded-md object-cover" />
          <span className="font-display text-base font-semibold">Cliqx</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Navegação principal">
          <a className="nav-link" href="#projetos">Projetos</a>
          <a className="nav-link" href="#solucoes">Soluções</a>
          <a className="nav-link" href="#metodo">Método</a>
          <a className="nav-link" href="#sobre">Sobre</a>
        </nav>
        <Button asChild size="lg" className="rounded-full">
          <a href="#conceito">Iniciar projeto <ArrowUpRight /></a>
        </Button>
      </header>

      <section id="top" className="hero-section relative z-10 flex items-center overflow-hidden border-b border-border">
        <img src={heroPosterAsset.url} alt="" className="hero-video absolute inset-0 size-full object-cover" aria-hidden="true" />
        <video
          className="hero-video absolute inset-0 size-full object-cover"
          src={heroVideoAsset.url}
          poster={heroPosterAsset.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="hero-shade absolute inset-0" aria-hidden="true" />
        <div className="hero-previews pointer-events-none absolute inset-y-0 right-0 z-20 hidden items-center pr-12 lg:flex">
          <div className="project-fan pointer-events-auto">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                data-text={project.name}
                style={{ "--r": [-7, 0, 7][index] } as CSSProperties}
                className="project-fan-card"
              >
                <img src={project.image} alt={`Prévia do projeto ${project.name}`} />
              </a>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-12 lg:px-8">
          <div className="max-w-[680px]">
            <h1 className="max-w-[17ch] font-display text-[clamp(2.35rem,4.2vw,4.25rem)] font-medium leading-[1.08]">
              Seu negócio é bom.
              <span className="mt-1 block text-accent">Ele parece tão bom assim na internet?</span>
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-6 text-foreground/80 md:mt-7 md:text-base md:leading-7">
              Projetamos experiências digitais que fazem grandes negócios serem percebidos como grandes negócios.
            </p>
            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center md:mt-8">
              <Button asChild size="lg" className="h-11 rounded-full px-5 sm:h-12 sm:px-6">
                <a href="#conceito">Ver o potencial do meu negócio <ArrowRight /></a>
              </Button>
              <a href="#projetos" className="nav-link inline-flex items-center gap-2 text-sm text-foreground/85">Conhecer nossos projetos <ArrowDownRight className="size-4 text-primary" /></a>
            </div>
            <p className="mt-7 text-[10px] uppercase leading-5 tracking-[0.16em] text-foreground/65 md:mt-9 md:text-xs">Sites <span>•</span> Identidade <span>•</span> Google <span>•</span> Automação &amp; IA</p>
          </div>
        </div>
      </section>

      <section className="section-band relative z-10 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 py-28 md:px-10 lg:px-8">
          <p className="eyebrow">01 — O choque de percepção</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-tight md:text-6xl">Antes de conhecer sua empresa, seu cliente conhece sua presença digital.</h2>
          <div className="perception-card mt-16">
            <div className="perception-card-inner grid gap-px overflow-hidden rounded-lg bg-border md:grid-cols-[1fr_auto_1fr]">
              <div className="bg-background p-7 md:p-10">
                <span className="text-xs uppercase tracking-[0.22em] text-primary">O negócio</span>
                <div className="mt-7 flex gap-1 text-primary" aria-label="Cinco estrelas">★★★★★</div>
                <ul className="mt-7 space-y-4 text-lg">
                  {["Experiência incrível", "Produto excelente", "Atendimento impecável", "Estrutura premium"].map((item) => <li key={item} className="flex items-center gap-3"><Check className="size-4 text-primary" />{item}</li>)}
                </ul>
              </div>
              <div className="flex min-h-32 items-center justify-center bg-secondary px-7 py-10 text-center md:w-64">
                <p className="font-display text-xl leading-snug">Existe uma diferença entre <span className="text-primary">ser bom</span> e <span className="text-accent">parecer bom.</span></p>
              </div>
              <div className="bg-background p-7 md:p-10">
                <span className="text-xs uppercase tracking-[0.22em] text-accent">A percepção digital</span>
                <ul className="mt-7 space-y-4 text-lg text-muted-foreground">
                  {["Site antigo", "Google abandonado", "Informações difíceis", "Design genérico", "Contato complicado"].map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="relative z-10 mx-auto max-w-7xl px-5 py-32 md:px-10 lg:px-8">
        <p className="eyebrow">02 — Nosso ponto de partida</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <h2 className="font-display text-5xl font-medium leading-none md:text-7xl lg:col-span-7">Não começamos <span className="text-muted-foreground">pelo site.</span></h2>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-6">
            <p className="font-display text-3xl text-primary">Começamos pelo seu negócio.</p>
            <p className="mt-5 leading-7 text-muted-foreground">Não adaptamos a sua marca a um template. Projetamos a partir da personalidade, do público e do valor que ela já possui.</p>
          </div>
        </div>
      </section>

      <section id="projetos" className="relative z-10 border-y border-border bg-secondary/40 py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-8">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="eyebrow">03 — Exposição</p><h2 className="mt-4 max-w-xl font-display text-4xl font-medium md:text-6xl">Projetos que falam por si.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Três identidades, três linguagens. A prova de que a Cliqx não impõe um estilo — revela o de cada negócio.</p>
          </div>
          <div className="space-y-24">
            {projects.map((project, index) => (
              <article key={project.name} className={`project-row grid items-center gap-8 lg:grid-cols-12 ${index % 2 ? "project-reverse" : ""}`}>
                <a href={project.href} target="_blank" rel="noreferrer" className={`project-image group lg:col-span-8 ${index % 2 ? "lg:col-start-5" : ""}`}>
                  <img src={project.image} alt={`Página inicial de ${project.name}`} className="aspect-[16/9] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]" />
                  <span className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full bg-background/80 text-primary backdrop-blur-md"><ArrowUpRight className="size-5" /></span>
                </a>
                <div className={`lg:col-span-4 ${index % 2 ? "lg:row-start-1" : ""}`}>
                  <span className="text-xs uppercase tracking-[0.22em] text-primary">{project.type} · Projeto comercial</span>
                  <h3 className="mt-5 font-display text-3xl font-medium md:text-4xl">{project.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.place}</p>
                  <p className="mt-6 max-w-sm leading-7 text-muted-foreground">{project.description}</p>
                  <a href={project.href} target="_blank" rel="noreferrer" className="nav-link mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em]">Ver projeto <ArrowUpRight className="size-4" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SolutionsShowcase />

      <ConceptSection />

      <section id="metodo" className="relative z-10 mx-auto max-w-7xl px-5 py-32 md:px-10 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">05 — Método</p><h2 className="mt-5 font-display text-4xl font-medium md:text-6xl">Você fala conosco.<br /><span className="text-primary">Nós fazemos o resto.</span></h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Tecnologia nos bastidores. Experiência na frente.</p></div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {process.map(([number, title, text]) => <div key={number} className="process-cell bg-background p-7"><span className="font-display text-sm text-accent">{number}</span><h3 className="mt-16 font-display text-xl">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}
        </div>
        <div className="mt-16 grid items-center gap-8 border-t border-border pt-10 md:grid-cols-2">
          <p className="font-display text-2xl">Inteligência artificial acelera o processo.<br /><span className="text-muted-foreground">Nunca apaga a personalidade.</span></p>
          <p className="text-sm leading-7 text-muted-foreground">Ferramentas modernas aceleram pesquisa, criação, desenvolvimento e automação — sem diluir o que torna o seu negócio único.</p>
        </div>
      </section>

      <footer id="contato" className="relative z-10 border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-32 md:px-10 lg:px-8">
          <p className="eyebrow text-accent">Vamos mudar isso</p>
          <h2 className="mt-6 max-w-[15ch] font-display text-5xl font-medium leading-none md:text-7xl">Talvez seu negócio já seja incrível. <span className="text-primary">Só falta parecer.</span></h2>
          <Button asChild size="lg" className="mt-10 h-12 rounded-full px-6"><a href="#conceito">Conte seu projeto <ArrowRight /></a></Button>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-7 border-t border-border px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10 lg:px-8">
          <img src={logoAsset.url} alt="Cliqx" className="h-12 w-28 object-contain object-left" />
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Presença digital que valoriza negócios.</p>
          <div className="flex gap-6 text-sm text-muted-foreground"><a className="nav-link" href="#conceito">Projeto Conceito</a><a className="nav-link" href="#top">Voltar ao topo ↑</a></div>
        </div>
      </footer>
    </main>
  );
}