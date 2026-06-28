"use client";

import { useState } from "react";
import { Check, TriangleAlert, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WorkerPulse() {
  const [step, setStep] = useState(1);
  const [isSOS, setIsSOS] = useState(false);
  
  // SOS State
  const [sosStep, setSosStep] = useState(0);

  const cycleDay = 15;
  const totalDays = 28;
  const progress = (cycleDay / totalDays) * 100;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const OptionBtn = ({ icon, label, onClick }: { icon: string, label: string, onClick: () => void }) => (
    <button 
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 bg-card border border-border/50 rounded-2xl hover:bg-secondary/10 hover:border-secondary transition-all active:scale-95"
    >
      <span className="text-4xl mb-3">{icon}</span>
      <span className="font-bold text-foreground text-sm">{label}</span>
    </button>
  );

  if (isSOS) {
    return (
      <div className={cn("min-h-screen flex flex-col items-center justify-center p-6 text-center transition-colors duration-1000", sosStep > 0 ? "bg-background" : "bg-[#1A1A2E]")}>
        <div className="w-full max-w-sm space-y-8">
          
          {sosStep === 0 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="w-24 h-24 bg-destructive/20 text-destructive rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldAlert className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold">ماذا حصل معك؟</h2>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <OptionBtn icon="🔧" label="حادث عمل" onClick={() => setSosStep(1)} />
                <OptionBtn icon="👁️" label="شيء شفته" onClick={() => setSosStep(1)} />
              </div>
              <button onClick={() => setIsSOS(false)} className="text-muted-foreground mt-8 underline">إلغاء</button>
            </div>
          )}

          {sosStep === 1 && (
            <div className="space-y-12 animate-in fade-in zoom-in-95">
              <h2 className="text-2xl font-bold">خذ نفس عميق معي</h2>
              <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 bg-secondary/20 rounded-full animate-ping" style={{ animationDuration: '10s' }}></div>
                <div className="w-32 h-32 bg-secondary/40 rounded-full flex items-center justify-center z-10 backdrop-blur-sm">
                  <span className="text-secondary-foreground font-bold">شهيق ... زفير</span>
                </div>
              </div>
              <p className="text-muted-foreground">شهيق 4 ثواني... زفير 6 ثواني</p>
              <button 
                onClick={() => setSosStep(2)}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90"
              >
                كمّلت
              </button>
            </div>
          )}

          {sosStep === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-2xl font-bold">هل أنت بأمان الحين؟</h2>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <button onClick={() => setSosStep(3)} className="py-4 bg-secondary/20 text-secondary border border-secondary/50 rounded-xl font-bold">نعم</button>
                <button onClick={() => setSosStep(3)} className="py-4 bg-destructive/20 text-destructive border border-destructive/50 rounded-xl font-bold">لا</button>
              </div>
            </div>
          )}

          {sosStep === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="w-20 h-20 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-secondary">Buddy Officer تنبّه</h2>
              <p className="text-muted-foreground leading-relaxed">
                قريباً يجي لك. تذكر أن ما حصل ليس خطأك.
              </p>
              <button 
                onClick={() => setIsSOS(false)}
                className="w-full mt-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-bold"
              >
                العودة للرئيسية
              </button>
            </div>
          )}

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-sm space-y-8">
        
        {/* Progress header */}
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <h1 className="text-2xl font-bold">صباح الخير جاد،</h1>
            <span className="text-sm text-secondary font-bold font-roboto">يوم {cycleDay}/{totalDays}</span>
          </div>
          <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
            <div className="h-full bg-secondary rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-muted-foreground text-sm">أنت في نقطة ذروة الدورة، راقب إرهاقك!</p>
        </div>

        {/* Pulse Questions */}
        <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-xl min-h-[400px] flex flex-col">
          
          {step === 1 && (
            <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-right-4">
              <div className="text-sm font-bold text-muted-foreground mb-4">السؤال 1 من 3</div>
              <h2 className="text-xl font-bold mb-8 flex-1">كيف راحتك البارحة؟</h2>
              <div className="grid grid-cols-2 gap-4">
                <OptionBtn icon="😴" label="ما رحتش" onClick={handleNext} />
                <OptionBtn icon="🙂" label="عادي" onClick={handleNext} />
                <OptionBtn icon="😊" label="مليح" onClick={handleNext} />
                <OptionBtn icon="💪" label="نشيط" onClick={handleNext} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-right-4">
              <div className="text-sm font-bold text-muted-foreground mb-4">السؤال 2 من 3</div>
              <h2 className="text-xl font-bold mb-8 flex-1">كيف تحسّ بروحك اليوم؟</h2>
              <div className="grid grid-cols-2 gap-4">
                <OptionBtn icon="😔" label="متضغط" onClick={handleNext} />
                <OptionBtn icon="😐" label="عادي" onClick={handleNext} />
                <OptionBtn icon="🙂" label="واعر" onClick={handleNext} />
                <OptionBtn icon="😄" label="بخير" onClick={handleNext} />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-right-4">
              <div className="text-sm font-bold text-muted-foreground mb-4">السؤال 3 من 3</div>
              <h2 className="text-xl font-bold mb-8 flex-1">كيف علاقتك مع زملاءك؟</h2>
              <div className="grid grid-cols-2 gap-4">
                <OptionBtn icon="😕" label="مشاكل" onClick={handleNext} />
                <OptionBtn icon="😐" label="عادي" onClick={handleNext} />
                <OptionBtn icon="🤝" label="مليحة" onClick={handleNext} />
                <OptionBtn icon="💪" label="ممتازة" onClick={handleNext} />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="flex-1 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 space-y-6">
              <div className="w-20 h-20 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mx-auto">
                <TriangleAlert className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-amber-500 mb-2">تنبيه أولي</h2>
                <p className="text-muted-foreground text-sm">يبدو أنك مرهق اليوم قليلاً. لا تنس شرب الماء والالتزام بفترات الراحة القصيرة.</p>
              </div>
              <button onClick={() => setStep(1)} className="w-full py-4 mt-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors">
                مشاركة مع Buddy Officer
              </button>
            </div>
          )}
        </div>

        {/* SOS Button */}
        {step < 4 && (
          <button 
            onClick={() => setIsSOS(true)}
            className="w-full py-4 mt-8 bg-destructive/10 text-destructive border border-destructive/30 font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-destructive hover:text-white transition-all active:scale-95"
          >
            <ShieldAlert className="w-6 h-6" />
            استجابة الصدمات (SOS)
          </button>
        )}

      </div>
    </div>
  );
}
