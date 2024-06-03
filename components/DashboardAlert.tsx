import { colors } from '@/const/colors';
import { IconX } from '@tabler/icons-react';

export default function DashboardAlert() {
  return (
    <div style={{ maxWidth: 890, margin: 'auto' }}>
      <div style={{ paddingLeft: 40, paddingRight: 40, marginTop: 21 }}>
        <div
          style={{
            background: 'rgba(12, 109, 252, 0.3)',
            borderRadius: 4,
            paddingLeft: 22,
            paddingRight: 22,
            paddingTop: 8,
            paddingBottom: 8,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              color: colors.light.text,
              fontWeight: 300,
              fontSize: 14,
            }}
          >
            Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit
            card. Start Free Trial
          </span>
          <IconX size={16} color={colors.light.border} />
        </div>
      </div>
    </div>
  );
}
