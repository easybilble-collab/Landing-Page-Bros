import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quais empresas podem alugar?",
    answer: "Atendemos exclusivamente pessoas jurídicas (empresas com CNPJ) com, no mínimo, 2 anos de atividade. A contratação está sujeita a uma análise de crédito simples e rápida.",
  },
  {
    question: "Qual o prazo mínimo de locação?",
    answer: "Nosso prazo mínimo padrão é de 12 meses, mas oferecemos flexibilidade para extensões e contratos personalizados de acordo com a necessidade do seu projeto.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer: "Você pode solicitar um orçamento personalizado diretamente através do nosso site, por telefone ou e-mail. Nossa equipe responderá em poucas horas.",
  },
  {
    question: "Como funciona a entrega?",
    answer: "Cuidamos de toda a logística. A entrega e a instalação são realizadas por nossa equipe especializada em até 48 horas úteis após a confirmação do pedido.",
  },
  {
    question: "Vocês fazem manutenção dos equipamentos?",
    answer: "Sim, a manutenção completa e o suporte técnico estão incluídos em todos os nossos planos de locação, garantindo o pleno funcionamento dos equipamentos.",
  },
  {
    question: "É possível trocar equipamentos durante o contrato?",
    answer: "Sim, uma das nossas maiores vantagens é a flexibilidade. Você pode solicitar um upgrade ou a troca de equipamentos a qualquer momento durante o contrato.",
  },
  {
    question: "Vocês oferecem suporte técnico?",
    answer: "Oferecemos suporte técnico especializado 24/7 para resolver qualquer eventualidade e garantir a continuidade das suas operações.",
  },
  {
    question: "Há cobertura nacional?",
    answer: "Sim, atendemos empresas em todo o território brasileiro, com a mesma agilidade e qualidade de serviço.",
  },
  {
    question: "Posso cancelar o contrato antes do prazo?",
    answer: "Sim, é possível. Existem condições específicas para o cancelamento antecipado que podem ser consultadas em seu contrato ou com nosso time de consultores.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Perguntas Frequentes</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de locação
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-12">
          <p className="text-lg">Ainda tem dúvidas? Fale conosco:</p>
          <p className="font-semibold text-primary">Telefone: (11) 4002-8922 | Email: contato@brosrental.com.br</p>
        </div>
      </div>
    </section>
  );
};