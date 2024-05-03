import { useStore } from "effector-react";
import { setNotifyState } from "features/notifications/model/events";
import {
  $notify,
  $notifyMode,
  $notifyState,
} from "features/notifications/model/stores";
import { DescriptionWrapper } from "features/notifications/ui/atoms/DescriptionWrapper";
import { NotifyWrapper } from "features/notifications/ui/atoms/NotifyWrapper";
import SnackbarWrapper from "features/notifications/ui/atoms/Snackbar";
import React from "react";
import { useMountTransition } from "utils/hooks/useMountedTransition";
import { Body } from "ui/atoms/Body";

export const NotifyContainer = () => {
  const notify = useStore($notify);
  const mode = useStore($notifyMode);
  const state = useStore($notifyState);

  const handleClose = React.useCallback(() => setNotifyState("CLOSED"), []);
  const isActive = React.useMemo(() => state === "OPENED", [state]);

  const hasTransitionedIn = useMountTransition(isActive, 500);

  return hasTransitionedIn ? (
    <NotifyWrapper
      delay={3000}
      isActive={isActive}
      onOutsideClick={handleClose}
    >
      <SnackbarWrapper colorScheme={mode}>
        <DescriptionWrapper>
          <Body>{notify.title}</Body>
          <Body>{notify.text}</Body>
        </DescriptionWrapper>
      </SnackbarWrapper>
    </NotifyWrapper>
  ) : null;
};
