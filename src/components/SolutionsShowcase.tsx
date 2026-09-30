import { useEffect, useRef, useState, type TouchEvent, type KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Bot, Compass, Monitor, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const solutions = [
  {
    number: "01",
    title: "Sites premium",
    description: "A primeira impressão à altura do que o seu negócio realmente é. Criamos sites autorais que unem presença, clareza e desempenho em cada detalhe.",
    tags: ["Design autoral", "Experiência mobile", "Performance"],
    icon: Monitor,
    motif: "website",
  },
  {
    number: "02",
    title: "Identidade & estratégia",
    description: "Uma linguagem visual que traduz a essência do seu negócio e torna cada ponto de contato imediatamente reconhecível.",
    tags: ["Posicionamento", "Identidade visual", "Direção criativa"],
    icon: Sparkles,
    motif: "identity",
  },
  {
    number: "03",
    title: "Presença local",
    description: "Para que ser encontrado seja tão fácil quanto perceber a qualidade do que você oferece. Visibilidade com consistência.",
    tags: ["Google Empresas", "SEO local", "Reputação"],
    icon: Compass,
    motif: "local",
  },
  {
    number: "04",
    title: "Automação & IA",
    description: "Conexões mais inteligentes entre o seu negócio e as pessoas. Automatizamos o repetitivo sem perder o cuidado humano.",
    tags: ["Atendimento", "Qualificação", "Respostas"],
    icon: Bot,
    motif: "automation",
  },
] as const;

export function SolutionsShowcase() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const solution = solutions[active] ?? solutions[0];
  const Icon = solution.icon;

  useEffect(() => {
    let frame = 0;
    const syncWithScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        const distance = section.offsetHeight - window.innerHeight;
        if (distance <= 0) return;
        const progress = Math.max(0, Math.min(1, -section.getBoundingClientRect().top / distance));
        section.style.setProperty("--dial-progress", String(progress * (solutions.length - 1)));
        setActive(Math.min(solutions.length - 1, Math.floor(progress * solutions.length)));
      });
    };
    syncWithScroll();
    window.addEventListener("scroll", syncWithScroll, { passive: true });
    window.addEventListener("resize", syncWithScroll);
    return () => {
      window.removeEventListener("scroll", syncWithScroll);
      window.removeEventListener("resize", syncWithScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  function goTo(index: number) {
    const section = sectionRef.current;
    if (!section) return;
    const next = (index + solutions.length) % solutions.length;
    setActive(next);
    const distance = section.offsetHeight - window.innerHeight;
    const top = window.scrollY + section.getBoundingClientRect().top;
    window.scrollTo({
      top: top + Math.max(0, distance) * (next + 0.12) / solutions.length,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  function move(direction: number) {
    goTo(active + direction);
  }

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      move(1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      move(-1);
    }
  }

  function onTouchEnd(event: TouchEvent<HTMLElement>) {
    if (!touchStart) return;
    const touch = event.changedTouches[0];
    if (!touch) return;
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      move(deltaX < 0 ? 1 : -1);
    }
    setTouchStart(null);
  }

  return (
    <section
      ref={sectionRef}
      id="solucoes"
      className="solutions-section relative z-10 overflow-clip border-y border-border"
      aria-label="Soluções Cliqx"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={(event) => {
        const touch = event.touches[0];
        if (touch) setTouchStart({ x: touch.clientX, y: touch.clientY });
      }}
      onTouchEnd={onTouchEnd}
      onTouchCancel={() => setTouchStart(null)}
    >
      <div className="solutions-inner relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="solutions-heading">
          <p className="eyebrow">04 — Soluções Cliqx</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">O site é o ponto de partida. Cada solução amplia o que sua marca pode ser no digital.</p>
        </div>

        <div className="solutions-dial" aria-label="Escolha uma solução">
          <div className="solutions-dial-ring" aria-hidden="true" />
          <div className="solutions-dial-items">{solutions.map((item, index) => (
            <Button
              key={item.number}
              type="button"
              variant="ghost"
              className={`solutions-dial-item solutions-dial-item-${index + 1} ${index === active ? "is-active" : ""}`}
              onClick={() => goTo(index)}
              aria-label={`${item.number} — ${item.title}`}
              aria-current={index === active ? "step" : undefined}
              title={item.title}
            >
              <span className="solutions-dial-dot" aria-hidden="true" />
              <span>{item.number}</span>
            </Button>
          ))}</div>
          <span className="solutions-dial-index" aria-hidden="true">0{active + 1}<span>/04</span></span>
        </div>

        <div className="solutions-content" aria-live="polite" aria-atomic="true">
          <div key={solution.number} className="solutions-copy">
            <div className="solutions-kicker">
              <span className="text-primary">{solution.number} / 04</span>
              {active === 0 && <span className="solutions-flag">Carro-chefe Cliqx</span>}
            </div>
            <h2 className="solutions-title font-display">{solution.title}</h2>
            <p className="solutions-description">{solution.description}</p>
            <div className="solutions-tags" aria-label="Áreas de atuação">
              {solution.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a href="#conceito" className="solutions-cta">Vamos criar o seu projeto <ArrowUpRight className="size-4" /></a>
          </div>
          <div key={`visual-${solution.number}`} className={`solutions-visual solutions-visual-${solution.motif}`} aria-hidden="true">
            <div className="solutions-visual-halo" />
            <div className="solutions-visual-object">
              <span className="solutions-visual-sheen" />
              <Icon className="solutions-visual-icon" strokeWidth={1} />
              <span className="solutions-visual-mark">CLIQX <span>— {solution.number}</span></span>
            </div>
            <span className="solutions-visual-caption">FORMA × FUNÇÃO</span>
          </div>
        </div>

        <div className="solutions-controls" aria-label="Navegação das soluções">
          <span className="solutions-progress"><strong>{solution.number}</strong><span> / 04</span></span>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline" size="icon" className="solutions-arrow" onClick={() => move(-1)} aria-label="Solução anterior"><ArrowLeft /></Button>
            <Button type="button" variant="outline" size="icon" className="solutions-arrow" onClick={() => move(1)} aria-label="Próxima solução"><ArrowRight /></Button>
          </div>
        </div>
      </div>
    </section>
  );
}