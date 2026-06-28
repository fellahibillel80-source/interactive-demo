"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, CheckSquare, Bell, Settings, LogOut, Activity, Users, Database } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  role: "worker" | "specialist" | "admin";
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();

  const workerLinks = [
    { name: "الرئيسية", href: "/worker", icon: LayoutDashboard },
    { name: "المهام", href: "#", icon: CheckSquare },
    { name: "الإشعارات", href: "#", icon: Bell },
  ];

  const specialistLinks = [
    { name: "التحليلات", href: "/specialist", icon: Activity },
    { name: "المستشعرات", href: "#", icon: LayoutDashboard },
    { name: "تنبؤات", href: "#", icon: Bell },
  ];

  const adminLinks = [
    { name: "لوحة الإدارة", href: "/admin", icon: Settings },
    { name: "المستخدمين", href: "#", icon: Users },
    { name: "النظام", href: "#", icon: Database },
  ];

  const links = role === "worker" ? workerLinks : role === "specialist" ? specialistLinks : adminLinks;

  const roleTitle = role === "worker" ? "لوحة العامل الميداني" : role === "specialist" ? "لوحة الأخصائي" : "لوحة الإدارة (Admin)";

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 border-l border-border bg-card/50 backdrop-blur-md flex-col h-screen fixed right-0 top-0 z-40">
        <div className="p-6">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            DJAD Buddy
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            {roleTitle}
          </p>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          {role !== "admin" && (
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <Settings className="w-5 h-5" />
              الإعدادات
            </Link>
          )}
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium text-destructive hover:bg-destructive/10"
          >
            <LogOut className="w-5 h-5" />
            تسجيل الخروج
          </Link>
        </div>
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
                  "flex flex-col items-center justify-center gap-1 p-2 min-w-[4rem] transition-colors rounded-xl text-xs font-medium",
                  isActive 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <Icon className={cn("w-6 h-6", isActive && "animate-pulse")} />
                <span className="truncate">{link.name}</span>
              </Link>
            );
          })}
          
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-1 p-2 min-w-[4rem] transition-colors rounded-xl text-xs font-medium text-destructive hover:bg-destructive/10"
          >
            <LogOut className="w-6 h-6" />
            <span>خروج</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
