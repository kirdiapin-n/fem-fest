import { LectureType, TLector } from "types";

export const getLectures = (
  data: TLector[],
  day: "first" | "second",
  room: "big" | "small"
) =>
  data
    .reduce((prev: LectureType[], curr, index) => {
      if (curr.topic.day !== day || curr.topic.room !== room) return prev;

      return [...prev, { ...curr, id: index }];
    }, [])
    .sort((a, b) => {
      const timeA = a.topic.time.split(":").map(Number);
      const timeB = b.topic.time.split(":").map(Number);

      if (timeA[0] !== timeB[0]) return timeA[0] - timeB[0];

      return timeA[1] - timeB[1];
    });
