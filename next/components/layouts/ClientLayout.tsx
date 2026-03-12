'use client';
import React, { useState, useEffect } from 'react';
import { sendRest } from '@/services/api/rest';
import Link from 'next/link';
import { AuthResult } from '@/types/types';

export default function ClientLayout({
  children,
  callback,
}: Readonly<{
  children: React.ReactNode;
  callback?: () => void;
}>) {
  console.log('ClientLayout', callback);

  const authCheck = async () => {
    const data = {};
    const uri = '/auth';

    const res = await sendRest<AuthResult>(uri, data);

    console.log('res', res);
  };

  useEffect(() => {
    console.log('ClientLayout useEffect');

    authCheck();
  }, []);

  return (
    <>
      <div className="space-x-3">
        <Link href="/" prefetch={false} className="text-blue-500 underline">
          Top
        </Link>
        <Link
          href="/development"
          prefetch={false}
          className="text-blue-500 underline"
        >
          開発者向けページ
        </Link>
      </div>
      {children}
    </>
  );
}
