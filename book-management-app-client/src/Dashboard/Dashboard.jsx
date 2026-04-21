import React from "react";
import React, { useState } from "react";
import { FaBars, FaBell, FaDashcube, FaSatellite, FaSearch, FaTimes, FaUsers, FaWolfPackBattalion } from "react-icons/fa";
import { FaSpaghettiMonsterFlying } from "react-icons/fa6";


const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarItems = [
    { icon: <FaDashcube size={20} />, label: "Overview" },
    { icon: <FaUsers size={20} />, label: "Customers" },
    { icon: <FaWolfPackBattalion size={20} />, label: "Products" },
    { icon: <FaSpaghettiMonsterFlying size={20} />, label: "Settings" },
  ];
  return (
    <div className="flex h-screen bg-[#fafafa] text-slate-900 font-sans">
      
      {/* Sidebar - Mobile & Desktop */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
        <div className="p-6 text-xl font-bold tracking-tight">Acme Inc</div>
        <nav className="mt-4 px-4 space-y-2">
          {sidebarItems.map((item, index) => (
            <a key={index} href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-md transition-colors">
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <button className="lg:hidden p-2" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <div className="hidden md:flex items-center bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200">
            <FaSearch size={16} className="text-slate-400" />
            <input type="text" placeholder="Search..." className="bg-transparent border-none focus:outline-none text-sm ml-2 w-64" />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full"><FaBell size={20} /></button>
            <div className="h-8 w-8 rounded-full bg-slate-200 border border-slate-300"></div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-all">
              Download Report
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <FaSatellite title="Total Revenue" value="$45,231.89" desc="+20.1% from last month" />
            <FaSatellite title="Subscriptions" value="+2350" desc="+180.1% from last month" />
            <FaSatellite title="Sales" value="+12,234" desc="+19% from last month" />
            <FaSatellite title="Active Now" value="+573" desc="+201 since last hour" />
          </div>

          {/* Activity Section */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
            <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-[300px]">
              <h3 className="font-semibold mb-4">Overview</h3>
              <div className="w-full h-full bg-slate-50 rounded flex items-center justify-center text-slate-400">Chart Placeholder</div>
            </div>
            <div className="lg:col-span-3 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold mb-4">Recent Sales</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-slate-100"></div>
                      <div>
                        <p className="text-sm font-medium">User {i}</p>
                        <p className="text-xs text-slate-500">user{i}@email.com</p>
                      </div>
                    </div>
                    <span className="font-semibold">+$1,999.00</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
