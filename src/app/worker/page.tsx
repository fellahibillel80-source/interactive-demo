"use client";

import { useState } from "react";
import { WifiOff, MessageSquare, AlertTriangle, BookOpen, ShieldAlert, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MobileAppSimulator() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  
  // SOS State
  const [isSOS, setIsSOS] = useState(false);
  const [sosStep, setSosStep] = useState(0);

  const RISKS = [
    { id: 1, name: "التنكيد المهني", en: "Job Strain", icon: "💢" },
    { id: 2, name: "الاغتراب المهني", en: "Work Alienation", icon: "🎭" },
    { id: 3, name: "التغرب والعزلة", en: "Social Isolation", icon: "🏚️" },
    { id: 4, name: "الاحتراق المهني", en: "Burnout", icon: "🔥" },
    { id: 5, name: "الإرهاق التراكمي", en: "Professional Fatigue", icon: "🔋" },
    { id: 6, name: "الاكتئاب المهني", en: "Occupational Depression", icon: "📉" },
    { id: 7, name: "السلوكيات الضارة", en: "Harmful Behaviors", icon: "🚨" },
  ];

  if (isSOS) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center py-6">
        <div className={cn("w-full max-w-[390px] h-[844px] rounded-[3rem] overflow-hidden relative shadow-2xl ring-8 ring-border flex flex-col items-center justify-center p-6 text-center transition-colors duration-1000", sosStep > 0 ? "bg-background" : "bg-[#1A1A2E]")}>
          
          {sosStep === 0 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 w-full">
              <div className="w-24 h-24 bg-destructive/20 text-destructive rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldAlert className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">ماذا حصل معك؟</h2>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <button onClick={() => setSosStep(1)} className="flex flex-col items-center justify-center p-6 bg-card border border-border/50 rounded-2xl hover:bg-secondary/10 hover:border-secondary transition-all">
                  <span className="text-4xl mb-3">🔧</span>
                  <span className="font-bold text-foreground text-sm">حادث عمل</span>
                </button>
                <button onClick={() => setSosStep(1)} className="flex flex-col items-center justify-center p-6 bg-card border border-border/50 rounded-2xl hover:bg-secondary/10 hover:border-secondary transition-all">
                  <span className="text-4xl mb-3">👁️</span>
                  <span className="font-bold text-foreground text-sm">شيء شفته</span>
                </button>
              </div>
              <button onClick={() => setIsSOS(false)} className="text-muted-foreground mt-8 underline">إلغاء</button>
            </div>
          )}

          {sosStep === 1 && (
            <div className="space-y-12 animate-in fade-in zoom-in-95 w-full">
              <h2 className="text-2xl font-bold text-foreground">خذ نفس عميق معي</h2>
              <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 bg-[#2ECC71]/20 rounded-full animate-ping" style={{ animationDuration: '6s' }}></div>
                <div className="w-32 h-32 bg-[#2ECC71]/40 rounded-full flex items-center justify-center z-10 backdrop-blur-sm">
                  <span className="text-white font-bold">شهيق ... زفير</span>
                </div>
              </div>
              <p className="text-muted-foreground">شهيق 4 ثواني... زفير 6 ثواني</p>
              <button 
                onClick={() => setSosStep(2)}
                className="w-full py-4 bg-[#2ECC71] text-white rounded-xl font-bold hover:bg-[#2ECC71]/90"
              >
                كمّلت
              </button>
            </div>
          )}

          {sosStep === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 w-full">
              <h2 className="text-2xl font-bold text-foreground">هل أنت بأمان الحين؟</h2>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <button onClick={() => setSosStep(3)} className="py-4 bg-[#2ECC71]/20 text-[#2ECC71] border border-[#2ECC71]/50 rounded-xl font-bold">نعم</button>
                <button onClick={() => setSosStep(3)} className="py-4 bg-[#FF4757]/20 text-[#FF4757] border border-[#FF4757]/50 rounded-xl font-bold">لا</button>
              </div>
            </div>
          )}

          {sosStep === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 w-full">
              <div className="w-20 h-20 bg-[#2ECC71]/20 text-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-[#2ECC71]">Buddy Officer تنبّه</h2>
              <p className="text-muted-foreground leading-relaxed">
                قريباً يجي لك. تذكر أن ما حصل ليس خطأك.
              </p>
              <button 
                onClick={() => setIsSOS(false)}
                className="w-full mt-8 py-4 bg-[#2ECC71] text-white rounded-xl font-bold"
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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-6">
      
      {/* Mobile Frame Simulator (390px x 844px) */}
      <div className="w-full max-w-[390px] h-[844px] bg-[#111827] rounded-[3rem] overflow-hidden relative shadow-2xl ring-8 ring-border flex flex-col">
        
        {/* Header - Offline Mode Active */}
        <div className="h-14 bg-black/50 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 shrink-0 z-10 pt-4">
          <div className="flex items-center gap-2 text-xs font-bold text-white/80">
            <WifiOff className="w-4 h-4 text-amber-400" />
            <span>Offline Mode Active</span>
          </div>
          <div className="text-xs text-white/50 font-roboto">100%</div>
        </div>

        {/* Column 1: Psychological Risks (30%) */}
        <div className="flex-[3] bg-[#111827] p-4 flex flex-col overflow-hidden relative z-0">
          <h2 className="text-white font-bold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            قائمة المخاطر النفسية السبعة
          </h2>
          <div className="flex-1 overflow-y-auto pr-2 space-y-2 pb-4 scrollbar-hide">
            {RISKS.map(risk => (
              <button 
                key={risk.id}
                onClick={() => setActiveTab(risk.id)}
                className={cn(
                  "w-full text-right p-3 rounded-xl border transition-all flex items-center justify-between",
                  activeTab === risk.id 
                    ? "bg-white/10 border-white/20 shadow-inner" 
                    : "bg-transparent border-transparent hover:bg-white/5"
                )}
              >
                <div className="flex flex-col">
                  <span className="text-white text-sm font-bold">{risk.id}. {risk.name}</span>
                  <span className="text-white/50 text-[10px] font-roboto">{risk.en}</span>
                </div>
                <span className="text-xl">{risk.icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Column 2: Awareness (23%) */}
        <div className={cn(
          "flex-[2.3] flex flex-col p-4 transition-colors",
          activeTab ? "bg-[#2ECC71]" : "bg-[#2ECC71]/80"
        )}>
          <h2 className="text-black font-bold mb-2 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            الاستفسار والتعليم
          </h2>
          {activeTab ? (
            <div className="bg-black/10 rounded-xl p-3 flex-1">
              <div className="text-black text-sm font-bold border-b border-black/10 pb-2 mb-2">
                اخترت خطراً من القائمة اليمينية
              </div>
              <p className="text-black/80 text-xs leading-relaxed">
                هذه القائمة النقطية تشرح المظهر السلوكي للخطر وكيفية التغلب عليه عبر التمكين المهني في بيئة التناوب 28/28.
              </p>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-center">
              <p className="text-black/60 text-sm font-medium">&quot;اختر خطراً من القائمة العلوية أولاً&quot;</p>
            </div>
          )}
        </div>

        {/* Column 3: Anonymous Reporting (23%) */}
        <div className="flex-[2.3] bg-[#FFD32A] p-4 flex flex-col justify-center">
          <h2 className="text-black font-bold mb-3 flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            التبليغ المجهول السري
          </h2>
          <p className="text-black/70 text-xs mb-4">
            نظام تشفير مجهول 100%: لا يتم تسجيل الهوية، الاسم، أو الموقع الفردي.
          </p>
          <button className="w-full bg-black text-white rounded-xl py-3 text-sm font-bold shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-[#FFD32A]" />
            نموذج بلاغات مجهول
          </button>
        </div>

        {/* Column 4: Urgent Intervention (24%) */}
        <div className="flex-[2.4] bg-[#FF4757] p-4 flex flex-col justify-center text-white">
          <h2 className="font-bold mb-2 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5" />
            التدخل النفسي العاجل
          </h2>
          <p className="text-white/80 text-xs leading-relaxed mb-4">
            يعمل بشكل مستقل. مخصص للأزمات الحادة. إذا كنت تعيش أزمة نفسية الآن تهدد سلامتك، لا تتردد.
          </p>
          <button 
            onClick={() => setIsSOS(true)}
            className="w-full bg-white text-[#FF4757] rounded-xl py-3 text-sm font-bold shadow-xl active:scale-95 transition-transform"
          >
            مستقل للطوارئ الفورية
          </button>
        </div>

        {/* Footer - Family Bridge */}
        <button className="h-16 bg-black text-white flex items-center justify-center gap-3 shrink-0 z-10 w-full hover:bg-zinc-900 transition-colors pb-safe">
          <MessageSquare className="w-5 h-5 text-[#FFD32A]" />
          <span className="text-sm font-bold">جسر العائلة (Family Bridge) SMS</span>
        </button>

      </div>
    </div>
  );
}
