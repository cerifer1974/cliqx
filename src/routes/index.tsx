import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/cliqx-logo.jpeg.asset.json";
import markAsset from "@/assets/cliqx-mark.jpeg.asset.json";
import casaSpaAsset from "@/assets/casaspa-showcase.png.asset.json";
import terraceAsset from "@/assets/terrace-showcase.png.asset.json";
import persianasAsset from "@/assets/persianas-showcase.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cliqx — Transformação da Presença Digital" },
      {
        name: "description",
        content:
          "A Cliqx cria experiências digitais que fazem grandes negócios serem percebidos como grandes negócios.",
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
    <main className="site-shell relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="ambient ambient-cyan" />
      <div className="ambient ambient-violet" />
      <div className="scanline scanline-one" />
      <div className="scanline scanline-two" />

      <header className="relative z-40 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10 lg:px-14">
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

      <section id="top" className="relative z-10 mx-auto grid min-h-[760px] max-w-7xl grid-cols-12 items-center gap-6 px-5 pb-24 pt-16 md:px-10 lg:px-8 lg:pt-20">
        <div className="col-span-12 lg:col-span-7">
          <p className="eyebrow"><span className="pulse-dot" /> Agência de transformação digital</p>
          <h1 className="mt-7 max-w-[13ch] font-display text-5xl font-medium leading-[0.98] md:text-7xl lg:text-[5.5rem]">
            Seu negócio é bom.
            <span className="mt-2 block text-accent">Ele parece tão bom assim na internet?</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
            Criamos experiências digitais que fazem grandes negócios serem percebidos como grandes negócios.
          </p>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="h-12 rounded-full px-6">
              <a href="#conceito">Quero ver o potencial do meu negócio <ArrowRight /></a>
            </Button>
            <a href="#projetos" className="nav-link inline-flex items-center gap-2 text-sm">Conheça nossos projetos <ArrowDownRight className="size-4 text-primary" /></a>
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.22em] text-muted-foreground">Sites <span>•</span> Identidade <span>•</span> Google <span>•</span> Automação &amp; IA</p>
        </div>

        <div className="col-span-12 mt-12 lg:col-span-5 lg:mt-0 lg:pt-20">
          <div className="hero-console glass-panel relative p-4 md:p-5">
            <div className="absolute -top-4 right-5 rounded-full border border-accent/30 bg-secondary px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-accent">Percepção digital</div>
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex gap-2"><span className="size-2 rounded-full bg-primary" /><span className="size-2 rounded-full bg-accent" /></div>
              <span className="font-mono text-[10px] text-muted-foreground">CLIQX / 001</span>
            </div>
            <div className="mt-4 grid grid-cols-12 gap-2">
              <img src={casaSpaAsset.url} alt="Site Casa Spa" className="col-span-8 aspect-[1.35] w-full rounded-md object-cover object-top" />
              <img src={terraceAsset.url} alt="Site Terrace Chalés" className="col-span-4 h-full w-full rounded-md object-cover object-top" />
              <img src={persianasAsset.url} alt="Site Persianas Piracicaba" className="col-span-12 aspect-[2.4] w-full rounded-md object-cover object-top" />
            </div>
            <p className="mt-5 text-sm text-muted-foreground">O que seu cliente vê antes de saber o quanto você é bom.</p>
          </div>
        </div>
      </section>

      <section className="section-band relative z-10 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 py-28 md:px-10 lg:px-8">
          <p className="eyebrow">01 — O choque de percepção</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-tight md:text-6xl">Antes de conhecer sua empresa, seu cliente conhece sua presença digital.</h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-[1fr_auto_1fr]">
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
      </section>

      <section id="sobre" className="relative z-10 mx-auto max-w-7xl px-5 py-32 md:px-10 lg:px-8">
        <p className="eyebrow">02 — Nosso ponto de partida</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <h2 className="font-display text-5xl font-medium leading-none md:text-7xl lg:col-span-7">Não começamos <span className="text-muted-foreground">pelo site.</span></h2>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-6">
            <p className="font-display text-3xl text-primary">Começamos pelo seu negócio.</p>
            <p className="mt-5 leading-7 text-muted-foreground">Não adaptamos sua marca a um template. Criamos uma experiência digital a partir da personalidade, do público e do valor que ela já possui.</p>
          </div>
        </div>
      </section>

      <section id="projetos" className="relative z-10 border-y border-border bg-secondary/40 py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-8">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="eyebrow">03 — Exposição</p><h2 className="mt-4 max-w-xl font-display text-4xl font-medium md:text-6xl">Projetos que roubam a cena.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Três identidades completamente diferentes. A prova de que a Cliqx não tem um estilo — encontra o estilo de cada negócio.</p>
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
                  <a href={project.href} target="_blank" rel="noreferrer" className="nav-link mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em]">Explorar projeto <ArrowUpRight className="size-4" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="relative z-10 mx-auto max-w-7xl px-5 py-32 md:px-10 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">04 — A visão completa</p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-tight">Um site é só o começo.</h2>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">Seu cliente não enxerga canais separados. Ele enxerga sua empresa.</p>
          </div>
          <div className="ecosystem lg:col-span-7">
            <div className="ecosystem-center"><Sparkles className="size-5 text-primary" /><span>Presença digital</span></div>
            {["Website", "Google", "Identidade", "SEO", "Automação", "IA", "Atendimento", "Reputação"].map((item, index) => <span key={item} className={`orbit-label orbit-${index + 1}`}>{item}</span>)}
          </div>
        </div>
        <div className="mt-24 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {[
            ["“Meu negócio praticamente não aparece no Google.”", "Presença local", "Google Empresas + SEO local + reputação."],
            ["“Perco muito tempo respondendo sempre as mesmas coisas.”", "Automação & IA", "Atendimento + qualificação + respostas."],
            ["“Meu Instagram é bom, mas não encontram nada profissional.”", "Presença digital", "Site + Google + identidade."],
            ["“Minha imagem não transmite a qualidade do negócio.”", "Transformação digital", "Estratégia + identidade + site."],
          ].map(([problem, solution, detail]) => (
            <div key={solution} className="bg-background p-7 md:p-10">
              <p className="font-display text-xl leading-relaxed text-muted-foreground">{problem}</p>
              <div className="mt-8 flex items-start gap-4"><ArrowRight className="mt-1 size-5 text-primary" /><div><h3 className="font-display text-xl text-foreground">{solution}</h3><p className="mt-2 text-sm text-muted-foreground">{detail}</p></div></div>
            </div>
          ))}
        </div>
      </section>

      <section id="conceito" className="relative z-10 border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-32 md:px-10 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <p className="eyebrow">Projeto Conceito Cliqx</p>
            <h2 className="mt-6 max-w-[14ch] font-display text-4xl font-medium leading-tight md:text-6xl">E se você pudesse enxergar o potencial do seu negócio antes de decidir?</h2>
            <p className="mt-7 max-w-lg leading-7 text-muted-foreground">Selecionamos alguns negócios para receber uma visão inicial de como sua presença digital poderia ser transformada.</p>
            <Button asChild size="lg" className="mt-9 h-12 rounded-full px-6"><a href="#contato">Candidatar meu negócio <ArrowRight /></a></Button>
            <p className="mt-5 max-w-lg text-xs leading-5 text-muted-foreground">Projetos-conceito são selecionados pela Cliqx de acordo com disponibilidade e potencial do projeto.</p>
          </div>
          <div className="space-y-3 lg:col-span-5 lg:col-start-8">
            {[
              "Encontramos negócios com potencial.",
              "Estudamos sua identidade e presença atual.",
              "Criamos uma visão digital para o negócio.",
              "Apresentamos o conceito.",
              "Você decide se quer transformá-lo em realidade.",
            ].map((step, index) => (
              <div className="concept-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="relative z-10 mx-auto max-w-7xl px-5 py-32 md:px-10 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">05 — Método</p><h2 className="mt-5 font-display text-4xl font-medium md:text-6xl">Você fala conosco.<br /><span className="text-primary">Nós fazemos o resto.</span></h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Tecnologia nos bastidores. Experiência na frente.</p></div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {process.map(([number, title, text]) => <div key={number} className="process-cell bg-background p-7"><span className="font-display text-sm text-accent">{number}</span><h3 className="mt-16 font-display text-xl">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}
        </div>
        <div className="mt-16 grid items-center gap-8 border-t border-border pt-10 md:grid-cols-2">
          <p className="font-display text-2xl">Inteligência artificial acelera o processo.<br /><span className="text-muted-foreground">Nunca apaga a personalidade.</span></p>
          <p className="text-sm leading-7 text-muted-foreground">Usamos ferramentas modernas para pesquisar, criar, desenvolver e automatizar com mais velocidade — sem transformar seu negócio em algo genérico.</p>
        </div>
      </section>

      <footer id="contato" className="relative z-10 border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-32 md:px-10 lg:px-8">
          <p className="eyebrow text-accent">Vamos mudar isso</p>
          <h2 className="mt-6 max-w-[15ch] font-display text-5xl font-medium leading-none md:text-7xl">Talvez seu negócio já seja incrível. <span className="text-primary">Só falta parecer.</span></h2>
          <Button asChild size="lg" className="mt-10 h-12 rounded-full px-6"><a href="#conceito">Conte seu projeto <ArrowRight /></a></Button>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-7 border-t border-border px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10 lg:px-8">
          <img src={logoAsset.url} alt="Cliqx" className="h-14 w-20 rounded object-cover object-center" />
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Presença digital que valoriza negócios.</p>
          <div className="flex gap-6 text-sm text-muted-foreground"><a className="nav-link" href="#conceito">Projeto Conceito</a><a className="nav-link" href="#top">Voltar ao topo ↑</a></div>
        </div>
      </footer>
    </main>
  );
}