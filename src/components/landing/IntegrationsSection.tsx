import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';
import { Button } from '@/components/ui/button';
import { Link2, MessageCircle, ShoppingCart, CreditCard, BarChart3, Mail } from 'lucide-react';

const integrations = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Business',
    description: 'Converse com clientes e automatize respostas sem sair do painel.'
  },
  {
    icon: ShoppingCart,
    title: 'Shopify & WooCommerce',
    description: 'Sincronize pedidos, clientes e status de compra em tempo real.'
  },
  {
    icon: CreditCard,
    title: 'Mercado Pago & PagSeguro',
    description: 'Atualize pagamentos e automatize o pós-venda com total segurança.'
  },
  {
    icon: BarChart3,
    title: 'Google Analytics',
    description: 'Acompanhe métricas e identifique onde estão suas oportunidades.'
  },
  {
    icon: Mail,
    title: 'E-mail Marketing',
    description: 'Envie campanhas segmentadas e recupere carrinhos abandonados.'
  },
  {
    icon: Link2,
    title: 'API e Webhooks',
    description: 'Conecte novas ferramentas e expanda o seu ecossistema.'
  }
];

const integrationBadges = [
  'Automação',
  'Mensageria',
  'Pagamentos',
  'Logística',
  'Analytics',
  'CRM'
];

export function IntegrationsSection() {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Integrações</h2>
            <p className="text-xl text-muted-foreground">
              Todas as integrações necessárias para crescer o seu negócio
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration, index) => (
            <AnimateOnScroll key={integration.title} delay={index * 120}>
              <div className="h-full rounded-2xl border border-border bg-background/60 p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <integration.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{integration.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={240}>
          <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl border border-border bg-background/70 p-6 text-center">
            <div className="flex flex-wrap justify-center gap-2">
              {integrationBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">
                Integrações novas chegando toda semana
              </p>
              <p className="text-sm text-muted-foreground">
                Se faltar alguma ferramenta estratégica para a sua operação, nós criamos para você.
              </p>
            </div>
            <Button variant="hero" size="lg">
              Solicitar Integração
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
