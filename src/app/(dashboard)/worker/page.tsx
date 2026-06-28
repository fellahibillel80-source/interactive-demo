"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Clock, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { tasks, alerts } from "@/lib/mockData";
import { useState } from "react";

export default function WorkerDashboard() {
  const [localTasks, setLocalTasks] = useState(tasks);
  
  const completeTask = (id: number) => {
    setLocalTasks(localTasks.map(t => 
      t.id === id ? { ...t, status: 'completed' } : t
    ));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2">مرحباً، أحمد</h1>
          <p className="text-muted-foreground">إليك ملخص مهامك الميدانية لهذا اليوم.</p>
        </div>
        <Button variant="destructive" className="animate-pulse flex gap-2 shadow-[0_0_15px_rgba(239,68,68,0.5)]">
          <ShieldAlert className="w-5 h-5" />
          حالة طوارئ
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="bg-card/60 backdrop-blur border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">المهام المنجزة</CardTitle>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{localTasks.filter(t => t.status === 'completed').length} / {localTasks.length}</div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="bg-card/60 backdrop-blur border-amber-500/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">المهام المعلقة</CardTitle>
              <Clock className="w-4 h-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{localTasks.filter(t => t.status === 'pending').length}</div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="bg-card/60 backdrop-blur border-destructive/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">التحذيرات النشطة</CardTitle>
              <AlertTriangle className="w-4 h-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">{alerts.filter(a => a.type === 'error' || a.type === 'warning').length}</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <Card className="h-full border-border/50">
            <CardHeader>
              <CardTitle>قائمة المهام الميدانية</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {localTasks.map(task => (
                <div key={task.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border/50">
                  <div className="flex flex-col gap-1">
                    <span className={`font-medium ${task.status === 'completed' ? 'line-through text-muted-foreground' : ''}`}>
                      {task.title}
                    </span>
                    <div className="flex gap-2">
                      <Badge variant={task.status === 'completed' ? 'success' : 'secondary'}>
                        {task.status === 'completed' ? 'مكتمل' : 'قيد الانتظار'}
                      </Badge>
                      <Badge variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'warning' : 'outline'}>
                        أولوية: {task.priority === 'high' ? 'عالية' : task.priority === 'medium' ? 'متوسطة' : 'منخفضة'}
                      </Badge>
                    </div>
                  </div>
                  {task.status === 'pending' && (
                    <Button size="sm" onClick={() => completeTask(task.id)}>
                      إكمال
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <Card className="h-full border-border/50">
            <CardHeader>
              <CardTitle>أحدث الإشعارات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {alerts.map(alert => (
                <div key={alert.id} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50">
                  <div className={`p-2 rounded-full ${
                    alert.type === 'error' ? 'bg-destructive/20 text-destructive' :
                    alert.type === 'warning' ? 'bg-amber-500/20 text-amber-500' :
                    'bg-emerald-500/20 text-emerald-500'
                  }`}>
                    {alert.type === 'error' ? <AlertTriangle className="w-5 h-5" /> : 
                     alert.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> : 
                     <CheckCircle2 className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm leading-relaxed">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
