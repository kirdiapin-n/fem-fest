import { Box, Typography } from "@mui/material";
import { BoxProps } from "@mui/system";
import React from "react";
import { styled } from "utils/styles";

type Props = {
  title?: React.ReactNode;
} & Omit<BoxProps, "title">;

export const Section = ({ children, title, ...props }: Props) => {
  return (
    <StyledSection component={"section"} {...props}>
      {title && (
        <StyledTitle bgcolor={"text.primary"}>
          <Typography color={"black"} variant="h1" fontSize="3rem">
            {title}
          </Typography>
        </StyledTitle>
      )}
      <StyledWrapper>{children}</StyledWrapper>
    </StyledSection>
  );
};

const StyledSection = styled(Box)(() => ({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  minHeight: "100vh",
  overflowX: "hidden",
}));

const StyledTitle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

const StyledWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));
