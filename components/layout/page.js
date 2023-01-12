import React from 'react';
import Head from 'next/head';
import config from '/utils/config';

export default function Page({
  title,
  children,
}) {
  return (
    <>
      <Head>
        <title>
          {`${title} - ${config.app.name}`}
        </title>
      </Head>

      {children}
    </>
  );
}
