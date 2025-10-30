import Head from "next/head";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

export const HeadContainer = React.memo(() => {
  const router = useRouter();
  const { title, description } = useMemo(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      const path = router.asPath;
      // Fem Fest by explicit route
      if (path.includes("/2024/fem-fest")) {
        return {
          title: "Fem Fest",
          description: "Reforum Space Budva",
        };
      }

      // Fem Sabat by main domain
      if (
        hostname.startsWith("fem-sabat") ||
        path.includes("fem-sabat") // fallback for Vercel previews, local dev, etc
      ) {
        return {
          title: "Fem Sabat",
          description: "Akademja Znanja",
        };
      }
    }

    // Default (if environment does not provide infos)
    return {
      title: "Fem Sabat",
      description: "Akademja Znanja",
    };
  }, [router.asPath]);

  return (
    <Head>
      <title>{title}</title>
      <link href="/static/favicon.ico" rel="shortcut icon" />
      <meta content="viewport-fit=cover width=device-width" name="viewport" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:URL" content="/static/fem_community_logo.jpg" />
      <meta property="og:image" content="/static/fem_community_logo.jpg" />
    </Head>
  );
});
