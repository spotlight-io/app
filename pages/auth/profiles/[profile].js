import React from 'react';
import {
  useRouter,
} from 'next/router';
import {
  Container,
  Title,
  Text,
  Tabs,
} from '@mantine/core';
import config from '/utils/config';
import Session from '/components/wrappers/session';
import Page from '/components/layout/page';
import Personal from '/components/profiles/personal';
import Actor from '/components/profiles/actor';
import VoiceOverArtist from '/components/profiles/voiceOverArtist';

function getProfilesTabs() {
  return config.profiles.map((profile) => (
    <Tabs.Tab
      key={`profile-${profile.value}`}
      value={profile.value}
      icon={<profile.icon />}
    >
      {profile.label}
    </Tabs.Tab>
  ));
}

function Profiles() {
  const router = useRouter();

  return (
    <Container>
      <Title order={1}>
        Profiles
      </Title>
      <Text size="sm">
        {config.loremIpsum}
      </Text>

      <Tabs
        value={router.query.profile}
        onTabChange={(profile) => router.push(`/auth/profiles/${profile}`)}
      >
        <Tabs.List>
          {getProfilesTabs()}
        </Tabs.List>

        {router.query.profile === 'personal'
          && (
            <Tabs.Panel value="personal">
              <Personal />
            </Tabs.Panel>
          )}

        {router.query.profile === 'actor'
          && (
            <Tabs.Panel value="actor">
              <Actor />
            </Tabs.Panel>
          )}

        {router.query.profile === 'voiceOverArtist'
          && (
            <Tabs.Panel value="voiceOverArtist">
              <VoiceOverArtist />
            </Tabs.Panel>
          )}
      </Tabs>
    </Container>
  );
}

export default function Prefetch() {
  return (
    <Page title="Profiles">
      <Session>
        <Profiles />
      </Session>
    </Page>
  );
}
