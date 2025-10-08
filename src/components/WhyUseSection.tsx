import { Zap, BarChart3, Brain, Shield } from "lucide-react";

const WhyUseSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Instant and Accurate Counting",
      description: "Get real-time metrics without refresh or submit clicks.",
      color: "text-metric-orange",
      bgColor: "bg-metric-orange/10",
    },
    {
      icon: BarChart3,
      title: "Multi-Metric Dashboard",
      description: "View words, characters, reading time, and more at a glance.",
      color: "text-metric-purple",
      bgColor: "bg-metric-purple/10",
    },
    {
      icon: Brain,
      title: "Perfect for Content Optimization",
      description: "Ideal for SEO writing, blog drafting, and academic papers.",
      color: "text-metric-blue",
      bgColor: "bg-metric-blue/10",
    },
    {
      icon: Shield,
      title: "Free, Online, and Secure",
      description: "Your text never leaves your browser — fully client-side processing.",
      color: "text-metric-green",
      bgColor: "bg-metric-green/10",
    },
  ];

  return (
    <section className="w-full py-16 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          Why Use Online Word Counter
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-lg ${benefit.bgColor} flex items-center justify-center mb-4`}>
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUseSection;
