import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
const ThemeToggle = () => {
  const {
    theme,
    setTheme
  } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return;
  }
  return <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-full hover:bg-primary/10" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
      {theme === "dark" ? <Sun className="h-5 w-5 text-foreground transition-all" /> : <Moon className="h-5 w-5 text-foreground transition-all" />}
    </Button>;
};
export default ThemeToggle;