"use client";

import { Users, ShieldCheck, Download, LineChart, Clock, TrendingDown, Smartphone, AlertOctagon } from "lucide-react";

export default function HSE() {
  return (
    <div className="min-h-screen p-6 pb-24 md:p-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <header className="bg-primary border border-primary/20 rounded-3xl p-6 md:p-8 text-primary-foreground flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-3 mb-2">
              <ShieldCheck className="w-8 h-8 text-secondary" />
              لوحة القيادة ومؤشرات الأداء الرقمية (KPIs)
            </h1>
            <p className="text-primary-foreground/80 font-inter text-sm">ISO 45001 & ISO 45003 Integration - CPH Sonatrach</p>
          </div>
          <button className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-xl font-bold hover:bg-secondary/90 transition-all text-sm shadow-lg hover:shadow-secondary/20 active:scale-95">
            <Download className="w-4 h-4" />
            استخراج تقرير الامتثال الاستراتيجي
          </button>
        </header>

        {/* Section 1: The 5 Digital KPIs from Compliance Doc */}
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          
          <div className="bg-card border border-border/50 p-5 rounded-2xl shadow-sm flex flex-col items-center text-center space-y-3 relative overflow-hidden group hover:border-secondary transition-colors">
            <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
              <LineChart className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black font-roboto">12.4%</div>
            <div className="text-xs font-bold text-muted-foreground">معدل البلاغات (Reporting Rate)</div>
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="bg-card border border-border/50 p-5 rounded-2xl shadow-sm flex flex-col items-center text-center space-y-3 relative overflow-hidden group hover:border-amber-500 transition-colors">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center">
              <AlertOctagon className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black font-roboto text-amber-500">2.1 <span className="text-lg">Drift</span></div>
            <div className="text-xs font-bold text-muted-foreground">معدل الإرهاق الجماعي (Predictive AI)</div>
            <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="bg-card border border-border/50 p-5 rounded-2xl shadow-sm flex flex-col items-center text-center space-y-3 relative overflow-hidden group hover:border-destructive transition-colors">
            <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black font-roboto text-destructive">4.2 <span className="text-lg">د</span></div>
            <div className="text-xs font-bold text-muted-foreground">زمن الاستجابة للحالات الحرجة (CRT)</div>
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="bg-card border border-border/50 p-5 rounded-2xl shadow-sm flex flex-col items-center text-center space-y-3 relative overflow-hidden group hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black font-roboto text-primary">89%</div>
            <div className="text-xs font-bold text-muted-foreground">نسبة استخدام التطبيق (Adoption Rate)</div>
            <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="bg-card border border-border/50 p-5 rounded-2xl shadow-sm flex flex-col items-center text-center space-y-3 relative overflow-hidden group hover:border-emerald-500 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center">
              <TrendingDown className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black font-roboto text-emerald-500">-18%</div>
            <div className="text-xs font-bold text-muted-foreground">معدل انخفاض الغياب (ROI)</div>
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Section 2: Integration Matrix */}
          <section className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold border-b border-border/50 pb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              مصفوفة التكامل بين ISO 45001 و ISO 45003
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1A936F]/5 border border-[#1A936F]/20 p-6 rounded-2xl space-y-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-[#1A936F] font-inter">ISO 45001 (البند 8.1.2)</span>
                  <span className="text-xs bg-[#1A936F]/20 text-[#1A936F] px-2 py-1 rounded-md font-bold">استباقي</span>
                </div>
                <h3 className="font-bold text-sm">تحديد مصادر الخطر (Hazard Identification)</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  تمتثل المنظومة عبر القائمة المرئية للمخاطر النفسية السبعة، مما يلزم المؤسسة برصد استباقي قبل تحول العارض الصحي إلى حادث مهني.
                </p>
              </div>

              <div className="bg-[#FFD32A]/5 border border-[#FFD32A]/20 p-6 rounded-2xl space-y-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-[#FFD32A] font-inter">ISO 45003 (البند 5.4)</span>
                  <span className="text-xs bg-[#FFD32A]/20 text-[#FFD32A] px-2 py-1 rounded-md font-bold">سري</span>
                </div>
                <h3 className="font-bold text-sm">التبليغ المجهول (Non-retaliation)</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  تشفير AES-256 يضمن حماية تامة للهوية، مما يلغي عقبة الخوف التام (Retaliation) ويضمن تدفق البيانات الواقعية من عمق الورشات.
                </p>
              </div>

              <div className="bg-[#FF4757]/5 border border-[#FF4757]/20 p-6 rounded-2xl space-y-3 md:col-span-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-[#FF4757] font-inter">ISO 45001 (البند 8.1.5)</span>
                  <span className="text-xs bg-[#FF4757]/20 text-[#FF4757] px-2 py-1 rounded-md font-bold">طارئ</span>
                </div>
                <h3 className="font-bold text-sm">التدخل العاجل (Emergency Preparedness)</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  توفر المنظومة قناة اتصال فورية وسرية مع الأخصائي النفسي الميداني، لتحقيق التدخل الاستباقي وحماية المنشأة النفطية من الحوادث الناتجة عن الأزمات الحادة.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Hierarchy & Governance */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold border-b border-border/50 pb-4">
              حوكمة البيانات وسرية القرار
            </h2>
            
            <div className="bg-card border border-border/50 p-6 rounded-2xl space-y-6">
              
              <div className="space-y-2">
                <h3 className="font-bold text-destructive text-sm flex items-center gap-2">
                  <AlertOctagon className="w-4 h-4" />
                  حظر الدمج السلطوي
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  يُمنع برمجياً وهيكلياً دمج قاعدة البيانات النفسية المشفرة مع ملفات الترقية أو التقييم الإداري.
                </p>
              </div>

              <div className="w-full h-px bg-border/50"></div>

              <div className="space-y-2">
                <h3 className="font-bold text-secondary text-sm flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  استقلالية القرار النفسي
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  البيانات الفردية حكر على الأخصائي النفسي الميداني. الإدارة العليا تمتلك فقط صلاحية الولوج للتقارير المجمعة (Aggregated Data).
                </p>
              </div>

              <div className="bg-secondary/10 p-4 rounded-xl mt-4 border border-secondary/20">
                <p className="text-[11px] text-secondary-foreground font-medium leading-relaxed italic text-center">
                  &quot;القانون 18-07 المتعلق بحماية الأشخاص الطبيعيين في مجال معالجة المعطيات ذات الطابع الشخصي، مُطبق بصرامة.&quot;
                </p>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
