'use client';
import SendTest from '@/components/development/SendTest';
import LoginTest from '@/components/development/LoginTest';

import ClientLayout from '@/components/layouts/ClientLayout';
import { useAuth } from '@/hooks/useAuth';
import LoadingBlock from '@/components/ui/LoadingBlock';
import { useEffect, useState } from 'react';

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
          <div>
            <div>
              <div>text: {text}</div>
              <div>auth.loading: {auth.loading ? 'on' : 'off'}</div>
              <div>auth.user: {auth.user ? auth.user.name : 'none'}</div>
            </div>
          </div>

          <div className="mt-5">
            {auth.loading ? (
              <LoadingBlock />
            ) : (
              <div>
                <div>text: {text}</div>
                <div>auth.loading: {auth.loading ? 'on' : 'off'}</div>
                <div>auth.user: {auth.user ? auth.user.name : 'none'}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
