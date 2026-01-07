import { Zap, Package, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

const features = [
  {
    icon: Zap,
    title: "Recuperação Automática",
    desc: "Carrinhos, pedidos recusados e clientes inativos viram dinheiro sem você mover um dedo."
  },
  {
    icon: Package,
    title: "Rastreio Automático",
    desc: "Seus clientes recebem atualizações automáticas do pedido via WhatsApp, Email e SMS."
  },
  {
    icon: BarChart3,
    title: "Lucro Real Visível",
    desc: "Dashboard que mostra exatamente quanto você está lucrando. Sem surpresas no fim do mês."
  }
];

export function SolutionSection() {
  return (
    <section 
      className="py-16 px-6"
      style={{ background: 'linear-gradient(135deg, hsl(204 62% 42%) 0%, hsl(249 64% 24%) 100%)' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            E Se Você Recuperasse 80% Disso... Automaticamente?
          </h2>
          <p className="text-xl mb-12 text-white/95 max-w-3xl mx-auto">
            O <span className="font-bold">Único Drop</span> é o sistema completo que recupera vendas perdidas, automatiza seu atendimento e mostra seu lucro real, trabalhando 24 horas por dia, 7 dias por semana.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((item, idx) => (
            <AnimateOnScroll key={idx} delay={idx * 150}>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20 h-full">
                <div className="mb-4 flex justify-center">
                  <item.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-white/90">{item.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={450}>
          <Button variant="hero" size="xxl">
            Quero Começar a Recuperar Vendas Hoje
            <ArrowRight className="w-6 h-6" />
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
