import React from 'react';
import {
  Container,
  Grid,
  Center,
  Card,
  Title,
  Text,
} from '@mantine/core';
import config from '/utils/config';
import Page from '/components/layout/page';
import Form from '/components/forms/sign/out';
import signCSS from '/styles/Sign.module.css';

export default function Out() {
  return (
    <Page title="Sign Out">
      <Container>
        <Grid>
          <Grid.Col span={12} sm={4} offsetSm={4}>
            <Center>
              <Card
                className={signCSS.formCard}
                withBorder
                shadow="sm"
              >
                <Title order={4}>
                  Sign Out
                </Title>
                <Text size="sm" mb="sm">
                  {config.loremIpsum}
                </Text>

                <Form />
              </Card>
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </Page>
  );
}
