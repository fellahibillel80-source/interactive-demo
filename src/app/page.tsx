import { motion } from "framer-motion";
import { Smartphone, FileText, Users, Activity, BarChart3, AlertTriangle } from "lucide-react";

export default function ExecutiveSummary() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12 pb-24">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header Section */}
        <section className="text-center space-y-6 pt-10">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
            Buddy System
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            أول منظومة جزائرية للوقاية النفسية المهنية في بيئات العمل البترولية المعزولة (نظام التناوب 28/28).
          </p>
        </section>

        {/* The 3 Pillars Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border/50 rounded-2xl p-6 text-center space-y-4 shadow-lg hover:border-secondary/50 transition-colors">
            <div className="w-16 h-16 mx-auto bg-primary/20 text-primary flex items-center justify-center rounded-full">
              <Smartphone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">الذراع الرقمي</h3>
            <p className="text-muted-foreground">تطبيق BPRS محلي بدون إنترنت، تقييم يومي وبروتوكولات استجابة.</p>
          </div>
          
          <div className="bg-card border border-border/50 rounded-2xl p-6 text-center space-y-4 shadow-lg hover:border-secondary/50 transition-colors">
            <div className="w-16 h-16 mx-auto bg-secondary/20 text-secondary flex items-center justify-center rounded-full">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">الذراع الورقي</h3>
            <p className="text-muted-foreground">دفاتر وبطاقات ميدانية تتوافق مع بيئات المنشآت الحساسة.</p>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-6 text-center space-y-4 shadow-lg hover:border-secondary/50 transition-colors">
            <div className="w-16 h-16 mx-auto bg-amber-500/20 text-amber-500 flex items-center justify-center rounded-full">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">الذراع البشري</h3>
            <p className="text-muted-foreground">الـ Buddy Officer والأخصائي النفسي ومسؤولي HSE للتدخل المباشر.</p>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-card/50 border border-border/50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-3">
            <BarChart3 className="w-8 h-8 text-secondary" />
            أرقام وحقائق من الميدان (CPH)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="text-5xl font-extrabold text-primary">90</div>
              <div className="text-lg font-medium text-muted-foreground">عاملاً شملتهم الدراسة الميدانية</div>
            </div>
            <div className="text-center space-y-2 border-t md:border-t-0 md:border-r border-border/50 pt-6 md:pt-0">
              <div className="text-5xl font-extrabold text-secondary">44%</div>
              <div className="text-lg font-medium text-muted-foreground">يسكنون على بُعد أكثر من 700كم</div>
            </div>
            <div className="text-center space-y-2 border-t md:border-t-0 md:border-r border-border/50 pt-6 md:pt-0">
              <div className="text-5xl font-extrabold text-destructive flex justify-center items-center gap-2">
                2.81 <span className="text-xl text-muted-foreground">/ 5</span>
              </div>
              <div className="text-lg font-medium text-muted-foreground">متوسط مستوى الخطر النفسي</div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="bg-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 md:w-2/3">
            <h2 className="text-2xl font-bold text-primary-foreground">منهجية معتمدة علمياً</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              المشروع يجمع بين البحث الأكاديمي الصارم (أطروحة ماستر 2 في علم النفس العمل بجامعة قسنطينة 2) وبين قابلية التجسيد الريادي الفعلي لمنظومة سوناطراك وفق معايير ISO 45003.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-secondary flex flex-col items-center justify-center text-center p-4 bg-background">
              <AlertTriangle className="w-8 h-8 text-secondary mb-1" />
              <span className="font-bold text-sm">ISO 45003</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
