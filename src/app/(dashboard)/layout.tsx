"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Determine role based on URL for the demo purposes
  const role = pathname?.includes("specialist") 
    ? "specialist" 
    : pathname?.includes("admin") 
      ? "admin" 
      : "worker";

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar role={role} />
      {/* On desktop mr-64 (margin-right for sidebar), on mobile pb-20 (padding bottom for tab bar) */}
      <main className="flex-1 md:mr-64 pb-20 md:pb-8 p-4 md:p-8 transition-all duration-300 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-[-20%] right-[-10%] w-[100%] md:w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[100%] md:w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
