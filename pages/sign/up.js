import React from 'react';
import {
  useRouter,
} from 'next/router';
import {
  Container,
  Grid,
  Center,
  Flex,
  Card,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import config from '/utils/config';
import Page from '/components/layout/page';
import Form from '/components/forms/sign/up';
import signCSS from '/styles/Sign.module.css';

export default function Up() {
  const router = useRouter();

  return (
    <Page title="Sign Up">
      <Container>
        <Grid>
          <Grid.Col span={12} sm={8} />
          <Grid.Col span={12} sm={4}>
            <Center>
              <Card
                className={signCSS.formCard}
                withBorder
                shadow="sm"
              >
                <Title order={4}>
                  Sign Up
                </Title>
                <Text size="sm" mb="sm">
                  {config.loremIpsum}
                </Text>

                <Form />

                <Flex>
                  <Anchor
                    component="button"
                    type="button"
                    size="sm"
                    mt="sm"
                    onClick={() => router.push('/sign/in')}
                  >
                    Already have an account?
                  </Anchor>
                </Flex>
              </Card>
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </Page>
  );
}
