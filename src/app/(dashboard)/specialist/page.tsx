"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Droplets, ThermometerSun, BrainCircuit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { sensorData } from "@/lib/mockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

export default function SpecialistDashboard() {
  const [liveData, setLiveData] = useState(sensorData);
  const [prediction, setPrediction] = useState("مستقر");

  // Simulate live data incoming
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(current => {
        const newData = [...current];
        const lastItem = newData[newData.length - 1];
        
        // Generate next hour string (very simple mock)
        const lastHour = parseInt(lastItem.time.split(':')[0]);
        const nextHourStr = `${String((lastHour + 1) % 24).padStart(2, '0')}:00`;
        
        // Random fluctuations
        const newItem = {
          time: nextHourStr,
          pressure: lastItem.pressure + (Math.random() * 200 - 100),
          temperature: lastItem.temperature + (Math.random() * 10 - 5),
          flow: lastItem.flow + (Math.random() * 20 - 10),
        };
        
        newData.push(newItem);
        if (newData.length > 8) newData.shift(); // Keep last 8 points
        
        // Simple AI prediction mock logic
        if (newItem.pressure > 4600) {
          setPrediction("احتمالية تسريب");
        } else if (newItem.temperature > 95) {
          setPrediction("ارتفاع حرارة حرج");
        } else {
          setPrediction("مستقر");
        }

        return newData;
      });
    }, 5000); // update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const latestData = liveData[liveData.length - 1];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">لوحة التحليلات المتقدمة</h1>
        <p className="text-muted-foreground">مراقبة حية لبيانات الحقل مع تنبؤات الذكاء الاصطناعي.</p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-border/50 bg-card/60 backdrop-blur">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">الضغط الحالي</p>
              <h3 className="text-2xl font-bold mt-2">{Math.round(latestData.pressure)} <span className="text-sm font-normal text-muted-foreground">PSI</span></h3>
            </div>
            <div className="p-3 bg-blue-500/20 text-blue-500 rounded-full">
              <Activity className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border/50 bg-card/60 backdrop-blur">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">الحرارة</p>
              <h3 className="text-2xl font-bold mt-2">{Math.round(latestData.temperature)} <span className="text-sm font-normal text-muted-foreground">°C</span></h3>
            </div>
            <div className="p-3 bg-rose-500/20 text-rose-500 rounded-full">
              <ThermometerSun className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/60 backdrop-blur">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">معدل التدفق</p>
              <h3 className="text-2xl font-bold mt-2">{Math.round(latestData.flow)} <span className="text-sm font-normal text-muted-foreground">BBL/h</span></h3>
            </div>
            <div className="p-3 bg-cyan-500/20 text-cyan-500 rounded-full">
              <Droplets className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>

        <Card className={`border ${prediction === 'مستقر' ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-destructive/50 bg-destructive/5'} backdrop-blur relative overflow-hidden group`}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <CardContent className="p-6 flex items-center justify-between relative z-10">
            <div>
              <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-primary" />
                تنبؤ النظام (AI)
              </p>
              <h3 className={`text-xl font-bold mt-2 ${prediction !== 'مستقر' ? 'text-destructive animate-pulse' : 'text-emerald-500'}`}>
                {prediction}
              </h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="border-border/50 bg-card/60 backdrop-blur h-[400px]">
            <CardHeader>
              <CardTitle>مؤشر الضغط الزمني (Live)</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={liveData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPressure" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#52525b" fontSize={12} />
                  <YAxis domain={['dataMin - 100', 'dataMax + 100']} stroke="#52525b" fontSize={12} />
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px' }}
                    itemStyle={{ color: '#fafafa' }}
                  />
                  <Area type="monotone" dataKey="pressure" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorPressure)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-border/50 bg-card/60 backdrop-blur h-[400px]">
            <CardHeader>
              <CardTitle>معدل التدفق والحرارة</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={liveData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="time" stroke="#52525b" fontSize={12} />
                  <YAxis yAxisId="left" stroke="#10b981" fontSize={12} />
                  <YAxis yAxisId="right" orientation="right" stroke="#f43f5e" fontSize={12} />
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px' }}
                  />
                  <Line yAxisId="left" type="monotone" dataKey="flow" name="التدفق" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line yAxisId="right" type="monotone" dataKey="temperature" name="الحرارة" stroke="#f43f5e" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
