import { colors } from '@/const/colors';

export default function DashboardTitles() {
  return (
    <>
      <div
        style={{
          maxWidth: 890,
          paddingLeft: 40,
          paddingRight: 40,
          display: 'flex',
          gap: 20,
          margin: 'auto',
          marginTop: 40,
        }}
      >
        <div>
          <span>My Proxies</span>
        </div>

        <div>
          <span
            style={{
              color: colors.light.active,
              borderBottom: `2px solid ${colors.light.active}`,
              paddingBottom: 4,
            }}
          >
            Dashboard
          </span>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: 0.5,
          background: 'rgba(0, 0, 0, 0.25)',
        }}
      />
    </>
  );
}
