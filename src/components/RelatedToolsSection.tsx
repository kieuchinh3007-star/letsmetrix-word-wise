import { Button } from "@/components/ui/button";
import { Calculator, DollarSign, Package, Palette } from "lucide-react";

const RelatedToolsSection = () => {
  const tools = [
    {
      icon: Package,
      title: "Shopify App Detector",
      description: "Discover what apps any Shopify store is using to boost their sales.",
      link: "https://letsmetrix.com/tools/shopify-app-detector",
    },
    {
      icon: Palette,
      title: "Shopify Theme Detector",
      description: "Identify the theme and design elements of any Shopify store.",
      link: "https://letsmetrix.com/tools/shopify-theme-detector",
    },
    {
      icon: Calculator,
      title: "Product Pricing Calculator",
      description: "Instantly calculate profit margin and pricing per product.",
      link: "https://letsmetrix.com/tools/product-pricing-calculator",
    },
    {
      icon: DollarSign,
      title: "Profit Margin Calculator",
      description: "Understand cost vs. revenue in one click.",
      link: "https://letsmetrix.com/tools/profit-margin-calculator-suite",
    },
  ];

  return (
    <section className="w-full py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          More Tools Like This
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
