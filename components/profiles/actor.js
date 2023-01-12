import React from 'react';
import {
  Grid,
  Card,
  Title,
  Text,
} from '@mantine/core';
import config from '/utils/config';
import Appearance from '/components/forms/profiles/actor/appearance';

export default function Actor() {
  return (
    <Grid>
      <Grid.Col span={12} sm={4} order={2} orderSm={1}>
        <Card withBorder shadow="sm">
          <Title order={4}>
            Documents
          </Title>
          <Text size="sm" mb="sm">
            {config.loremIpsum}
          </Text>
        </Card>
      </Grid.Col>

      <Grid.Col span={12} sm={8} order={1} orderSm={2}>
        <Card withBorder shadow="sm" mb="sm">
          <Title order={4}>
            Appearance
          </Title>
          <Text size="sm" mb="sm">
            {config.loremIpsum}
          </Text>

          <Appearance />
        </Card>

        <Card withBorder shadow="sm">
          <Title order={4}>
            Skills
          </Title>
          <Text size="sm" mb="sm">
            {config.loremIpsum}
          </Text>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
