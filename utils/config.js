import {
  IconUser,
  IconCamera,
  IconMicrophone,
  IconPlayerPlay,
  IconSocial,
  IconHeadset,
} from '@tabler/icons';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

export default {
  loremIpsum,

  app: {
    name: 'Spotlight',
    colorScheme: 'light',
    primaryColor: 'dark',
  },

  spotlight: {
    shortcut: [
      '/',
      'ctrl + k',
    ],
    getActions: (router) => [
      {
        title: 'Sign Up',
        description: loremIpsum,
        onTrigger: () => router.push('/sign/up'),
      },
      {
        title: 'Sign In',
        description: loremIpsum,
        onTrigger: () => router.push('/sign/in'),
      },
      {
        title: 'Sign Out',
        description: loremIpsum,
        onTrigger: () => router.push('/sign/out'),
      },
      {
        title: 'Profiles',
        description: loremIpsum,
        onTrigger: () => router.push('/auth/profiles/personal'),
      },
    ],
    searchPlaceholder: 'Search',
    nothingFoundMessage: 'Nothing found',
  },

  profiles: [
    {
      icon: IconUser,
      value: 'personal',
      label: 'Personal',
    },
    {
      icon: IconCamera,
      value: 'actor',
      label: 'Actor',
    },
    {
      icon: IconMicrophone,
      value: 'voiceOverArtist',
      label: 'Voice Over Artist',
    },
    {
      icon: IconPlayerPlay,
      value: 'performer',
      label: 'Performer',
    },
    {
      icon: IconSocial,
      value: 'influencer',
      label: 'Influencer',
    },
    {
      icon: IconHeadset,
      value: 'crew',
      label: 'Crew',
    },
  ],
};
