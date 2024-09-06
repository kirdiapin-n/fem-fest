import { NotifyContainer } from "features/notifications/containers/NotifyContainer";
import React from "react";
import { Main } from "ui/templates/Main";
import { Page } from "ui/templates/Page";
import { Footer } from "../../../layout/Footer";

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Page>
      <Main>{children}</Main>

      <NotifyContainer />

      <Footer />
    </Page>
  );
};
