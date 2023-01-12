import React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import {
  Skeleton,
  Grid,
  TextInput,
} from '@mantine/core';
import {
  useForm,
  joiResolver,
} from '@mantine/form';
import {
  IconFileCheck,
} from '@tabler/icons';
import sketches, {
  getValues,
} from '/utils/sketches';
import socialMediaHandlesSchema from '/utils/schemas/profiles/personal/socialMediaHandles';
import CommonForm from '/components/forms/common';
import errorize from '/utils/client/errorize';

const sketch = sketches.profiles.personal.socialMediaHandles;

function SocialMediaHandles({
  socialMediaHandles,
}) {
  const form = useForm({
    validate: joiResolver(socialMediaHandlesSchema),
    initialValues: getValues(sketch, socialMediaHandles),
    transformValues: (values) => socialMediaHandlesSchema.validate(values),
  });

  const mutation = useSWRMutation('/auth/profiles/personal/socialMediaHandles', (key, { arg }) => axios.post(key, arg));

  const onSubmit = async ({ value }) => {
    try {
      await mutation.trigger(value);
    } catch (error) {
      errorize(error, form);
    }
  };

  React.useEffect(() => {
    if (socialMediaHandles === null) {
      return;
    }

    form.setValues(getValues(sketch, socialMediaHandles));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    socialMediaHandles,
  ]);

  return (
    <CommonForm
      onSubmit={form.onSubmit(onSubmit)}
      loadingOverlayVisible={mutation.isMutating}
      submitButtonLabel="Save Social Media Handles"
      submitButtonIcon={<IconFileCheck />}
    >
      {/*  */}
      <Grid.Col span={12}>
        <TextInput
          withAsterisk
          icon={<sketch.instagram.icon />}
          label={sketch.instagram.label}
          placeholder="joe"
          {...form.getInputProps('instagram')}
        />
      </Grid.Col>

      {/*  */}
      <Grid.Col span={12}>
        <TextInput
          withAsterisk
          icon={<sketch.twitter.icon />}
          label={sketch.twitter.label}
          placeholder="joe"
          {...form.getInputProps('twitter')}
        />
      </Grid.Col>

      {/*  */}
      <Grid.Col span={12}>
        <TextInput
          withAsterisk
          icon={<sketch.facebook.icon />}
          label={sketch.facebook.label}
          placeholder="joe"
          {...form.getInputProps('facebook')}
        />
      </Grid.Col>

      {/*  */}
      <Grid.Col span={12}>
        <TextInput
          withAsterisk
          icon={<sketch.linkedIn.icon />}
          label={sketch.linkedIn.label}
          placeholder="joe"
          {...form.getInputProps('linkedIn')}
        />
      </Grid.Col>
    </CommonForm>
  );
}
function getSocialMediaHandles({ data }) {
  if (data === undefined) {
    return undefined;
  }

  return data.socialMediaHandles;
}

export default function Prefetch() {
  const query = useSWR('/auth/profiles/personal/socialMediaHandles');

  return (
    <Skeleton visible={query.isLoading}>
      <SocialMediaHandles socialMediaHandles={getSocialMediaHandles(query)} />
    </Skeleton>
  );
}
