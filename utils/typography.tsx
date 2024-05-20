import React from "react";

export const concatStrings = (
  delimiter: string,
  ...args: React.ReactNode[]
) => (
  <>
    {args
      .filter(Boolean)
      .reduce(
        (acc: React.ReactNode[], curr: React.ReactNode, index: number) => {
          if (index > 0) {
            acc.push(<span key={`delimiter-${index}`}>{delimiter}</span>);
          }
          acc.push(<span key={`element-${index}`}>{curr}</span>);

          return acc;
        },
        []
      )}
  </>
);
