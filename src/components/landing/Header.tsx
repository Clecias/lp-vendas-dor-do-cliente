import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #2472b3 0%, #26abe2 100%)' }}
          >
            U
          </div>
          <span className="font-bold text-lg text-foreground">Único Drop</span>
        </div>
        
        <Button 
          className="text-white font-semibold"
          style={{ background: 'linear-gradient(90deg, #2472b3 0%, #26abe2 100%)' }}
        >
          Testar Grátis
        </Button>
      </div>
    </header>
  );
};
