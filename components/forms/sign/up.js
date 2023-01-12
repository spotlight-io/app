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
import signUpSchema from '/utils/schemas/sign/up';
import errorize from '/utils/client/errorize';
import CommonForm from '/components/forms/common';

const sketch = sketches.sign.up;

export default function Up() {
  const router = useRouter();

  const form = useForm({
    validate: joiResolver(signUpSchema),
    initialValues: getValues(sketch, undefined),
    transformValues: (values) => signUpSchema.validate(values),
  });

  const mutation = useSWRMutation('/sign/up', (key, { arg }) => axios.post(key, arg));

  const onSubmit = async ({ value }) => {
    try {
      await mutation.trigger(value);
      router.push('/sign/in');
    } catch (error) {
      errorize(error, form);
    }
  };

  return (
    <CommonForm
      onSubmit={form.onSubmit(onSubmit)}
      loadingOverlayVisible={mutation.isMutating}
      submitButtonLabel="Sign Up"
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
          placeholder="Must be atleast 6 characters long"
          {...form.getInputProps('password')}
        />
      </Grid.Col>

      <Grid.Col span={12}>
        <PasswordInput
          withAsterisk
          icon={<sketch.confirmPassword.icon />}
          label={sketch.confirmPassword.label}
          placeholder="Must match"
          {...form.getInputProps('confirmPassword')}
        />
      </Grid.Col>
    </CommonForm>
  );
}
