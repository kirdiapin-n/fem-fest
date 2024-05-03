import { NotifyContainer } from "features/notifications/containers/NotifyContainer";
import React from "react";
import { Main } from "ui/templates/Main";
import { Page } from "ui/templates/Page";

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Page>
      <Main>{children}</Main>

      <NotifyContainer />
    </Page>
  );
};
