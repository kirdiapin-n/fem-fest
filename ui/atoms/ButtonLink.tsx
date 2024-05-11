import React from "react";
import { LinkProps } from "types/components";
import { Link } from "ui/atoms";

type TProps = {
  onClick: () => any;
  children: React.ReactNode;
} & Omit<LinkProps, "ref">;

export const ButtonLink = React.memo(({ children, ...props }: TProps) => (
  <Link component="button" variant="body2" {...props}>
    {children}
  </Link>
));
