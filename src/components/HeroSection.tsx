import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToTool = () => {
    const toolSection = document.getElementById("word-counter-tool");
    toolSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-gradient-to-b from-accent to-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Online Word Counter – Free Tool
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Instantly count words, characters, sentences, and reading time. Perfect for writers, students, and content
            creators.
          </p>
          <Button onClick={scrollToTool} size="lg" className="mt-8 shadow-lg hover:shadow-xl transition-shadow">
            Start Typing Now
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
