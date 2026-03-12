'use client';
import SendTest from '@/components/development/SendTest';

import ClientLayout from '@/components/layouts/ClientLayout';
import { useAuth } from '@/hooks/useAuth';

export default function Development() {
  console.log('Development');

  const auth = useAuth();

  return (
    <ClientLayout auth={auth} needAuth={true}>
      <div>
        Development
        <SendTest />
      </div>
    </ClientLayout>
  );
}
