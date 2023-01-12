import React from 'react';
import {
  Grid,
  Card,
  Title,
  Text,
} from '@mantine/core';
import config from '/utils/config';
import Avatar from '/components/forms/profiles/personal/avatar';
import Cover from '/components/forms/profiles/personal/cover';
import Details from '/components/forms/profiles/personal/details';
import SocialMediaHandles from '/components/forms/profiles/personal/socialMediaHandles';
import personalCSS from '/styles/Personal.module.css';

export default function Personal() {
  return (
    <Grid>
      {/*  */}
      <Grid.Col span={8} offset={2} sm={4} offsetSm={0} order={1}>
        <Card withBorder shadow="sm">
          <Card.Section>
            <Avatar />
          </Card.Section>
        </Card>
      </Grid.Col>

      <Grid.Col span={12} sm={8} order={2}>
        <Card
          className={personalCSS.coverContainer}
          withBorder
          shadow="sm"
        >
          <Card.Section>
            <Cover />
          </Card.Section>
        </Card>
      </Grid.Col>

      {/*  */}
      <Grid.Col span={12} sm={4} order={4} orderSm={3}>
        <Card withBorder shadow="sm">
          <Title order={4}>
            Social Media Handles
          </Title>
          <Text size="sm" mb="sm">
            {config.loremIpsum}
          </Text>

          <SocialMediaHandles />
        </Card>
      </Grid.Col>

      <Grid.Col span={12} sm={8} order={3} orderSm={4}>
        <Card withBorder shadow="sm">
          <Title order={4}>
            Details
          </Title>
          <Text size="sm" mb="sm">
            {config.loremIpsum}
          </Text>

          <Details />
        </Card>
      </Grid.Col>
    </Grid>
  );
}
