import { Button } from "@/components/ui/button";
import { Calculator, DollarSign, Tag } from "lucide-react";

const RelatedToolsSection = () => {
  const tools = [
    {
      icon: Calculator,
      title: "Product Pricing Calculator",
      description: "Instantly calculate profit margin and pricing per product.",
      link: "#",
    },
    {
      icon: DollarSign,
      title: "Profit Margin Calculator",
      description: "Understand cost vs. revenue in one click.",
      link: "#",
    },
    {
      icon: Tag,
      title: "Discount Calculator",
      description: "See how discounts affect your price and profit.",
      link: "#",
    },
  ];

  return (
    <section className="w-full py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          More Tools Like This
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <tool.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{tool.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{tool.description}</p>
              <Button variant="outline" className="w-full mt-auto" asChild>
                <a href={tool.link}>Try Tool</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedToolsSection;
