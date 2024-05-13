import { sample } from "effector";
import { createGate } from "effector-react";
import { setTheme } from "features/theme/model/events";
import { getTheme } from "features/theme/utils/getTheme";

export const Gate = createGate();

sample({
  clock: Gate.open,
  fn: () => getTheme("light"),
  target: setTheme,
});
