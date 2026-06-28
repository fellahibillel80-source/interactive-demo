"use client";

import { useState } from "react";
import { Bot, User, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const KNOWLEDGE_BASE: Record<string, string> = {
  "كيف يعمل مؤشر BPRS؟": "يعمل مؤشر BPRS (Buddy Psychosocial Risk Score) كمعادلة خوارزمية تدمج 6 متغيرات: التمكين المهني، الصمود النفسي، مؤشرات العزلة، مدة الدورة (يوم 1-28)، البعد الجغرافي، والدعم الاجتماعي. يتم حساب الخطر النفسي ليعطي نتيجة من 0 إلى 100 وتصنف في 4 مستويات إنذار مبكر (PEWS).",
  "ما العائد الاقتصادي لسوناطراك؟": "العائد الاقتصادي يرتكز على خفض تكلفة الحوادث الصناعية والإجازات المرضية وضعف الإنتاجية المرتبط بالضغط النفسي. وفقاً للنموذج المالي للمشروع (رأس مال أولي 2,700,000 دج)، فإن هامش السنة الثالثة يبلغ +198% مع تحقيق نقطة التعادل في النصف الثاني من السنة الثالثة، مما يوفر لسوناطراك ملايين الدينارات سنوياً.",
  "كيف تُحمى خصوصية العمال؟": "حماية الخصوصية هي أولوية قصوى ومتوافقة مع القانون الجزائري 18-07. يتم تشفير جميع البيانات محلياً عبر AES-256، والتطبيق يتبنى نموذج Offline-First. لوحة مسؤولي HSE لا تعرض أي أسماء بل تستخدم أرقاماً عشوائية للعمال، ولا ترفع البيانات لأي سحابة أجنبية.",
  "ما نتائج الدراسة الميدانية؟": "تمت الدراسة على عينة من 90 عاملاً في CPH التابع لسوناطراك بنظام التناوب 28/28. أظهرت النتائج أن 44% يسكنون على بعد أكثر من 700كم، بمتوسط خطر نفسي BPRS بلغ 2.81/5 (متوسط إلى مرتفع). بينما بلغ متوسط التمكين المهني 3.41/5، مع معامل ثبات إحصائي Cronbach Alpha يبلغ 0.798.",
  "ما خطة التوسع الجغرافي؟": "المشروع يستهدف في مرحلته الأولى قواعد سوناطراك بـ CPH، ثم يتوسع ليشمل أكثر من 30,000 عامل بترولي في المنشآت الحساسة بالجنوب الجزائري، مع إمكانية تصدير المنظومة إلى أسواق الطاقة في شمال إفريقيا والشرق الأوسط نظراً للتشابه في بيئة العمل المعزولة.",
  "ما مصادر تمويل المشروع؟": "المشروع يُصنف ضمن المؤسسات الناشئة (Startup)، يعتمد تمويله الأولي المقدر بـ 2,700,000 دج على دعم الدولة عبر صندوق تمويل المؤسسات الناشئة، بالإضافة إلى إبرام عقود B2B مع شركات المحروقات الوطنية (مثل سوناطراك) كعميل رئيسي يدفع مقابل الاشتراك في المنظومة."
};

const QUESTIONS = Object.keys(KNOWLEDGE_BASE);

export default function Assistant() {
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string, time: string}[]>([
    {
      role: 'bot',
      text: 'أهلاً بك أعضاء لجنة التحكيم المحترمين وممثلي سوناطراك. أنا المساعد الذكي لمشروع Buddy System. تفضلوا بطرح أي سؤال حول الدراسة الميدانية، الجدوى الاقتصادية، أو الجوانب التقنية للمشروع.',
      time: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleAsk = (question: string) => {
    const time = new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { role: 'user', text: question, time }]);
    
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const answer = KNOWLEDGE_BASE[question] || "عذراً، هذا السؤال خارج نطاق قاعدة البيانات الحالية للمشروع. يرجى توجيه السؤال مباشرة لصاحب المشروع (جاد الدين عمر بودبزة).";
      setMessages(prev => [...prev, { role: 'bot', text: answer, time: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' }) }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="min-h-screen p-6 pb-24 md:p-12 flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col space-y-6">
        
        <header className="border-b border-border/50 pb-6 text-center space-y-2">
          <div className="w-16 h-16 mx-auto bg-primary/20 text-primary flex items-center justify-center rounded-full mb-4">
            <Bot className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold">المساعد الذكي للجنة التحكيم</h1>
          <p className="text-muted-foreground">مدعوم ببيانات الأطروحة (ماستر 2 - علم النفس العمل)</p>
        </header>

        {/* Chat Area */}
        <div className="flex-1 bg-card border border-border/50 rounded-2xl shadow-sm p-4 overflow-y-auto space-y-6 min-h-[400px]">
          {messages.map((msg, idx) => (
            <div key={idx} className={cn("flex gap-4 max-w-[85%]", msg.role === 'user' ? "mr-auto flex-row-reverse" : "")}>
              <div className={cn("w-10 h-10 shrink-0 rounded-full flex items-center justify-center", msg.role === 'user' ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground")}>
                {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>
              <div className={cn("space-y-1", msg.role === 'user' ? "text-right" : "text-right")}>
                <div className={cn("p-4 rounded-2xl", msg.role === 'user' ? "bg-secondary/20 border border-secondary/30" : "bg-primary/5 border border-primary/20")}>
                  <p className="leading-relaxed">{msg.text}</p>
                </div>
                <span className="text-[10px] text-muted-foreground px-2">{msg.time}</span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-4 max-w-[85%]">
              <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
                <Bot className="w-5 h-5" />
              </div>
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Questions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {QUESTIONS.map(q => (
            <button 
              key={q} 
              onClick={() => handleAsk(q)}
              disabled={isTyping}
              className="text-right p-3 text-sm bg-card border border-border/50 rounded-xl hover:bg-secondary/10 hover:border-secondary transition-colors truncate"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Area (Visual only for Demo) */}
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && input.trim()) handleAsk(input.trim());
            }}
            placeholder="اسأل المساعد الذكي..." 
            className="w-full bg-card border border-border/50 rounded-2xl px-6 py-4 pr-14 outline-none focus:border-secondary transition-colors"
          />
          <button 
            onClick={() => { if (input.trim()) handleAsk(input.trim()); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center hover:bg-secondary/90"
          >
            <Send className="w-4 h-4 mr-1" />
          </button>
        </div>

      </div>
    </div>
  );
}
