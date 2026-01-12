import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';
import { useState } from 'react';

const integrations = [
  {
    id: 'shopify',
    name: 'Shopify',
    localLogoPath: '/logos/integrations/shopify.svg',
    fallbackLogoUrl: 'https://cdn.simpleicons.org/shopify',
  },
  {
    id: 'yampi',
    name: 'Yampi',
    localLogoPath: '/logos/integrations/yampi.svg',
    fallbackLogoUrl: 'https://cdn.simpleicons.org/yampi',
  },
  {
    id: 'cartpanda',
    name: 'CartPanda',
    localLogoPath: '/logos/integrations/cartpanda.svg',
    fallbackLogoUrl: 'https://cdn.simpleicons.org/cartpanda',
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    localLogoPath: '/logos/integrations/woocommerce.svg',
    fallbackLogoUrl: 'https://cdn.simpleicons.org/woocommerce',
  },
  {
    id: 'lpqv',
    name: 'LPQV',
    localLogoPath: '/logos/integrations/lpqv.svg',
  },
  {
    id: 'nuvem-shop',
    name: 'Nuvem Shop',
    localLogoPath: '/logos/integrations/nuvem-shop.svg',
    fallbackLogoUrl: 'https://cdn.simpleicons.org/nuvemshop',
  },
  {
    id: 'unicopag',
    name: 'ÚnicoPag',
    localLogoPath: '/logos/integrations/unicopag.svg',
  },
  {
    id: 'yever',
    name: 'Yever',
    localLogoPath: '/logos/integrations/yever.svg',
  },
  {
    id: 'mercado-pago',
    name: 'Mercado Pago',
    localLogoPath: '/logos/integrations/mercado-pago.svg',
    fallbackLogoUrl: 'https://cdn.simpleicons.org/mercadopago',
  },
  {
    id: 'appmax',
    name: 'AppMax',
    localLogoPath: '/logos/integrations/appmax.svg',
  },
  {
    id: 'kiwify',
    name: 'Kiwify',
    localLogoPath: '/logos/integrations/kiwify.svg',
  },
  {
    id: 'hotmart',
    name: 'Hotmart',
    localLogoPath: '/logos/integrations/hotmart.svg',
    fallbackLogoUrl: 'https://cdn.simpleicons.org/hotmart',
  },
  {
    id: 'kirvano',
    name: 'Kirvano',
    localLogoPath: '/logos/integrations/kirvano.svg',
  },
  {
    id: 'braip',
    name: 'Braip',
    localLogoPath: '/logos/integrations/braip.svg',
  },
  {
    id: 'ticto',
    name: 'Ticto',
    localLogoPath: '/logos/integrations/ticto.svg',
  },
  {
    id: 'eduzz',
    name: 'Eduzz',
    localLogoPath: '/logos/integrations/eduzz.svg',
  },
  {
    id: 'monetizze',
    name: 'Monetizze',
    localLogoPath: '/logos/integrations/monetizze.svg',
  },
  {
    id: 'pepper',
    name: 'Pepper',
    localLogoPath: '/logos/integrations/pepper.svg',
  },
  {
    id: 'lastlink',
    name: 'Lastlink',
    localLogoPath: '/logos/integrations/lastlink.svg',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    localLogoPath: '/logos/integrations/facebook.svg',
    fallbackLogoUrl: 'https://cdn.simpleicons.org/facebook',
  },
  {
    id: 'google',
    name: 'Google',
    localLogoPath: '/logos/integrations/google.svg',
    fallbackLogoUrl: 'https://cdn.simpleicons.org/google',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    localLogoPath: '/logos/integrations/tiktok.svg',
    fallbackLogoUrl: 'https://cdn.simpleicons.org/tiktok',
  },
  {
    id: 'taboola',
    name: 'Taboola',
    localLogoPath: '/logos/integrations/taboola.svg',
    fallbackLogoUrl: 'https://cdn.simpleicons.org/taboola',
  },
  {
    id: 'shopee',
    name: 'Shopee',
    localLogoPath: '/logos/integrations/shopee.svg',
    fallbackLogoUrl: 'https://cdn.simpleicons.org/shopee',
  },
  {
    id: 'loggi',
    name: 'Loggi',
    localLogoPath: '/logos/integrations/loggi.svg',
  },
  {
    id: 'correios',
    name: 'Correios',
    localLogoPath: '/logos/integrations/correios.svg',
  },
  {
    id: 'cainiao',
    name: 'Cainiao',
    localLogoPath: '/logos/integrations/cainiao.svg',
  },
  {
    id: 'jadlog',
    name: 'Jadlog',
    localLogoPath: '/logos/integrations/jadlog.svg',
  },
  {
    id: 'kangu',
    name: 'Kangu',
    localLogoPath: '/logos/integrations/kangu.svg',
  },
  {
    id: 'melhor-envio',
    name: 'Melhor Envio',
    localLogoPath: '/logos/integrations/melhor-envio.svg',
  },
  {
    id: 'outras-transportadoras',
    name: 'Outras transportadoras',
    localLogoPath: '/logos/integrations/outras-transportadoras.svg',
  },
];

const uniqueIntegrations = Array.from(new Map(integrations.map((item) => [item.id, item])).values());

type LogoState = 'local' | 'fallback' | 'hidden';

function IntegrationLogo({ name, localLogoPath, fallbackLogoUrl }: { name: string; localLogoPath: string; fallbackLogoUrl?: string }) {
  const [state, setState] = useState<LogoState>('local');
  const src = state === 'local' ? localLogoPath : fallbackLogoUrl || '';

  if (state === 'hidden' || !src) {
    return null;
  }

  return (
    <img
      src={src}
      alt={name}
      className="h-6 w-6 flex-shrink-0 object-contain"
      loading="lazy"
      onError={() => {
        if (state === 'local' && fallbackLogoUrl) {
          setState('fallback');
        } else {
          setState('hidden');
        }
      }}
    />
  );
}

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
              const midpoint = Math.ceil(uniqueIntegrations.length / 2);
              const rows = [uniqueIntegrations.slice(0, midpoint), uniqueIntegrations.slice(midpoint)];
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
                    {[...row, ...row].map((item, index) => (
                      <div key={`${item.id}-${index}`} className="integration-marquee__item">
                        <IntegrationLogo
                          name={item.name}
                          localLogoPath={item.localLogoPath}
                          fallbackLogoUrl={item.fallbackLogoUrl}
                        />
                        <span>{item.name}</span>
                        {!item.fallbackLogoUrl && (
                          <span className="sr-only">TODO: adicionar logo local</span>
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
