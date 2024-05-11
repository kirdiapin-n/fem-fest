import { Lectures, TLector, Topics } from "../types";

export const getLectures = (
  data: (TLector & { id: string })[],
  day: "first_day" | "second_day"
) =>
  data
    .reduce((prev: Lectures, curr) => {
      const topics = curr.topics as Topics;
      if (!topics[day]) return prev;

      const { author, id } = curr;

      return [...prev, { id, author, topic: topics[day] }] as any;
    }, [] as Lectures)
    .sort((a, b) => {
      const timeA = a.topic.time.split(":").map(Number);
      const timeB = b.topic.time.split(":").map(Number);

      if (timeA[0] !== timeB[0]) return timeA[0] - timeB[0];

      return timeA[1] - timeB[1];
    });
