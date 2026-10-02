import { useEffect, useRef, useState } from "react";

type Step = readonly [string, string, string];

function ProcessCard({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry?.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const [number, title, text] = step;
  return (
    <div
      ref={ref}
      data-side={index % 2 === 0 ? "left" : "right"}
      data-visible={visible}
      style={{ transitionDelay: `${(index % 2) * 120}ms` }}
      className="process-card glass-panel rounded-2xl p-7"
    >
      <span className="font-display text-sm text-accent">{number}</span>
      <h3 className="mt-14 font-display text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

export function ProcessCards({ steps }: { steps: readonly Step[] }) {
  return (
    <div className="mt-16 grid gap-5 overflow-x-clip md:grid-cols-2">
      {steps.map((s, i) => <ProcessCard key={s[0]} step={s} index={i} />)}
    </div>
  );
}
