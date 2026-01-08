import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

const placeholderLogo = '/assets/integrations/placeholder.svg';

const integrations = [
  {
    title: 'Plataformas de Loja (Integrações)',
    items: [
      { id: 'shopify', name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify/95BF47' },
      { id: 'yampi', name: 'Yampi', logo: 'https://cdn.simpleicons.org/yampi/1B1B1B', placeholder: true },
      { id: 'cartpanda', name: 'CartPanda', logo: 'https://cdn.simpleicons.org/cartpanda/1B1B1B', placeholder: true },
      { id: 'woocommerce', name: 'WooCommerce', logo: 'https://cdn.simpleicons.org/woocommerce/96588A' },
      { id: 'lpqv', name: 'LPQV', logo: placeholderLogo, placeholder: true },
      { id: 'nuvem-shop', name: 'Nuvem Shop', logo: 'https://cdn.simpleicons.org/nuvemshop/1B1B1B', placeholder: true },
    ],
  },
  {
    title: 'Checkouts (Tela de Pagamento)',
    items: [
      { id: 'unicopag', name: 'ÚnicoPag', logo: placeholderLogo, placeholder: true },
      { id: 'yampi', name: 'Yampi', logo: 'https://cdn.simpleicons.org/yampi/1B1B1B', placeholder: true },
      { id: 'cartpanda', name: 'CartPanda', logo: 'https://cdn.simpleicons.org/cartpanda/1B1B1B', placeholder: true },
      { id: 'yever', name: 'Yever', logo: placeholderLogo, placeholder: true },
      { id: 'lpqv-checkout', name: 'LPQV (Checkout nativo LPQV)', logo: placeholderLogo, placeholder: true },
      { id: 'nuvemshop-checkout', name: 'NuvemShop (Checkout nativo NuvemShop)', logo: 'https://cdn.simpleicons.org/nuvemshop/1B1B1B', placeholder: true },
    ],
    note: 'Para NuvemShop e LPQV, utilizamos o checkout nativo da própria plataforma.',
  },
  {
    title: 'Gateways (Banco)',
    description:
      'Gateways compatíveis via checkout integrado. Basta preencher as credenciais.',
    items: [
      { id: 'mercadopago', name: 'Mercado Pago', logo: 'https://cdn.simpleicons.org/mercadopago/00B1EA' },
      { id: 'appmax', name: 'App Max', logo: placeholderLogo, placeholder: true },
      { id: 'unicopag-recommended', name: 'ÚnicoPag (Recomendado)', logo: placeholderLogo, placeholder: true },
    ],
  },
  {
    title: 'Infoprodutos e outros',
    items: [
      { id: 'kiwify', name: 'Kiwify', logo: placeholderLogo, placeholder: true },
      { id: 'hotmart', name: 'Hotmart', logo: 'https://cdn.simpleicons.org/hotmart/1B1B1B', placeholder: true },
      { id: 'kirvano', name: 'Kirvano', logo: placeholderLogo, placeholder: true },
      { id: 'braip', name: 'Braip', logo: placeholderLogo, placeholder: true },
      { id: 'ticto', name: 'Ticto', logo: placeholderLogo, placeholder: true },
      { id: 'eduzz', name: 'Eduzz', logo: placeholderLogo, placeholder: true },
      { id: 'monetizze', name: 'Monetizze', logo: placeholderLogo, placeholder: true },
      { id: 'pepper', name: 'Pepper', logo: placeholderLogo, placeholder: true },
      { id: 'lastlink', name: 'Lastlink', logo: placeholderLogo, placeholder: true },
    ],
  },
  {
    title: 'Ads',
    items: [
      { id: 'facebook', name: 'Facebook', logo: 'https://cdn.simpleicons.org/facebook/1877F2' },
      { id: 'google', name: 'Google', logo: 'https://cdn.simpleicons.org/google/4285F4' },
      { id: 'tiktok', name: 'TikTok', logo: 'https://cdn.simpleicons.org/tiktok/000000' },
      { id: 'taboola', name: 'Taboola', logo: 'https://cdn.simpleicons.org/taboola/000000', placeholder: true },
    ],
  },
  {
    title: 'Rastreio',
    items: [
      { id: 'shopee', name: 'Shopee', logo: 'https://cdn.simpleicons.org/shopee/EE4D2D' },
      { id: 'loggi', name: 'Loggi', logo: placeholderLogo, placeholder: true },
      { id: 'correios', name: 'Correios', logo: placeholderLogo, placeholder: true },
      { id: 'cainiao', name: 'Cainiao', logo: placeholderLogo, placeholder: true },
      { id: 'jadlog', name: 'Jadlog', logo: placeholderLogo, placeholder: true },
      { id: 'kangu', name: 'Kangu', logo: placeholderLogo, placeholder: true },
      { id: 'melhor-envio', name: 'Melhor Envio', logo: placeholderLogo, placeholder: true },
      { id: 'outras-transportadoras', name: 'Outras transportadoras', logo: placeholderLogo, placeholder: true },
    ],
  },
];

export function IntegrationsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">Integrações</h2>
            <p className="text-base text-muted-foreground">
              Todas as integrações necessárias para crescer o seu negócio
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="mt-8 space-y-6">
            {(() => {
              const midpoint = Math.ceil(integrations.length / 2);
              const rows = [integrations.slice(0, midpoint), integrations.slice(midpoint)];
              return rows.map((row, rowIndex) => (
                <div
                  key={`row-${rowIndex}`}
                  className={`integration-marquee ${rowIndex % 2 === 1 ? 'integration-marquee--reverse' : ''}`}
                >
                  <div
                    className={`integration-marquee__track ${
                      rowIndex % 2 === 1 ? 'integration-marquee__track--reverse' : ''
                    }`}
                  >
                    {[...row, ...row].map((section, index) => (
                      <div
                        key={`${section.title}-${index}`}
                        className="integration-marquee__item integration-marquee__category"
                      >
                        <h3 className="text-sm font-bold text-foreground mb-3">{section.title}</h3>
                        {section.description && (
                          <p className="text-xs text-muted-foreground mb-2">{section.description}</p>
                        )}
                        <ul className="flex flex-wrap gap-2 text-xs text-foreground/90">
                          {section.items.map((item) => (
                            <li
                              key={item.id}
                              className="flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1 text-xs break-words max-w-full"
                            >
                              <img
                                src={item.logo}
                                alt={item.name}
                                className="h-6 w-6 flex-shrink-0 object-contain"
                                loading="lazy"
                                onError={(event) => {
                                  const target = event.currentTarget;
                                  if (target.src !== placeholderLogo) {
                                    target.src = placeholderLogo;
                                  }
                                }}
                              />
                              <span>{item.name}</span>
                              {item.placeholder && (
                                <span className="sr-only">TODO: substituir logo</span>
                              )}
                            </li>
                          ))}
                        </ul>
                        {section.note && (
                          <p className="text-xs text-muted-foreground mt-3">{section.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ));
            })()}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
