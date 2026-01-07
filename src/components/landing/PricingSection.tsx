import { Shield, ArrowRight, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';

const priceItems = [
  { item: "Ferramenta de WhatsApp", price: "R$ 200/mês" },
  { item: "Recuperação de Carrinho", price: "R$ 150/mês" },
  { item: "Email Marketing", price: "R$ 180/mês" },
  { item: "SMS Marketing", price: "R$ 120/mês" },
  { item: "Dashboard de Lucro", price: "R$ 250/mês" },
  { item: "Atendente Part-time", price: "R$ 800/mês" },
];

export function PricingSection() {
  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-foreground">
            Quanto Custa NÃO Ter Isso?
          </h2>
          <p className="text-xl text-secondary-foreground/90">
            Você continuará perdendo milhares todo mês... ou decide recuperar agora
          </p>
        </div>
        
        <div className="bg-white/10 border-2 border-white/20 p-8 rounded-2xl mb-8">
          <p className="text-xl mb-6 text-center text-secondary-foreground">Se você contratasse cada serviço separadamente:</p>
          <div className="max-w-md mx-auto space-y-3 mb-6">
            {priceItems.map((item, idx) => (
              <div key={idx} className="flex justify-between text-lg text-secondary-foreground">
                <span>{item.item}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
            <div className="border-t-2 border-white/30 pt-3 flex justify-between text-2xl font-bold text-secondary-foreground">
              <span>Total:</span>
              <span className="text-red-400">R$ 1.700/mês</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl mb-3 text-secondary-foreground">Com o Único Drop você paga apenas:</p>
          <div 
            className="inline-block px-12 py-8 rounded-2xl"
            style={{ background: 'linear-gradient(90deg, hsl(204 62% 42%) 0%, hsl(196 91% 52%) 100%)' }}
          >
            <p className="text-lg mb-2 text-white/90">De R$ 1.700 por</p>
            <p className="text-6xl md:text-7xl font-black mb-2 text-white">R$ 119</p>
            <p className="text-xl text-white/90">por mês</p>
          </div>
          <p className="text-lg mt-4 text-secondary-foreground/90">+ Implementação Guiada + Suporte Especializado</p>
        </div>

        <div className="bg-success p-6 rounded-xl mb-8">
          <div className="flex flex-col items-center text-center gap-4">
            <Shield className="w-10 h-10 flex-shrink-0 text-white" />
            <div>
              <p className="font-bold text-xl mb-2 text-white">🛡️ Garantia Incondicional de 30 Dias</p>
              <p className="text-lg text-white">Use o sistema por 30 dias completos. Se ele não recuperar mais dinheiro do que o valor da mensalidade, você recebe 100% do seu investimento de volta. Sem perguntas, sem burocracia. O risco é TODO meu.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="xxl" className="w-full md:w-auto mb-4">
            SIM! Quero Começar Agora
            <ArrowRight className="w-7 h-7" />
          </Button>
          <p className="text-sm text-secondary-foreground/75 mt-4">
            ✓ Ativação imediata • ✓ Cancele quando quiser • ✓ Suporte em português
          </p>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-lg mb-4 text-secondary-foreground">Ainda com dúvidas? Fale com um especialista:</p>
            <Button variant="success" size="xl">
              <PhoneCall className="w-5 h-5" />
              Falar com Especialista no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}