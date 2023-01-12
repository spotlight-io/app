import React from 'react';
import {
  useRouter,
} from 'next/router';
import axios from 'axios';
import useSWRMutation from 'swr/mutation';
import {
  useForm,
} from '@mantine/form';
import {
  IconLogin,
} from '@tabler/icons';
import CommonForm from '/components/forms/common';

export default function Up() {
  const router = useRouter();
  const form = useForm();
  const mutation = useSWRMutation('/sign/out', (key, { arg }) => axios.post(key, arg));

  const onSubmit = async () => {
    try {
      await mutation.trigger();
      localStorage.clear();
      router.push('/sign/in');
    } catch (error) {
      // TODO: handle
    }
  };

  return (
    <CommonForm
      onSubmit={form.onSubmit(onSubmit)}
      loadingOverlayVisible={mutation.isMutating}
      submitButtonLabel="Sign Out"
      submitButtonIcon={<IconLogin />}
    />
  );
}
