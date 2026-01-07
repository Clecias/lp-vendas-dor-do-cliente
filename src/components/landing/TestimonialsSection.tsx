import { Star } from 'lucide-react';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const testimonials = [
  {
    result: "+R$ 12.400",
    period: "recuperados no primeiro mês",
    name: "Rafael Costa",
    business: "Dropshipping de Eletrônicos",
    initials: "RC",
    quote: "Nos primeiros 30 dias recuperei mais do que perdi em 6 meses. Só de carrinhos abandonados foram R$ 8 mil. A ferramenta se pagou no terceiro dia.",
    rating: 5
  },
  {
    result: "67% menos tempo",
    period: "em atendimento manual",
    name: "Camila Mendes",
    business: "E-commerce de Moda",
    initials: "CM",
    quote: "Antes passava 4 horas por dia respondendo clientes. Hoje? 40 minutos. O resto é automático. Finalmente tenho tempo para crescer o negócio.",
    rating: 5
  },
  {
    result: "+180% ROI",
    period: "no tráfego pago",
    name: "Lucas Barros",
    business: "Infoprodutos",
    initials: "LB",
    quote: "Mesmo investimento em anúncios, mas agora converto 3x mais. O sistema não deixa nenhum lead escapar. Foi a melhor decisão que tomei este ano.",
    rating: 5
  }
];

const stats = [
  { value: "28mil+", label: "Lojas" },
  { value: "R$ 2.3M+", label: "Recuperados em 2024" },
  { value: "4.9★", label: "Avaliação Média" }
];

export function TestimonialsSection() {
  const { ref: statsRef, isInView: statsInView } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className="py-16 px-4 sm:px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-xl md:text-2xl font-bold text-center text-foreground mb-4">
            Resultados Reais de Quem Já Está Recuperando Vendas
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-sm">
            Mais de 28 mil lojas usando o Único Drop todos os dias
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <AnimateOnScroll key={idx} delay={idx * 150}>
              <div className="bg-muted p-6 rounded-xl border border-border h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ background: 'linear-gradient(135deg, hsl(204 62% 42%) 0%, hsl(196 91% 52%) 100%)' }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="mb-4">
                  <p className="text-lg font-bold mb-1 text-primary">{testimonial.result}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.period}</p>
                </div>

                <p className="text-foreground/80 italic text-sm">"{testimonial.quote}"</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-12 text-center" ref={statsRef}>
          <AnimateOnScroll delay={450}>
            <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-muted px-8 py-4 rounded-lg border border-border">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className="text-center px-4">
                    <p className="text-xl font-black text-primary">
                      {statsInView ? (
                        <AnimatedCounter value={stat.value} duration={2000} />
                      ) : (
                        '0'
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                  {idx < stats.length - 1 && (
                    <div className="w-px h-12 bg-border hidden sm:block"></div>
                  )}
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
