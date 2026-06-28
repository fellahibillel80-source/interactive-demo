"use client";

import { motion } from "framer-motion";
import { Users, Settings, Database, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const users = [
  { id: 1, name: "أحمد محمد", role: "عامل ميداني", status: "نشط", lastLogin: "منذ ساعتين" },
  { id: 2, name: "م. خالد سعيد", role: "أخصائي / مهندس", status: "نشط", lastLogin: "الآن" },
  { id: 3, name: "ياسر علي", role: "عامل ميداني", status: "غير نشط", lastLogin: "منذ 3 أيام" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">لوحة الإدارة (Admin)</h1>
        <p className="text-muted-foreground">إدارة صلاحيات المستخدمين وإعدادات النظام الأساسية.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="bg-card/60 backdrop-blur border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">المستخدمين النشطين</CardTitle>
              <Users className="w-4 h-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="bg-card/60 backdrop-blur border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">حالة الخوادم</CardTitle>
              <Database className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-500">متصل 99.9%</div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="bg-card/60 backdrop-blur border-emerald-500/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">التراخيص الأمنية</CardTitle>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">مُفعلة</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>إدارة المستخدمين</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border/50 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.role} • آخر دخول: {user.lastLogin}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={user.status === "نشط" ? "success" : "secondary"}>
                      {user.status}
                    </Badge>
                    <Button variant="outline" size="sm">تعديل</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <Button className="bg-purple-600 hover:bg-purple-700">إضافة مستخدم جديد</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <Card className="border-border/50 bg-card/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-muted-foreground" />
              إعدادات سريعة
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button variant="outline" className="justify-start h-12">تحديث بيانات الحساسات</Button>
            <Button variant="outline" className="justify-start h-12 text-destructive hover:text-destructive">إعادة تشغيل النظام</Button>
            <Button variant="outline" className="justify-start h-12">تصدير التقارير (PDF)</Button>
            <Button variant="outline" className="justify-start h-12">صلاحيات الوصول للزوار</Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
