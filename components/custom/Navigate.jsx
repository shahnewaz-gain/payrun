'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Navigate({ to = '/', replace }) {
  const router = useRouter();

  useEffect(() => {
    if (replace) router.replace(to);
    else router.push(to);
  }, [to]);

  return null;
}

export default Navigate;
