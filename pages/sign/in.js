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
import Form from '/components/forms/sign/in';
import signCSS from '/styles/Sign.module.css';

export default function In() {
  const router = useRouter();

  React.useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Page title="Sign In">
      <Container>
        <Grid>
          <Grid.Col span={12} sm={6} lg={8} />
          <Grid.Col span={12} sm={6} lg={4}>
            <Center>
              <Card
                className={signCSS.formCard}
                withBorder
                shadow="sm"
              >
                <Title order={4}>
                  Sign In
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
                    onClick={() => router.push('/sign/up')}
                  >
                    Do not have an account?
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
