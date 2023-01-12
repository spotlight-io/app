import React from 'react';
import {
  useRouter,
} from 'next/router';
import useSWR from 'swr';
import {
  Center,
  Loader,
} from '@mantine/core';

export default function Session({
  children,
}) {
  const router = useRouter();
  const query = useSWR('/auth/session');

  if (query.isLoading) {
    return (
      <Center>
        <Loader variant="bars" />
      </Center>
    );
  }

  if (query.error) {
    router.push('/sign/in');
  }

  if (query.data) {
    return children;
  }
}
