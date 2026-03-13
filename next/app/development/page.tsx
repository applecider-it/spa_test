'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import SendTest from '@/components/development/SendTest';
import LoginTest from '@/components/development/LoginTest';
import AuthLoadingTest from '@/components/development/AuthLoadingTest';

import ClientLayout from '@/components/layouts/ClientLayout';
import { useAuth } from '@/hooks/useAuth';
import LoadingBlock from '@/components/ui/LoadingBlock';

export default function Development() {
  console.log('Development');

  const [text, setText] = useState('');

  const auth = useAuth((user) => {
    console.log('callback', user);

    if (user) setText('test ' + user.name);
  });

  const blockClass = 'border-2 p-10 my-5';

  return (
    <ClientLayout auth={auth}>
      <div>
        <h2 className="app-h2">Development</h2>

        {auth.loading ? (
          <LoadingBlock height="12rem" />
        ) : (
          <div className={blockClass}>
            <SendTest />
          </div>
        )}

        <div className={blockClass}>
          <LoginTest />
        </div>

        <div className={blockClass}>
          <AuthLoadingTest text={text} auth={auth} />
        </div>

        <div className={blockClass}>
          <Link href="/profile" prefetch={false} className="app-link-normal">
            ユーザーページ
          </Link>
        </div>
      </div>
    </ClientLayout>
  );
}
