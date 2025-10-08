import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

const AppsSection = () => {
  const apps = [
    {
      name: "Local Delivery Date Picker",
      description: "Let customers choose their preferred delivery date and time for local orders.",
      link: "https://letsmetrix.com/app/delivery-date-omega",
    },
    {
      name: "Pareto ‑ Order Limits Quantity",
      description: "Set minimum and maximum order quantities to control purchase limits.",
      link: "https://letsmetrix.com/app/pareto-limit-purchase",
    },
    {
      name: "TikShop: Omega Pixel & Catalog",
      description: "Track TikTok conversions and sync your product catalog seamlessly.",
      link: "https://letsmetrix.com/app/tiktok-multi-pixels",
    },
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          Try Out These Apps
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{app.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{app.description}</p>
              <Button className="w-full mt-auto" asChild>
                <a href={app.link} target="_blank" rel="noopener noreferrer">
                  Try Out
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
