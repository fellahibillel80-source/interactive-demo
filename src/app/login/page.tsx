"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HeartPulse, Lock, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginScreen() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);
  const [id, setId] = useState("1547-2026-SNT");
  const [pin, setPin] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // Splash Screen Timer (3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const isValid = id.trim().length > 0 && pin.length === 4;

  const handleLogin = () => {
    if (!isValid) return;
    setIsAuthenticating(true);
    setTimeout(() => {
      router.push("/worker");
    }, 1500);
  };

  // 1. Splash Screen UI
  if (showSplash) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0A0E1A] flex flex-col items-center justify-center text-white">
        <div className="animate-in fade-in zoom-in duration-1000 flex flex-col items-center justify-center">
          <HeartPulse className="w-24 h-24 text-secondary mb-6 animate-pulse" style={{ animationDuration: '2s' }} />
          <h1 className="text-4xl font-bold tracking-widest mb-2 font-inter">BUDDY SYSTEM</h1>
          <p className="text-secondary/80 font-kufi text-lg text-center mt-4">
            رفيقك النفسي في الميدان <br/> 
            <span className="text-sm opacity-70">مش لوحدك في الحقل</span>
          </p>
        </div>
        <div className="absolute bottom-12 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-secondary/50 animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="w-2 h-2 rounded-full bg-secondary/50 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 rounded-full bg-secondary/50 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    );
  }

  // 2. Login Screen UI
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>

      <div className="w-full max-w-sm z-10 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-20 h-20 bg-card border border-border/50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <ShieldCheck className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">تسجيل الدخول الآمن</h1>
          <p className="text-sm text-muted-foreground">البيانات مشفرة ومجهولة (Privacy by Design)</p>
        </div>

        {/* Form */}
        <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-2xl space-y-6">
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block text-right">رقم الموظف (ID)</label>
            <input 
              type="text" 
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full bg-background border border-border/50 rounded-xl px-4 py-3 text-left font-roboto tracking-wider focus:border-primary outline-none transition-colors"
              dir="ltr"
              placeholder="مثال: 1547-2026-SNT"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block text-right">الرمز السري (PIN)</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="password" 
                maxLength={4}
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, ''))}
                className="w-full bg-background border border-border/50 rounded-xl pl-12 pr-4 py-3 text-center font-roboto text-2xl tracking-[1em] focus:border-secondary outline-none transition-colors"
                dir="ltr"
                placeholder="••••"
              />
            </div>
            <p className="text-[10px] text-secondary text-center mt-2 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              تشفير AES-256 نشط محلياً
            </p>
          </div>

          <button 
            onClick={handleLogin}
            disabled={!isValid || isAuthenticating}
            className={cn(
              "w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg",
              isValid 
                ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/20" 
                : "bg-muted text-muted-foreground cursor-not-allowed",
              isAuthenticating && "animate-pulse"
            )}
          >
            {isAuthenticating ? "جاري الدخول الآمن والتشفير..." : "دخول آمن"}
          </button>
        </div>

      </div>
    </div>
  );
}
