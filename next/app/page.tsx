'use client';

import Image from 'next/image';
import ClientLayout from '@/components/layouts/ClientLayout';
import { useAuth } from '@/hooks/useAuth';

export default function Home() {
  const auth = useAuth();

  console.log('Home', auth);

  return (
    <ClientLayout auth={auth}>
      <div>
        <h2 className="app-h2">Home</h2>

        <div className="border-4 p-5">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </div>
      </div>
    </ClientLayout>
  );
}
