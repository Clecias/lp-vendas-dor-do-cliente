import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

export function CTASection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
            Cada Dia Que Passa, Você Perde Mais Dinheiro
          </h2>
          <p className="text-base mb-8 text-muted-foreground">
            Enquanto você decide, seus concorrentes estão recuperando vendas no automático. A pergunta não é "se" você vai automatizar, mas "quando". Quanto mais esperar, mais dinheiro fica na mesa.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <Button
            variant="hero"
            size="xl"
            className="
              mb-4
              w-full sm:w-auto
              px-5 py-3 sm:px-8 sm:py-4
              text-sm sm:text-base
              whitespace-normal
            "
          >
            Quero Parar de Perder Vendas Agora
            <ArrowRight className="w-7 h-7" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Mais de 28 mil lojas já estão recuperando vendas. Seja a próxima.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
