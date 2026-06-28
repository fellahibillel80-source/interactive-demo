"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calculator, Activity, ShieldAlert, Bot, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  // Hide navigation on the login page since it's meant to look like a full-screen mobile app
  if (pathname === '/login') return null;

  const links = [
    { name: "الملخص التنفيذي", href: "/", icon: Home },
    { name: "محاكي الموبايل", href: "/login", icon: Smartphone },
    { name: "حاسوب BPRS", href: "/bprs", icon: Calculator },
    { name: "واجهة الميدان", href: "/worker", icon: Activity },
    { name: "لوحة HSE", href: "/hse", icon: ShieldAlert },
    { name: "مساعد اللجنة", href: "/assistant", icon: Bot },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 border-l border-border bg-card/80 backdrop-blur-md flex-col h-screen fixed right-0 top-0 z-40">
        <div className="p-6 border-b border-border/50">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Buddy System
          </h2>
          <p className="text-xs text-muted-foreground mt-1 font-inter">
            Digital Mental Health
          </p>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-6">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl transition-all text-sm font-medium",
                  isActive 
                    ? "bg-secondary/20 text-secondary border border-secondary/30 shadow-sm" 
                    : "text-muted-foreground hover:bg-secondary/10 hover:text-foreground"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive && "text-secondary")} />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Bottom Tab Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-border pb-safe">
        <div className="flex items-center justify-around p-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 p-2 min-w-[4rem] transition-colors rounded-xl text-[10px] font-medium",
                  isActive 
                    ? "text-secondary bg-secondary/10" 
                    : "text-muted-foreground hover:bg-secondary/5"
                )}
              >
                <Icon className={cn("w-6 h-6 mb-1", isActive && "animate-pulse")} />
                <span className="truncate">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
