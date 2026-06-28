"use client";

import { Users, AlertTriangle, ShieldCheck, Activity, Download } from "lucide-react";

export default function HSE() {
  const alerts = [
    { id: "#A-047", day: 19, level: "تنبيه متوسط", status: "تم إرسال Buddy Officer — في انتظار التقرير", color: "bg-amber-500", text: "text-amber-500" },
    { id: "#A-023", day: 24, level: "حالة حرجة", status: "تم تفعيل الأخصائي النفسي — قيد المعالجة", color: "bg-destructive", text: "text-destructive" },
  ];

  return (
    <div className="min-h-screen p-6 pb-24 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <header className="bg-primary border border-primary/20 rounded-2xl p-6 md:p-8 text-primary-foreground flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-3 mb-1">
              <ShieldCheck className="w-8 h-8 text-secondary" />
              لوحة القيادة للصحة والسلامة المهنية (HSE Dashboard)
            </h1>
            <p className="text-primary-foreground/80 font-inter text-sm">Centre de Production des Hydrocarbures (CPH) - Sonatrach</p>
          </div>
          <button className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-bold hover:bg-secondary/90 transition-colors text-sm">
            <Download className="w-4 h-4" />
            توليد تقرير ISO 45003
          </button>
        </header>

        {/* Section 1: Summary */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm text-center">
            <Users className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
            <div className="text-3xl font-black font-roboto">90</div>
            <div className="text-xs text-muted-foreground mt-1">إجمالي العمال بالوحدة</div>
          </div>
          <div className="bg-[#1A936F]/10 border border-[#1A936F]/30 p-6 rounded-2xl shadow-sm text-center">
            <div className="text-3xl font-black text-[#1A936F] font-roboto">54</div>
            <div className="text-xs font-bold text-[#1A936F] mt-1">مستوى آمن (0-29)</div>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl shadow-sm text-center">
            <div className="text-3xl font-black text-amber-500 font-roboto">28</div>
            <div className="text-xs font-bold text-amber-500 mt-1">تنبيه أولي (30-54)</div>
          </div>
          <div className="bg-destructive/10 border border-destructive/30 p-6 rounded-2xl shadow-sm text-center">
            <div className="text-3xl font-black text-destructive font-roboto">8</div>
            <div className="text-xs font-bold text-destructive mt-1">يحتاج تدخل (55+)</div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Section 4: Active Alerts */}
          <section className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm space-y-6">
            <h2 className="text-lg font-bold flex items-center gap-2 border-b border-border/50 pb-4">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              تنبيهات PEWS النشطة
            </h2>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="bg-background border border-border/50 p-4 rounded-xl flex gap-4 items-start">
                  <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 animate-pulse ${alert.color}`}></div>
                  <div>
                    <h3 className="font-bold font-roboto text-sm flex items-center gap-2">
                      عامل {alert.id}
                      <span className={`text-[10px] px-2 py-0.5 rounded-full bg-opacity-10 border ${alert.color.replace('bg-', 'bg-')}/20 ${alert.text}`}>
                        {alert.level}
                      </span>
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">يوم {alert.day} من الدورة 28/28</p>
                    <p className="text-sm font-medium mt-2">{alert.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 & 5 */}
          <div className="space-y-8">
            <section className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm space-y-6">
              <h2 className="text-lg font-bold border-b border-border/50 pb-4">
                توزيع الفئات الوظيفية للخطورة
              </h2>
              <div className="space-y-3">
                {[
                  { name: "عمال الإنتاج", p: 35 },
                  { name: "الإداريون", p: 25 },
                  { name: "أعوان الأمن", p: 15 },
                  { name: "أعوان HSE", p: 15 },
                  { name: "فرق الصيانة", p: 10 }
                ].map(item => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div className="w-24 text-xs font-bold text-muted-foreground shrink-0">{item.name}</div>
                    <div className="flex-1 h-3 bg-secondary/20 rounded-full overflow-hidden flex">
                      <div className="h-full bg-secondary" style={{ width: `${item.p}%` }}></div>
                    </div>
                    <div className="w-8 text-xs font-roboto font-bold">{item.p}%</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm space-y-6">
              <h2 className="text-lg font-bold flex items-center gap-2 border-b border-border/50 pb-4">
                <Activity className="w-5 h-5 text-primary" />
                مقاييس الامتثال المعياري
              </h2>
              <ul className="space-y-4">
                <li className="flex justify-between items-center bg-secondary/5 p-3 rounded-lg border border-secondary/20">
                  <span className="font-bold text-sm text-secondary font-inter">ISO 45003:2021</span>
                  <span className="text-xs">نسبة التغطية: <strong className="font-roboto text-sm">94%</strong></span>
                </li>
                <li className="flex justify-between items-center bg-amber-500/5 p-3 rounded-lg border border-amber-500/20">
                  <span className="font-bold text-sm text-amber-500 font-inter">API RP 755</span>
                  <span className="text-xs">حالات الإرهاق المُكتشفة هذا الأسبوع: <strong className="font-roboto text-sm">3</strong></span>
                </li>
              </ul>
            </section>
          </div>
          
        </div>

      </div>
    </div>
  );
}
