import { colors } from '@/const/colors';
import { useAppSelector } from '@/store/store';

export default function DashboardCards() {
  const state = useAppSelector((state) => state.dashboard);
  const { info } = state;

  const thousandParser = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <div
      style={{
        maxWidth: 890,
        margin: 'auto',
        marginTop: 40,
        gap: 20,
        flexDirection: 'row',
        display: 'flex',
      }}
    >
      <div
        style={{
          height: '100%',
          flex: 1,
        }}
      >
        <div
          style={{
            height: '100%',
            backgroundColor: colors.light.surface,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          <span style={{ fontSize: 14 }}>Subscription expires on</span>
          <span style={{ fontSize: 24 }}>{info.expireTime}</span>
        </div>
      </div>
      <div
        style={{
          height: '100%',
          flex: 1,
        }}
      >
        <div
          style={{
            height: '100%',
            backgroundColor: colors.light.surfaceSecondary,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          <span style={{ fontSize: 14 }}>Last charge</span>
          <span
            style={{ fontSize: 24, display: 'flex', alignItems: 'flex-end' }}
          >
            {info.lastChargeAmount}
            <span style={{ fontSize: 14, paddingLeft: 4, marginBottom: 4 }}>
              {info.lastCharge}
            </span>
          </span>
        </div>
      </div>
      <div
        style={{
          height: '100%',
          flex: 1,
        }}
      >
        <div
          style={{
            height: '100%',
            backgroundColor: colors.light.surface,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          <span style={{ fontSize: 14 }}>Total Usage Data</span>
          <span style={{ fontSize: 24, fontWeight: 'bold' }}>
            {thousandParser(info.totalDataUsage) + ' GB'}
          </span>
        </div>
      </div>
      <div
        style={{
          height: '100%',
          flex: 1,
        }}
      >
        <div
          style={{
            height: '100%',
            backgroundColor: colors.light.surfaceSecondary,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          <span style={{ fontSize: 14 }}>Daily Usage Data</span>
          <span style={{ fontSize: 24, fontWeight: 'bold' }}>
            {thousandParser(info.dailyUsage) + ' GB'}
          </span>
        </div>
      </div>
    </div>
  );
}
