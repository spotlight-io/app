import React from 'react';
import {
  Grid,
  Card,
  Title,
  Text,
} from '@mantine/core';
import config from '/utils/config';

export default function VoiceOverArtist() {
  return (
    <Grid>
      <Grid.Col span={12} sm={4} order={2} orderSm={1} />

      <Grid.Col span={12} sm={8} order={1} orderSm={2}>
        <Card withBorder shadow="sm">
          <Title order={4}>
            Voice Characteristics
          </Title>
          <Text size="sm" mb="sm">
            {config.loremIpsum}
          </Text>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
