import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Funciona com a minha plataforma?",
    a: "Sim! Integramos com Shopify, WooCommerce, Nuvemshop, Tray, Yampi, Bagy, Bling, Tiny e as principais plataformas do mercado."
  },
  {
    q: "Quanto tempo leva para ver resultados?",
    a: "As primeiras vendas recuperadas acontecem nas primeiras 24-48 horas após a ativação. Nossos clientes recuperam em média R$ 1.800 a R$ 5.000 no primeiro mês."
  },
  {
    q: "É difícil de configurar?",
    a: "Não! Temos um painel super simples que facilita a conexão da sua loja. Em menos de 1 hora tudo estará funcionando."
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim, sem fidelidade. Você pode cancelar a qualquer momento. Mas tenho certeza que não vai querer quando ver os resultados."
  },
  {
    q: "E se não funcionar para mim?",
    a: "Garantia de 30 dias. Se você usar a plataforma e não recuperar pelo menos R$ 119 em vendas, devolvemos 100% do seu dinheiro. Simples assim."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-secondary-foreground mb-12">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`}
              className="bg-white/10 px-4 sm:px-6 rounded-lg border border-white/15 data-[state=open]:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="text-left font-bold text-lg text-secondary-foreground hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-secondary-foreground/85 pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
