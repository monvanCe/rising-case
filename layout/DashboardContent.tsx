import DashboardAlert from '@/components/DashboardAlert';
import DashboardCards from '@/components/DashboardCards';
import DashboardChart from '@/components/DashboardChart';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardTable from '@/components/DashboardTable';
import DashboardTitles from '@/components/DashboardTitles';
import { colors } from '@/const/colors';

export default function DashboardContent() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: colors.light.background,
      }}
    >
      <DashboardAlert />
      <DashboardHeader />
      <DashboardTitles />
      <DashboardCards />
      <DashboardChart />
      <DashboardTable />
    </div>
  );
}
