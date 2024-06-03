import { colors } from '@/const/colors';

export default function DashboardHeader() {
  return (
    <div
      style={{
        maxWidth: 890,
        paddingLeft: 40,
        paddingRight: 40,
        margin: 'auto',
        marginTop: 41,
      }}
    >
      <span
        style={{
          color: colors.light.text,
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        Proxies & Scraping Infrastructure
      </span>
    </div>
  );
}
