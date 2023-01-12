import React from 'react';
import {
  useRouter,
} from 'next/router';
import axios from 'axios';
import useSWRMutation from 'swr/mutation';
import {
  Grid,
  TextInput,
  PasswordInput,
} from '@mantine/core';
import {
  useForm,
  joiResolver,
} from '@mantine/form';
import {
  IconLogin,
} from '@tabler/icons';
import sketches, {
  getValues,
} from '/utils/sketches';
import signInSchema from '/utils/schemas/sign/in';
import errorize from '/utils/client/errorize';
import CommonForm from '/components/forms/common';

const sketch = sketches.sign.in;

export default function In() {
  const router = useRouter();

  const form = useForm({
    validate: joiResolver(signInSchema),
    initialValues: getValues(sketch, undefined),
    transformValues: (values) => signInSchema.validate(values),
  });

  const mutation = useSWRMutation('/sign/in', (key, { arg }) => axios.post(key, arg));

  const onSubmit = async ({ value }) => {
    try {
      const response = await mutation.trigger(value);
      localStorage.clear();
      localStorage.setItem('token', response.data.token);
      router.push('/auth/profiles/personal');
    } catch (error) {
      errorize(error, form);
    }
  };

  return (
    <CommonForm
      onSubmit={form.onSubmit(onSubmit)}
      loadingOverlayVisible={mutation.isMutating}
      submitButtonLabel="Sign In"
      submitButtonIcon={<IconLogin />}
    >
      <Grid.Col span={12}>
        <TextInput
          withAsterisk
          icon={<sketch.email.icon />}
          label={sketch.email.label}
          placeholder="joe.pesci@hollywood.com"
          {...form.getInputProps('email')}
        />
      </Grid.Col>

      <Grid.Col span={12}>
        <PasswordInput
          withAsterisk
          icon={<sketch.password.icon />}
          label={sketch.password.label}
          placeholder="Your little secret"
          {...form.getInputProps('password')}
        />
      </Grid.Col>
    </CommonForm>
  );
}
