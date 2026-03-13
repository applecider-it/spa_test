'use client';

import { useAuth } from '@/hooks/useAuth';
import LoadingBlock from '@/components/ui/LoadingBlock';

export default function AuthLoadingTest({
  text,
  auth,
}: {
  text: string;
  auth: ReturnType<typeof useAuth>;
}) {
  return (
    <div>
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
  );
}
