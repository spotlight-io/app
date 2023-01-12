import React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import {
  Skeleton,
  Grid,
  Group,
  Switch,
  Textarea,
  RangeSlider,
  TextInput,
  Select,
  MultiSelect,
  ColorSwatch,
  Text,
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
import config from '/utils/config';
import appearanceSchema from '/utils/schemas/profiles/actor/appearance';
import CommonForm from '/components/forms/common';
import errorize from '/utils/client/errorize';

const sketch = sketches.profiles.actor.appearance;

const ColorItem = React.forwardRef(({ hex, label, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Group noWrap>
      <ColorSwatch color={hex} />

      <Text>{label}</Text>
    </Group>
  </div>
));

function Appearance({
  appearance,
}) {
  const form = useForm({
    validate: joiResolver(appearanceSchema),
    initialValues: getValues(sketch, appearance),
    transformValues: (values) => appearanceSchema.validate(values),
  });

  const mutation = useSWRMutation('/auth/profiles/actor/appearance', (key, { arg }) => axios.post(key, arg));

  const onSubmit = async ({ value }) => {
    try {
      await mutation.trigger(value);
    } catch (error) {
      errorize(error, form);
    }
  };

  React.useEffect(() => {
    if (appearance === null) {
      return;
    }

    form.setValues(getValues(sketch, appearance));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    appearance,
  ]);

  return (
    <CommonForm
      onSubmit={form.onSubmit(onSubmit)}
      loadingOverlayVisible={mutation.isMutating}
      submitButtonLabel="Save Appearance"
      submitButtonIcon={<IconFileCheck />}
    >
      {/*  */}
      <Grid.Col span={12}>
        <Switch
          label={sketch.active.label}
          {...form.getInputProps('active', {
            type: 'checkbox',
          })}
        />
      </Grid.Col>

      {/*  */}
      <Grid.Col span={12}>
        <Textarea
          label={sketch.bio.label}
          placeholder={config.loremIpsum}
          minRows={3}
          {...form.getInputProps('bio')}
        />
      </Grid.Col>

      {/*  */}
      <Grid.Col span={12}>
        <RangeSlider
          min={sketch.age.range.min}
          max={sketch.age.range.max}
          {...form.getInputProps('age')}
          mx="xs"
        />

        <Text size="xs" mt="xs">
          {config.loremIpsum}
        </Text>
      </Grid.Col>

      {/*  */}
      <Grid.Col span={12} xs={6} sm={4}>
        <TextInput
          withAsterisk
          rightSection={(
            <Text c="dimmed" size="xs">
              cm
            </Text>
                    )}
          icon={<sketch.weight.icon />}
          label={sketch.weight.label}
          {...form.getInputProps('weight')}
        />
      </Grid.Col>

      <Grid.Col span={12} xs={6} sm={4}>
        <TextInput
          withAsterisk
          rightSection={(
            <Text c="dimmed" size="xs">
              cm
            </Text>
                    )}
          icon={<sketch.height.icon />}
          label={sketch.height.label}
          {...form.getInputProps('height')}
        />
      </Grid.Col>

      <Grid.Col span={12} xs={12} sm={4}>
        <Select
          withAsterisk
          clearable
          searchable
          icon={<sketch.body.icon />}
          label={sketch.body.label}
          placeholder="Athletic"
          data={sketch.body.options}
          {...form.getInputProps('body')}
        />
      </Grid.Col>

      {/*  */}
      <Grid.Col span={12}>
        <MultiSelect
          withAsterisk
          clearable
          searchable
          icon={<sketch.ethnicities.icon />}
          maxSelectedValues={sketch.ethnicities.length.max}
          label={sketch.ethnicities.label}
          placeholder="Indian"
          data={sketch.ethnicities.options}
          {...form.getInputProps('ethnicities')}
        />

        <Text size="xs" mt="xs">
          {config.loremIpsum}
        </Text>
      </Grid.Col>

      {/*  */}
      <Grid.Col span={12} xs={6} sm={4}>
        <Select
          withAsterisk
          clearable
          searchable
          itemComponent={ColorItem}
          icon={<sketch.colors.eye.icon />}
          label={sketch.colors.eye.label}
          placeholder="Hazel"
          data={sketch.colors.eye.options}
          {...form.getInputProps('colors.eye')}
        />
      </Grid.Col>

      <Grid.Col span={12} xs={6} sm={4}>
        <Select
          withAsterisk
          clearable
          searchable
          itemComponent={ColorItem}
          icon={<sketch.colors.hair.icon />}
          label={sketch.colors.hair.label}
          placeholder="Blonde"
          data={sketch.colors.hair.options}
          {...form.getInputProps('colors.hair')}
        />
      </Grid.Col>

      <Grid.Col span={12} xs={6} sm={4}>
        <Select
          withAsterisk
          clearable
          searchable
          itemComponent={ColorItem}
          icon={<sketch.colors.skin.icon />}
          label={sketch.colors.skin.label}
          placeholder="Fair"
          data={sketch.colors.skin.options}
          {...form.getInputProps('colors.skin')}
        />
      </Grid.Col>
    </CommonForm>
  );
}

function getAppearance({ data }) {
  if (data === undefined) {
    return undefined;
  }

  return data.appearance;
}

export default function Prefetch() {
  const query = useSWR('/auth/profiles/actor/appearance');

  return (
    <Skeleton visible={query.isLoading}>
      <Appearance appearance={getAppearance(query)} />
    </Skeleton>
  );
}
