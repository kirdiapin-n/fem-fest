import { AppContainer } from "features/app/containers/AppContainer";
import { HeadContainer } from "features/app/containers/HeadContainer";
import { ThemeProviderContainer } from "features/theme/container/ThemeProviderContainer";
import type { AppProps } from "next/app";
import "normalize.css/normalize.css";
import React from "react";
import { usePageTracking } from "utils/analytics";
import "styles/index.css";
import "fonts/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  usePageTracking();

  return (
    <ThemeProviderContainer>
      <HeadContainer />
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ThemeProviderContainer>
  );
};

export default App;
