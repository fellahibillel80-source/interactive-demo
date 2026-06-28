export const roles = [
  { id: 'worker', name: 'العامل البترولي', description: 'لوحة تحكم ميدانية للمهام والإشعارات', color: 'bg-blue-600' },
  { id: 'specialist', name: 'الأخصائي / المهندس', description: 'تحليلات عميقة ورسوم بيانية لبيانات الحقل', color: 'bg-emerald-600' },
  { id: 'admin', name: 'مدير النظام', description: 'إدارة الصلاحيات والمستخدمين وإعدادات النظام', color: 'bg-purple-600' },
];

export const tasks = [
  { id: 1, title: 'فحص صمامات الضغط في المضخة A', status: 'pending', priority: 'high' },
  { id: 2, title: 'أخذ عينات من البئر رقم 4', status: 'completed', priority: 'medium' },
  { id: 3, title: 'صيانة وقائية لوحدة التبريد', status: 'pending', priority: 'low' },
  { id: 4, title: 'تسجيل قراءات العداد التراكمي', status: 'pending', priority: 'medium' },
];

export const sensorData = [
  { time: '08:00', pressure: 4000, temperature: 75, flow: 250 },
  { time: '09:00', pressure: 4100, temperature: 78, flow: 260 },
  { time: '10:00', pressure: 3900, temperature: 74, flow: 245 },
  { time: '11:00', pressure: 4200, temperature: 80, flow: 270 },
  { time: '12:00', pressure: 4300, temperature: 85, flow: 275 },
  { time: '13:00', pressure: 4500, temperature: 90, flow: 290 },
  { time: '14:00', pressure: 4150, temperature: 82, flow: 265 },
];

export const alerts = [
  { id: 101, message: 'ارتفاع ملحوظ في درجة حرارة المضخة رقم 3', type: 'warning', time: '13:45' },
  { id: 102, message: 'توقف مؤقت في تدفق الأنابيب الفرعية (المنطقة ب)', type: 'error', time: '14:10' },
  { id: 103, message: 'تم إكمال الصيانة الدورية بنجاح', type: 'success', time: '11:00' },
];
