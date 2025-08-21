import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { StarRating } from "@/components/StarRating";
import { AppealInfo } from "@/components/AppealInfo";
import { useTranslations } from "@/hooks/useTranslations";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormState = 'idle' | 'loading' | 'success' | 'error' | 'invalid';

export const ServiceEvaluation = () => {
  const [lang, setLang] = useState<'ru' | 'kz'>('ru');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [formState, setFormState] = useState<FormState>('idle');
  const { toast } = useToast();
  
  const t = useTranslations(lang);
  
  // Mock data - in real app this would come from API
  const appealData = {
    appealNumber: "123456",
    submissionDate: "15.07.2025",
    completionDate: "20.07.2025",
    serviceResponse: "Ваше обращение рассмотрено. Проблема с мусором во дворе решена. Спасибо за обращение."
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rating) {
      toast({
        variant: "destructive",
        description: t.messages.selectRating
      });
      return;
    }
    
    if (comment.length > 500) {
      toast({
        variant: "destructive", 
        description: t.messages.commentTooLong
      });
      return;
    }

    setFormState('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate success (in real app, handle actual API response)
    setFormState('success');
    toast({
      description: t.messages.success,
      className: "bg-success text-success-foreground"
    });
  };

  const renderStateMessage = () => {
    switch (formState) {
      case 'success':
        return (
          <div className="text-center py-8">
            <CheckCircle className="mx-auto mb-4 h-16 w-16 text-success" />
            <p className="text-lg text-success">{t.messages.success}</p>
          </div>
        );
      case 'invalid':
        return (
          <div className="text-center py-8">
            <AlertCircle className="mx-auto mb-4 h-16 w-16 text-warning" />
            <p className="text-lg text-warning">{t.messages.invalidLink}</p>
          </div>
        );
      case 'error':
        return (
          <div className="text-center py-8">
            <AlertCircle className="mx-auto mb-4 h-16 w-16 text-destructive" />
            <p className="text-lg text-destructive">{t.messages.serviceUnavailable}</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (formState === 'success' || formState === 'invalid' || formState === 'error') {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="flex justify-end mb-8">
            <LanguageSwitcher 
              currentLang={lang}
              onLanguageChange={setLang}
            />
          </div>
          
          {renderStateMessage()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header with language switcher */}
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-3xl font-bold text-foreground max-w-3xl">
            {t.title}
          </h1>
          <LanguageSwitcher 
            currentLang={lang}
            onLanguageChange={setLang}
          />
        </div>

        {/* Appeal Information */}
        <div className="mb-8">
          <AppealInfo
            appealNumber={appealData.appealNumber}
            submissionDate={appealData.submissionDate}
            completionDate={appealData.completionDate}
            serviceResponse={appealData.serviceResponse}
            labels={t.appealInfo}
          />
        </div>

        {/* Evaluation Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Star Rating */}
          <div className="text-center">
            <StarRating
              rating={rating}
              onRatingChange={setRating}
              labels={t.rating.labels}
            />
          </div>

          {/* Comment Field */}
          <div className="space-y-2">
            <Textarea
              placeholder={t.comment.placeholder}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[120px] resize-none"
              disabled={formState === 'loading'}
            />
            <div className="text-right text-sm text-muted-foreground">
              {comment.length}/500 {t.comment.counter}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              disabled={formState === 'loading'}
              className="px-8 py-3"
            >
              {formState === 'loading' && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {t.submit}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};