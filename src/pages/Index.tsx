import HeroSection from "@/components/HeroSection";
import WordCounterTool from "@/components/WordCounterTool";
import HowToUseSection from "@/components/HowToUseSection";
import WhyUseSection from "@/components/WhyUseSection";
import FAQSection from "@/components/FAQSection";
import RelatedToolsSection from "@/components/RelatedToolsSection";
import AppsSection from "@/components/AppsSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* Word Counter Tool Section */}
      <section id="word-counter-tool" className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WordCounterTool />
        </div>
      </section>

      <HowToUseSection />
      <WhyUseSection />
      <FAQSection />
      <RelatedToolsSection />
      <AppsSection />
    </main>
  );
};

export default Index;
