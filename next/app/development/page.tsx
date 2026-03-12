'use client';
import SendTest from '@/components/development/SendTest';

import ClientLayout from '@/components/layouts/ClientLayout';

export default function Development() {
  console.log('Development');
  return (
    <ClientLayout>
      <div>
        Development
        <SendTest />
      </div>
    </ClientLayout>
  );
}
