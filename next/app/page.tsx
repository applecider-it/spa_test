'use client';
import Image from 'next/image';

import ClientLayout from '@/components/layouts/ClientLayout';

export default function Home() {
  console.log('Home');
  const callback = () => {

  };
  
  return (
    <ClientLayout callback={callback}>
      <div>
        Home
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </div>
    </ClientLayout>
  );
}
