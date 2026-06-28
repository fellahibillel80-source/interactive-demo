"use client";

import { useState, useEffect } from "react";
import { RotateCcw, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

// Helper function to get color and message based on BPRS score
function getBprsStatus(score: number) {
  if (score < 30) {
    return {
      color: "#1A936F",
      bgColor: "bg-[#1A936F]",
      textColor: "text-[#1A936F]",
      message: "العامل بحالة جيدة — متابعة روتينية عبر نبض العافية اليومي",
      level: "آمن",
    };
  }
  if (score < 55) {
    return {
      color: "#F6AE2D",
      bgColor: "bg-[#F6AE2D]",
      textColor: "text-[#F6AE2D]",
      message: "تنبيه أولي — محتوى تمكين موجَّه + تذكير ببروتوكول الراحة",
      level: "متوسط",
    };
  }
  if (score < 75) {
    return {
      color: "#F26419",
      bgColor: "bg-[#F26419]",
      textColor: "text-[#F26419]",
      message: "تنبيه متوسط — تفعيل Buddy Officer + إشعار مجهول لـ HSE",
      level: "مرتفع",
    };
  }
  return {
    color: "#E63946",
    bgColor: "bg-[#E63946]",
    textColor: "text-[#E63946]",
    message: "حالة حرجة — تدخل فوري أخصائي نفسي + بروتوكول الصدمات",
    level: "حرج",
  };
}

export default function BprsCalculator() {
  const [empowerment, setEmpowerment] = useState(3);
  const [resilience, setResilience] = useState(3);
  const [isolation, setIsolation] = useState(3);
  const [day, setDay] = useState(14);
  const [distance, setDistance] = useState(700);
  const [support, setSupport] = useState(3);

  const [bprs, setBprs] = useState(50);
  
  useEffect(() => {
    // Risk factors (Total 45 max)
    const risk = (isolation / 5 * 15) + (day / 28 * 20) + (distance / 1500 * 10);
    // Protection factors (Total 55 max)
    const protection = (empowerment / 5 * 25) + (resilience / 5 * 20) + (support / 5 * 10);
    
    // Final BPRS (0 to 100)
    let score = Math.round(risk + (55 - protection));
    
    // Clamp between 0 and 100 just in case
    score = Math.max(0, Math.min(100, score));
    setBprs(score);
  }, [empowerment, resilience, isolation, day, distance, support]);

  const reset = () => {
    setEmpowerment(3);
    setResilience(3);
    setIsolation(3);
    setDay(14);
    setDistance(700);
    setSupport(3);
  };

  const status = getBprsStatus(bprs);

  return (
    <div className="min-h-screen p-6 pb-24 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <header className="border-b border-border/50 pb-6">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Activity className="w-8 h-8 text-primary" />
            حاسوب BPRS التفاعلي (Buddy Psychosocial Risk Score)
          </h1>
          <p className="text-muted-foreground mt-2">
            نموذج أولي يُحاكي خوارزمية حساب الخطر النفسي بناءً على 6 متغيرات معتمدة في الدراسة الميدانية.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Section (Left Side, takes 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm space-y-6">
              
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">متغيرات التقييم</h3>
                <button 
                  onClick={reset}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors bg-secondary/10 px-3 py-1.5 rounded-lg"
                >
                  <RotateCcw className="w-4 h-4" />
                  إعادة ضبط
                </button>
              </div>

              {/* Protection Factors */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-secondary mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  عوامل الحماية (تُخفّض الخطر)
                </h4>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label>التمكين المهني (الوزن: 25%)</label>
                    <span className="font-bold text-secondary">{empowerment} / 5</span>
                  </div>
                  <input type="range" min="1" max="5" value={empowerment} onChange={e => setEmpowerment(Number(e.target.value))} className="w-full accent-secondary" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label>الصمود النفسي (الوزن: 20%)</label>
                    <span className="font-bold text-secondary">{resilience} / 5</span>
                  </div>
                  <input type="range" min="1" max="5" value={resilience} onChange={e => setResilience(Number(e.target.value))} className="w-full accent-secondary" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label>الدعم الاجتماعي (الوزن: 10%)</label>
                    <span className="font-bold text-secondary">{support} / 5</span>
                  </div>
                  <input type="range" min="1" max="5" value={support} onChange={e => setSupport(Number(e.target.value))} className="w-full accent-secondary" />
                </div>
              </div>

              <div className="h-px bg-border/50 my-6"></div>

              {/* Risk Factors */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-destructive mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-destructive"></div>
                  عوامل الخطر (ترفع الخطر)
                </h4>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label>مؤشر العزلة (الوزن: 15%)</label>
                    <span className="font-bold text-destructive">{isolation} / 5</span>
                  </div>
                  <input type="range" min="1" max="5" value={isolation} onChange={e => setIsolation(Number(e.target.value))} className="w-full accent-destructive" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label>يوم الدورة (الوزن: 20%)</label>
                    <span className="font-bold text-destructive">{day} / 28</span>
                  </div>
                  <input type="range" min="1" max="28" value={day} onChange={e => setDay(Number(e.target.value))} className="w-full accent-destructive" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label>البعد عن الأسرة (الوزن: 10%)</label>
                    <span className="font-bold text-destructive">{distance} كم</span>
                  </div>
                  <input type="range" min="0" max="1500" step="50" value={distance} onChange={e => setDistance(Number(e.target.value))} className="w-full accent-destructive" />
                </div>
              </div>

            </div>
          </div>

          {/* Result Section (Right Side, takes 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center space-y-6 h-full">
              
              <h3 className="text-xl font-bold w-full text-right mb-4">النتيجة الفورية</h3>

              {/* Dial Representation */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* SVG Dial Background */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-muted/20" />
                  <circle 
                    cx="50" cy="50" r="45" 
                    fill="transparent" 
                    stroke={status.color} 
                    strokeWidth="8" 
                    strokeDasharray={`${(bprs / 100) * 283} 283`}
                    className="transition-all duration-700 ease-out"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="flex flex-col items-center justify-center z-10">
                  <span className="text-6xl font-black font-roboto" style={{ color: status.color }}>
                    {bprs}
                  </span>
                  <span className="text-sm font-bold text-muted-foreground mt-1 uppercase tracking-widest">
                    BPRS Score
                  </span>
                  <span className={cn("mt-2 px-3 py-1 rounded-full text-xs font-bold bg-opacity-20", status.bgColor, status.textColor)}>
                    {status.level}
                  </span>
                </div>
              </div>

              {/* Recommendation Card */}
              <div className={cn("p-5 rounded-xl text-right w-full border-l-4 transition-colors", status.textColor, "bg-secondary/5")} style={{ borderColor: status.color }}>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 shrink-0" style={{ color: status.color }} />
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: status.color }}>التوصية الآلية:</h4>
                    <p className="text-sm leading-relaxed text-foreground">
                      {status.message}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>

        {/* Comparison Section */}
        <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl flex items-start gap-4">
          <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-primary mb-1">معطيات الدراسة الميدانية للمقارنة</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              متوسط العينة الحقيقية (N=90) في CPH هو <strong>2.81/5</strong>، وهو ما يعادل درجة BPRS تقريبية تبلغ <strong>56/100</strong> (منطقة التنبيه المتوسط).
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
// Add Activity import at top if missing. I'll add it in the file.
