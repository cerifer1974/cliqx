import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  "Encontramos negócios com potencial.",
  "Estudamos sua identidade e presença atual.",
  "Criamos uma visão digital para o negócio.",
  "Apresentamos o conceito.",
  "Você decide se quer transformá-lo em realidade.",
];

export function ConceptSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stickyLayout = window.matchMedia("(min-width: 1024px) and (min-height: 800px)");
    if (reducedMotion.matches) {
      setVisibleCount(steps.length);
      return;
    }

    setAnimated(true);
    let frame = 0;

    function syncScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!section) return;
        if (stickyLayout.matches) {
          const distance = section.offsetHeight - window.innerHeight;
          const progress = distance > 0 ? Math.max(0, Math.min(1, -section.getBoundingClientRect().top / distance)) : 0;
          setVisibleCount(Math.min(steps.length, 1 + Math.floor(progress * steps.length)));
          return;
        }

        const revealLine = window.innerHeight * 0.82;
        const items = Array.from(section.querySelectorAll<HTMLElement>("[data-step-index]"));
        const revealed = items.filter((item) => item.getBoundingClientRect().top <= revealLine).length;
        setVisibleCount(Math.max(1, revealed));
      });
    }

    function configure() {
      window.removeEventListener("scroll", syncScroll);
      syncScroll();
      window.addEventListener("scroll", syncScroll, { passive: true });
    }

    configure();
    stickyLayout.addEventListener("change", configure);
    window.addEventListener("resize", syncScroll);
    return () => {
      stickyLayout.removeEventListener("change", configure);
      window.removeEventListener("scroll", syncScroll);
      window.removeEventListener("resize", syncScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} id="conceito" className="concept-section relative z-10 border-y border-border bg-secondary/50">
      <div className="concept-inner mx-auto grid max-w-7xl gap-16 px-5 py-32 md:px-10 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <p className="eyebrow">Projeto Conceito Cliqx</p>
          <h2 className="mt-6 max-w-[14ch] font-display text-4xl font-medium leading-tight md:text-6xl">E se você pudesse enxergar o potencial do seu negócio antes de decidir?</h2>
          <p className="mt-7 max-w-lg leading-7 text-muted-foreground">Seletivo por natureza: alguns negócios recebem, de cada vez, uma visão inicial de como a sua presença digital poderia ser transformada.</p>
          <Button asChild size="lg" className="mt-9 h-12 rounded-full px-6"><a href="#contato">Candidatar meu negócio <ArrowRight /></a></Button>
          <p className="mt-5 max-w-lg text-xs leading-5 text-muted-foreground">Projetos-conceito são selecionados pela Cliqx conforme disponibilidade e potencial de cada negócio.</p>
        </div>
        <div className="space-y-3 lg:col-span-5 lg:col-start-8">
          {steps.map((step, index) => (
            <div className="concept-step" key={step} data-step-index={index} data-visible={!animated || index < visibleCount}>
              <span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}