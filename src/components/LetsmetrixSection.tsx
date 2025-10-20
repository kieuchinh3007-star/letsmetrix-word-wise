import { Button } from "@/components/ui/button";
import { BarChart3, Search, TrendingUp } from "lucide-react";

const LetsmetrixSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track store metrics and conversion insights",
    },
    {
      icon: Search,
      title: "Competitor Research",
      description: "Analyze competitor strategies and trends",
    },
    {
      icon: TrendingUp,
      title: "Marketing Insights",
      description: "Discover effective marketing channels",
    },
  ];

  return (
    <section className="w-full py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Grow Smarter with <span className="text-primary">Letsmetrix</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take your Shopify analysis to the next level. Get deep insights into store performance, competitor analysis, and marketing strategies with our comprehensive analytics platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="https://letsmetrix.com/" target="_blank" rel="noopener noreferrer">
              Explore Letsmetrix
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://letsmetrix.com/" target="_blank" rel="noopener noreferrer">
              View Features
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LetsmetrixSection;
