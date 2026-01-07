import { AlertCircle, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onShowVideo: () => void;
}

export function HeroSection({ onShowVideo }: HeroSectionProps) {
  return (
    <section 
      className="py-16 px-6"
      style={{ background: 'linear-gradient(135deg, hsl(249 64% 24%) 0%, hsl(204 62% 42%) 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg text-sm font-medium mb-6 text-white">
            <AlertCircle className="w-4 h-4" />
            Você está perdendo vendas neste exato momento
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Pare de Perder R$ 5.000 a R$ 20.000 Por Mês em Vendas Que Já Estavam na Sua Mão
          </h1>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/95">
            Carrinhos abandonados, pedidos recusados e clientes sem resposta estão custando caro para o seu negócio. Enquanto você lê isso, seu concorrente está recuperando essas vendas automaticamente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button variant="hero" size="xl">
              Quero Recuperar Minhas Vendas Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              onClick={onShowVideo}
              variant="heroBorder"
              size="xl"
            >
              <Play className="w-5 h-5" />
              Ver Como Funciona (2 min)
            </Button>
          </div>

          <p className="text-sm text-white/90">
            ✓ Resultados em até 24 horas • ✓ Usado por mais de 28mil lojas • ✓ Garantia de 30 dias
          </p>
        </div>
      </div>
    </section>
  );
}