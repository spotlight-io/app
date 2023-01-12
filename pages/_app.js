import React from 'react';
import Head from 'next/head';
import {
  useRouter,
} from 'next/router';
import axios from 'axios';
import {
  SWRConfig,
} from 'swr';
import {
  MantineProvider,
  AppShell,
} from '@mantine/core';
import {
  SpotlightProvider,
} from '@mantine/spotlight';
import config from '/utils/config';
import Page from '/components/layout/page';
import Header from '/components/layout/header';
import '/styles/styles.css';

axios.defaults.baseURL = '/api';
axios.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');
  if (token) {
    request.headers.authorization = `Bearer ${token}`;
  }

  return request;
});

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Page title="App">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <SWRConfig value={{
        errorRetryCount: 0,
        revalidateOnFocus: false,
        fetcher: async (resource, init) => {
          const response = await axios.get(resource, init);
          return response.data;
        },
      }}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: config.app.colorScheme,
            primaryColor: config.app.primaryColor,
            components: {
              Input: {
                styles: (theme) => ({
                  icon: {
                    marginLeft: 10,
                    marginRight: 10,
                    width: theme.fontSizes.lg,
                  },
                }),
              },
              Button: {
                styles: (theme) => ({
                  leftIcon: {
                    width: theme.fontSizes.lg,
                  },
                }),
              },
              Tabs: {
                styles: (theme) => ({
                  tabIcon: {
                    width: theme.fontSizes.xl,
                  },
                  panel: {
                    marginTop: theme.fontSizes.xs,
                  },
                }),
              },
            },
          }}
        >
          <SpotlightProvider
            shortcut={config.spotlight.shortcut}
            actions={config.spotlight.getActions(router)}
            searchPlaceholder={config.spotlight.searchPlaceholder}
            nothingFoundMessage={config.spotlight.nothingFoundMessage}
          >
            <AppShell
              padding="xs"
              styles={(theme) => ({
                main: {
                  background: theme.colors.gray[0],
                },
              })}
              header={(
                <Header />
              )}
            >
              <Component {...pageProps} />
            </AppShell>
          </SpotlightProvider>
        </MantineProvider>
      </SWRConfig>
    </Page>
  );
}
