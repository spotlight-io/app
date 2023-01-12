import React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import {
  Skeleton,
  Grid,
  TextInput,
  MultiSelect,
  Text,
} from '@mantine/core';
import {
  DatePicker,
} from '@mantine/dates';
import {
  useForm,
  joiResolver,
} from '@mantine/form';
import {
  IconFileCheck,
} from '@tabler/icons';
import config from '/utils/config';
import sketches, {
  getValues,
} from '/utils/sketches';
import detailsSchema from '/utils/schemas/profiles/personal/details';
import CommonForm from '/components/forms/common';
import errorize from '/utils/client/errorize';

const sketch = sketches.profiles.personal.details;

function Details({
  details,
}) {
  const form = useForm({
    validate: joiResolver(detailsSchema),
    initialValues: getValues(sketch, details),
    transformValues: (values) => detailsSchema.validate(values),
  });

  const mutation = useSWRMutation('/auth/profiles/personal/details', (key, { arg }) => axios.post(key, arg));

  const onSubmit = async ({ value }) => {
    try {
      await mutation.trigger(value);
    } catch (error) {
      errorize(error, form);
    }
  };

  React.useEffect(() => {
    if (details === null) {
      return;
    }

    form.setValues(getValues(sketch, details));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    details,
  ]);

  return (
    <CommonForm
      onSubmit={form.onSubmit(onSubmit)}
      loadingOverlayVisible={mutation.isMutating}
      submitButtonLabel="Save Details"
      submitButtonIcon={<IconFileCheck />}
    >
      {/*  */}
      <Grid.Col span={12} sm={6}>
        <TextInput
          withAsterisk
          icon={<sketch.name.first.icon />}
          label={sketch.name.first.label}
          placeholder="Joe"
          {...form.getInputProps('name.first')}
        />
      </Grid.Col>

      <Grid.Col span={12} sm={6}>
        <TextInput
          withAsterisk
          icon={<sketch.name.last.icon />}
          label={sketch.name.last.label}
          placeholder="Pesci"
          {...form.getInputProps('name.last')}
        />
      </Grid.Col>

      {/*  */}
      <Grid.Col span={12} sm={6}>
        <DatePicker
          withAsterisk
          icon={<sketch.dateOfBirth.icon />}
          label={sketch.dateOfBirth.label}
          placeholder="I was born on"
          {...form.getInputProps('dateOfBirth')}
        />
      </Grid.Col>

      {/*  */}
      <Grid.Col span={12}>
        <MultiSelect
          withAsterisk
          clearable
          searchable
          icon={<sketch.genderIdentities.icon />}
          label={sketch.genderIdentities.label}
          placeholder="I identify as"
          maxSelectedValues={sketch.genderIdentities.length.max}
          data={sketch.genderIdentities.options}
          {...form.getInputProps('genderIdentities')}
        />

        <Text size="xs" mt="xs">
          {config.loremIpsum}
        </Text>
      </Grid.Col>

      {/*  */}
      <Grid.Col span={12} sm={6}>
        <TextInput
          withAsterisk
          icon={<sketch.username.icon />}
          label={sketch.username.label}
          placeholder="joepesci"
          {...form.getInputProps('username')}
        />

        <Text size="xs" mt="xs">
          {config.loremIpsum}
        </Text>
      </Grid.Col>
    </CommonForm>
  );
}

function getDetails({ data }) {
  if (data === undefined) {
    return undefined;
  }

  return data.details;
}

export default function Prefetch() {
  const query = useSWR('/auth/profiles/personal/details');

  return (
    <Skeleton visible={query.isLoading}>
      <Details details={getDetails(query)} />
    </Skeleton>
  );
}
