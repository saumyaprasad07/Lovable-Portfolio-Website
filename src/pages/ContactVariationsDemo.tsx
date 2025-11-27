import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactVariation1Clean, ContactVariation2IconBased, ContactVariation3Premium } from "@/components/ContactVariations";

const ContactVariationsDemo = () => {
  const [selectedVariation, setSelectedVariation] = useState<1 | 2 | 3>(1);

  const variations = [
    { id: 1, name: "Variation 1: Clean & Minimal", description: "Professional card-based layout with copy functionality" },
    { id: 2, name: "Variation 2: Icon-Based Grid", description: "Visual grid with color-coded icons for each contact method" },
    { id: 3, name: "Variation 3: Premium", description: "Sophisticated gradient design with enhanced visual hierarchy" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Contact Section Variations</h1>
          <p className="text-muted-foreground mb-6">Choose your preferred design style</p>

          <div className="flex flex-wrap gap-3">
            {variations.map((variation) => (
              <Button
                key={variation.id}
                onClick={() => setSelectedVariation(variation.id as 1 | 2 | 3)}
                variant={selectedVariation === variation.id ? "default" : "outline"}
                className="flex-1 min-w-[200px]"
              >
                {variation.name}
              </Button>
            ))}
          </div>

          <div className="mt-4 p-4 rounded-lg bg-muted/30">
            <p className="text-sm text-muted-foreground">
              {variations.find(v => v.id === selectedVariation)?.description}
            </p>
          </div>
        </div>
      </div>

      <div className="pb-20">
        {selectedVariation === 1 && <ContactVariation1Clean />}
        {selectedVariation === 2 && <ContactVariation2IconBased />}
        {selectedVariation === 3 && <ContactVariation3Premium />}
      </div>

      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/95 backdrop-blur-sm p-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Currently viewing: <span className="font-semibold text-foreground">{variations.find(v => v.id === selectedVariation)?.name}</span>
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="/">Back to Portfolio</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactVariationsDemo;
