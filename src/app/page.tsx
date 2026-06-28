"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HardHat, Activity, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { roles } from "@/lib/mockData";

const icons: Record<string, React.ReactNode> = {
  worker: <HardHat className="w-10 h-10 text-blue-500" />,
  specialist: <Activity className="w-10 h-10 text-emerald-500" />,
  admin: <ShieldCheck className="w-10 h-10 text-purple-500" />,
};

const paths: Record<string, string> = {
  worker: "/worker",
  specialist: "/specialist",
  admin: "/admin", // We may not build admin in this quick demo, but it's there
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/10 blur-[100px]" />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          نظام إدارة العمليات البترولية
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          اختر دورك للدخول إلى لوحة التحكم المخصصة لك في النظام. يرجى اختيار الشخصية المناسبة للمحاكاة.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10 w-full max-w-5xl">
        {roles.map((role, index) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={paths[role.id] || "/"}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-pointer group">
                <CardHeader className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-secondary group-hover:scale-110 transition-transform duration-300">
                    {icons[role.id]}
                  </div>
                  <CardTitle className="text-2xl">{role.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  {role.description}
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
