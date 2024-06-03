import React from 'react';
import {
  IconHomeFilled,
  IconCreditCard,
  IconUser,
  IconLogout,
} from '@tabler/icons-react';
import { colors } from '@/const/colors';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        paddingTop: 20,
        alignItems: 'center',
        borderRight: `1px solid ${colors.light.border}`,
        backgroundColor: colors.light.background,
      }}
    >
      <div style={{ padding: 20 }}>
        <Image src={'/images/logo.png'} alt="logo" height={50} width={50} />
      </div>
      <div
        style={{
          padding: 10,
          background: 'rgba(12, 109, 252, 0.1)',
          borderRadius: 8,
        }}
      >
        <IconHomeFilled size={24} color={colors.light.active} />
      </div>
      <div>
        <IconCreditCard size={24} color={colors.light.inactive} />
      </div>
      <div>
        <IconUser size={24} color={colors.light.inactive} />
      </div>
      <div>
        <IconLogout size={24} color={colors.light.inactive} />
      </div>
    </div>
  );
}
