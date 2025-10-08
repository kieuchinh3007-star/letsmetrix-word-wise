import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is an online word counter tool?",
      answer:
        "It's a free online tool that counts the number of words, characters, and sentences in your text — perfect for writers, students, and editors.",
    },
    {
      question: "How accurate is this Online Word Counter?",
      answer:
        "Letsmetrix's Word Counter updates live as you type, using an advanced tokenizer that counts only meaningful words — ensuring 99% accuracy.",
    },
    {
      question: "Can I use this word counter for SEO writing?",
      answer:
        "Yes! It's ideal for optimizing blog posts or ad copy to match specific word lengths for SEO performance.",
    },
    {
      question: "Is the Letsmetrix Word Counter really free?",
      answer:
        "100% free — no registration, ads, or data collection. You can use it anytime online.",
    },
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          FAQs about the Online Word Counter Tool
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
