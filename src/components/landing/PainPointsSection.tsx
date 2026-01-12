import { X, Clock, DollarSign, MessageSquare, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

const painPoints = [
  {
    icon: X,
    title: "Carrinhos Abandonados Todo Dia",
    desc: "70% dos clientes adicionam produtos e não compram. Você não faz NADA para recuperá-los.",
    loss: "R$ 2.000 - R$ 8.000/mês"
  },
  {
    icon: Clock,
    title: "Horas Respondendo o Mesmo",
    desc: "Status de pedido, código de rastreio, dúvidas repetitivas consumindo seu dia.",
    loss: "40-60h/mês desperdiçadas"
  },
  {
    icon: DollarSign,
    title: "Não Sabe o Lucro Real",
    desc: "Fatura bem mas não sabe se lucrou R$ 5k ou R$ 15k. Decisões no escuro.",
    loss: "Prejuízo por má gestão"
  },
  {
    icon: MessageSquare,
    title: "Pedidos Recusados Sem Follow-up",
    desc: "Cartão negou? Cliente sumiu. 40% pagariam com outro método.",
    loss: "R$ 1.500 - R$ 5.000/mês"
  },
  {
    icon: TrendingUp,
    title: "Investe em Tráfego Mas Não Converte",
    desc: "Gasta milhares em anúncios mas perde 60% das oportunidades.",
    loss: "ROI 50% menor"
  },
  {
    icon: AlertCircle,
    title: "Zero Pós-Venda",
    desc: "Vendeu e esqueceu. Sem remarketing, sem segunda compra.",
    loss: "LTV 70% menor"
  }
];

export function PainPointsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Reconhece Algum Desses Problemas no Seu Negócio?
            </h2>
            <p className="text-base text-muted-foreground">
              Se você respondeu SIM para 2 ou mais, está deixando entre 30% e 40% do seu faturamento na mesa
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((pain, idx) => (
            <AnimateOnScroll key={idx} delay={idx * 100}>
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition h-full">
                <div className="mb-4">
                  <pain.icon className="w-10 h-10 text-destructive" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-3">{pain.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pain.desc}</p>
                <div className="bg-destructive/10 text-destructive px-3 py-2 rounded text-sm font-semibold">
                  💸 Prejuízo: {pain.loss}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={600}>
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-destructive/5 to-warning/5 p-8 rounded-xl border border-destructive/20 max-w-3xl mx-auto">
              <p className="text-lg font-bold text-foreground mb-3">
                Somando tudo, você pode estar perdendo
              </p>
              <p className="text-3xl font-black mb-3 text-primary">
                R$ 5.000 a R$ 20.000
              </p>
              <p className="text-base text-foreground mb-4">
                Por mês. Todos os meses.
              </p>
              <Button variant="cta" size="xl" className="w-full sm:w-auto">
                Não Quero Perder Mais Dinheiro
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
