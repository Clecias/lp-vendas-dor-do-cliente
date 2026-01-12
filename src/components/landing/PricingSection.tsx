import { Shield, ArrowRight, Check, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

const plans = [
  {
    name: "Growth",
    price: "119,90",
    ctaUrl: "https://www.unicodrop.com.br/app/?t=cadastrar",
    features: [
      "Dashboard financeiro",
      "Automação de WhatsApp ilimitada (1 número conectado)",
      "Automação de E-mails (3.000 envios)",
      "Leads ilimitados",
      "Templates de E-mails",
      "Plugin de Rastreamento",
      "Plugin de WhatsApp",
      "Automação de E-mail e WhatsApp para atualização de rastreamento",
      "Campanha de E-mails",
      "Pedidos retroativos até 60 dias",
      "Rastreios (500), acima delay maior",
      "Suporte humanizado"
    ]
  },
  {
    name: "Scale",
    price: "169,90",
    ctaUrl: "https://www.unicodrop.com.br/app/?t=cadastrar&plano=2",
    popular: true,
    features: [
      "Tudo do plano Growth",
      "Automação de WhatsApp ilimitada (2 números conectados)",
      "Automação de E-mails (12.000 envios)",
      "Rastreios (2000), acima delay maior",
      "Automação e campanhas de SMS",
      "Importar leads nas campanhas",
      "Templates de mensagens para SMS",
      "Exportação de arquivos",
      "Pedidos retroativos até 12 meses",
      "Suporte Premium"
    ]
  },
  {
    name: "Elite",
    price: "289,90",
    ctaUrl: "https://www.unicodrop.com.br/app/?t=cadastrar&plano=3",
    features: [
      "Tudo do plano Scale",
      "Automação de WhatsApp ilimitada (4 números conectados)",
      "Automação de E-mails (30.000 envios)",
      "Gestor de Conta dedicado",
      "Integração com API Oficial do WhatsApp (em breve)",
      "Acesso à API (em breve)",
      "Chatbot (em breve)",
      "Rastreios (5000), acima delay maior",
      "Pedidos retroativos até 24 meses"
    ]
  }
];

export function PricingSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-secondary-foreground">
              Escolha o Plano Ideal Para Sua Loja
            </h2>
            <p className="text-base text-secondary-foreground/90">
              Comece a recuperar vendas hoje mesmo
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, idx) => (
            <AnimateOnScroll key={idx} delay={idx * 150}>
              <div
                className={`relative bg-white border-2 ${
                  plan.popular ? 'border-primary' : 'border-border'
                } p-6 rounded-2xl h-full flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Mais Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2 text-secondary-foreground">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-secondary-foreground/80">R$</span>
                    <span className="text-lg font-black text-secondary-foreground">{plan.price}</span>
                    <span className="text-secondary-foreground/80">/mês</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href={plan.ctaUrl}>
                    Começar Agora
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="bg-success p-6 rounded-xl mb-8">
            <div className="flex flex-col items-center text-center gap-4">
              <Shield className="w-10 h-10 flex-shrink-0 text-white" />
              <div>
              <p className="font-bold text-base mb-2 text-white">Garantia Incondicional de 30 Dias</p>
                <p className="text-base text-white">Use o sistema por 30 dias completos. Se ele não recuperar mais dinheiro do que o valor da mensalidade, você recebe 100% do seu investimento de volta. Sem perguntas, sem burocracia. O risco é TODO meu.</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-8">
              ✓ Ativação imediata • ✓ Cancele quando quiser • ✓ Suporte em português
            </p>

            <div className="pt-8 border-t border-white/20">
              <p className="text-base mb-4 text-secondary-foreground">Ainda com dúvidas? </p>
              <Button
                variant="whatsapp"
                size="xl"
                className="
                  w-full sm:w-auto
                  rounded-full
                  px-5 py-3 sm:px-8 sm:py-4
                  inline-flex items-center justify-center gap-2
                  text-sm sm:text-base
                  whitespace-normal
                "
                asChild
              >
                <a href="https://wa.me/5511945109907" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span className="leading-tight">Falar com Especialista no WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
