import { isBefore } from "date-fns";
import { TDay } from "types";

export const isFirstDay = (): TDay => {
  return !isBefore(new Date(), new Date(2024, 5, 1)) ? "second" : "first";
};
