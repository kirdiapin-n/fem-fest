import { TLector } from "../types";

export const getLectures = (
  data: (TLector & { id: string })[],
  day: "first" | "second",
  room: "big" | "small"
) =>
  data
    .filter(({ topic }) => topic.day === day && topic.room === room)
    .sort((a, b) => {
      const timeA = a.topic.time.split(":").map(Number);
      const timeB = b.topic.time.split(":").map(Number);

      if (timeA[0] !== timeB[0]) return timeA[0] - timeB[0];

      return timeA[1] - timeB[1];
    });
