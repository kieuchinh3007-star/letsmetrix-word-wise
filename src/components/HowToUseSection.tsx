import { Edit3, Settings } from "lucide-react";

const HowToUseSection = () => {
  const steps = [
    {
      icon: Edit3,
      title: "Enter or paste your text",
      description: "Start typing or paste content directly into the text box.",
    },
    {
      icon: Settings,
      title: "See results instantly",
      description: "The tool automatically counts words, characters, and more in real-time.",
    },
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
        How to Use the Free Online Word Counter
      </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
