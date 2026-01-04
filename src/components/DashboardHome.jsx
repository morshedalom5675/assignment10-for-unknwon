import React from "react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
} from "recharts";
import { CheckCircle, Clock, AlertTriangle, TrendingUp } from "lucide-react";

// ডামি ডেটা (ব্যাকএন্ড ছাড়াই কাজ করবে)
const areaData = [
  { name: "Jan", reports: 4 },
  { name: "Feb", reports: 7 },
  { name: "Mar", reports: 5 },
  { name: "Apr", reports: 12 },
  { name: "May", reports: 9 },
  { name: "Jun", reports: 15 },
];

const pieData = [
  { name: "Resolved", value: 45, color: "#16a34a" },
  { name: "Pending", value: 25, color: "#eab308" },
  { name: "In Progress", value: 30, color: "#2563eb" },
];

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Activity Overview</h2>
        <p className="text-gray-500">Welcome back! Here's what's happening in your community.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-base-200 dark:border-gray-700 flex items-center gap-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-2xl"><CheckCircle size={28} /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Resolved</p>
            <h3 className="text-2xl font-bold italic text-gray-800 dark:text-white">124</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-base-200 dark:border-gray-700 flex items-center gap-4">
          <div className="p-3 bg-yellow-100 text-yellow-600 rounded-2xl"><Clock size={28} /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Pending</p>
            <h3 className="text-2xl font-bold italic text-gray-800 dark:text-white">42</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-base-200 dark:border-gray-700 flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl"><AlertTriangle size={28} /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Active Issues</p>
            <h3 className="text-2xl font-bold italic text-gray-800 dark:text-white">18</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-base-200 dark:border-gray-700 flex items-center gap-4">
          <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl"><TrendingUp size={28} /></div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Impact Score</p>
            <h3 className="text-2xl font-bold italic text-gray-800 dark:text-white">850</h3>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Area Chart - Reports Trend */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-base-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-white">Reporting Trend</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData}>
                <defs>
                  <linearGradient id="colorReports" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="reports" stroke="#16a34a" strokeWidth={3} fillOpacity={1} fill="url(#colorReports)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart - Issue Status */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-base-200 dark:border-gray-700 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4 self-start text-gray-800 dark:text-white">Status Distribution</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">Most issues reported this month are <span className="text-green-600 font-bold">Resolved</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;