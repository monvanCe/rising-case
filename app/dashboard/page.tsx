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
    <div className="w-screen h-screen flex flex-row">
      <div className="h-full flex w-full">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}
