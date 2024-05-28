import { INTL } from "constants/intl";
import Head from "next/head";
import React from "react";
import { intl } from "utils/intl";

export const HeadContainer = React.memo(() => {
  return (
    <Head>
      <title>{intl(INTL.APP.NAME)}</title>
      <link href="/static/favicon.ico" rel="shortcut icon" />
      <meta content="viewport-fit=cover width=device-width" name="viewport" />

      <meta property="og:type" content="article" />
      <meta property="og:title" content="fem fest" />
      <meta property="og:description" content="reforum space budva" />

      <meta property="og:URL" content="/static/fem_community_logo.jpg" />
      <meta property="og:image" content="/static/fem_community_logo.jpg" />
    </Head>
  );
});
