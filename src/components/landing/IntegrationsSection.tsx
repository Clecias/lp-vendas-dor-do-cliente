import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

const integrationLogos = [
  {
    name: 'WhatsApp',
    src: 'https://cdn.simpleicons.org/whatsapp/25D366'
  },
  {
    name: 'Shopify',
    src: 'https://cdn.simpleicons.org/shopify/95BF47'
  },
  {
    name: 'WooCommerce',
    src: 'https://cdn.simpleicons.org/woocommerce/96588A'
  },
  {
    name: 'Mercado Pago',
    src: 'https://cdn.simpleicons.org/mercadopago/00B1EA'
  },
  {
    name: 'PagSeguro',
    src: 'https://cdn.simpleicons.org/pagseguro/00985F'
  },
  {
    name: 'Google Analytics',
    src: 'https://cdn.simpleicons.org/googleanalytics/E37400'
  },
  {
    name: 'Mailchimp',
    src: 'https://cdn.simpleicons.org/mailchimp/FFE01B'
  },
  {
    name: 'Zapier',
    src: 'https://cdn.simpleicons.org/zapier/FF4A00'
  }
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

        <AnimateOnScroll delay={200}>
          <div className="mt-8 space-y-6">
            <div className="integration-marquee">
              <div className="integration-marquee__track">
                {[...integrationLogos, ...integrationLogos].map((logo, index) => (
                  <div className="integration-marquee__item" key={`${logo.name}-row1-${index}`}>
                    <img src={logo.src} alt={logo.name} loading="lazy" />
                    <span>{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="integration-marquee integration-marquee--reverse">
              <div className="integration-marquee__track integration-marquee__track--reverse">
                {[...integrationLogos, ...integrationLogos].map((logo, index) => (
                  <div className="integration-marquee__item" key={`${logo.name}-row2-${index}`}>
                    <img src={logo.src} alt={logo.name} loading="lazy" />
                    <span>{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
