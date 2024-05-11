import { Box } from "@mui/material";
import { BoxProps } from "@mui/system";
import React from "react";
import { styled } from "utils/styles";

type Props = {
  title?: React.ReactNode;
} & Omit<BoxProps, "title">;

export const Section = ({ children, title, ...props }: Props) => {
  return (
    <StyledSection component={"section"} {...props}>
      {title}
      {children}
    </StyledSection>
  );
};

const StyledSection = styled(Box)(({ theme }) => ({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  minHeight: "100vh",
  padding: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },

  paddingTop: theme.spacing(2),
}));
