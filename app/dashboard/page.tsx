'use client';
import DashboardContent from '@/layout/DashboardContent';
import Sidebar from '@/layout/Sidebar';
import { loadDashboardDataAction } from '@/store/actions/dashboardActions';
import React from 'react';
import { toast } from 'sonner';

export default function Dashboard() {
  React.useEffect(() => {
    loadDashboardDataAction()
      .catch((error) => {
        toast.error('Failed to load dashboard data');
      })
      .then(() => {
        toast.success('Dashboard data loaded');
      });
  }, []);

  return (
    <div className="w-screen h-full flex flex-row bg-[#F7FAFC]">
      <div className="h-full flex w-full">
        <Sidebar />
        <div className="h-full w-full ml-[90px]">
          <DashboardContent />
        </div>
      </div>
    </div>
  );
}
