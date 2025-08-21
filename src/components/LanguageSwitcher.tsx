import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  currentLang: 'ru' | 'kz';
  onLanguageChange: (lang: 'ru' | 'kz') => void;
}

export const LanguageSwitcher = ({ currentLang, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => onLanguageChange('ru')}
        className={cn(
          "px-2 py-1 rounded transition-colors",
          currentLang === 'ru' 
            ? "bg-primary text-primary-foreground font-medium" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        RU
      </button>
      <span className="text-muted-foreground">|</span>
      <button
        onClick={() => onLanguageChange('kz')}
        className={cn(
          "px-2 py-1 rounded transition-colors",
          currentLang === 'kz' 
            ? "bg-primary text-primary-foreground font-medium" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        KZ
      </button>
    </div>
  );
};