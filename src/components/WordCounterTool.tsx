import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Type, FileText, Clock, Mic } from "lucide-react";

interface Metrics {
  words: number;
  characters: number;
  sentences: number;
  readingTime: number;
  speakingTime: number;
}

const WordCounterTool = () => {
  const [text, setText] = useState("");

  const metrics: Metrics = useMemo(() => {
    if (!text.trim()) {
      return { words: 0, characters: 0, sentences: 0, readingTime: 0, speakingTime: 0 };
    }

    // Word count - split by whitespace and filter empty strings
    const words = text.trim().split(/\s+/).filter((word) => word.length > 0).length;

    // Character count (including spaces)
    const characters = text.length;

    // Sentence count - split by periods, exclamation marks, question marks
    const sentences = text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0).length;

    // Reading time (average 200 words per minute)
    const readingTime = Math.ceil(words / 200);

    // Speaking time (average 130 words per minute)
    const speakingTime = Math.ceil(words / 130);

    return { words, characters, sentences, readingTime, speakingTime };
  }, [text]);

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[2fr,1fr] gap-6">
        {/* Left: Input Area */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing or paste your text here..."
            className="w-full h-[400px] resize-none border-0 focus:outline-none focus:ring-0 text-foreground bg-transparent font-sans text-base leading-relaxed"
            maxLength={50000}
          />
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">{metrics.characters} / 50,000 characters</span>
            <Button onClick={handleClear} variant="outline" size="sm">
              Clear Text
            </Button>
          </div>
        </div>

        {/* Right: Results Summary */}
        <div className="bg-accent rounded-lg border border-border p-6 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-foreground">Results</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-metric-orange/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-metric-orange" />
              </div>
              <div>
                <div className="text-3xl font-bold text-metric-orange">{metrics.words}</div>
                <div className="text-sm text-muted-foreground">Words</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-metric-purple/10 flex items-center justify-center">
                <Type className="w-6 h-6 text-metric-purple" />
              </div>
              <div>
                <div className="text-3xl font-bold text-metric-purple">{metrics.characters}</div>
                <div className="text-sm text-muted-foreground">Characters</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-metric-gray/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-metric-gray" />
              </div>
              <div>
                <div className="text-3xl font-bold text-metric-gray">{metrics.sentences}</div>
                <div className="text-sm text-muted-foreground">Sentences</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-metric-green/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-metric-green" />
              </div>
              <div>
                <div className="text-3xl font-bold text-metric-green">{metrics.readingTime}</div>
                <div className="text-sm text-muted-foreground">min reading</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-metric-blue/10 flex items-center justify-center">
                <Mic className="w-6 h-6 text-metric-blue" />
              </div>
              <div>
                <div className="text-3xl font-bold text-metric-blue">{metrics.speakingTime}</div>
                <div className="text-sm text-muted-foreground">min speaking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCounterTool;
