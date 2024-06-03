'use client';
import { loadTokenAction } from '@/store/actions/authActions';
import { redirect } from 'next/navigation';
import React from 'react';

export default function Home() {
  React.useEffect(() => {
    const isLogined = loadTokenAction();
    if (isLogined) {
      redirect('/dashboard');
    } else {
      redirect('/login');
    }
  }, []);

  return <div className="">Loading...</div>;
}
