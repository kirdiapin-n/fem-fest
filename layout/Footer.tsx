import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { Icons } from "icons";
import React from "react";
import developers from "../api/developers.json";

export const Footer = () => {
  return (
    <Stack
      component="footer"
      flexWrap="wrap"
      direction="column"
      bgcolor="text.primary"
      spacing={4}
    >
      <Typography pt={4} px={4} color="black" variant="h1" fontSize="3rem">
        Разработка
      </Typography>

      <Stack flexWrap="wrap" direction="row" justifyContent="space-between">
        {developers.map(({ name, contacts, role }) => (
          <Stack spacing={1} p={4} key={name}>
            <Typography fontSize="1.3rem">{name}</Typography>

            <Typography fontSize="0.8rem">{role}</Typography>

            <Stack direction="row">
              <IconButton component="a" href={contacts.telegram}>
                <Icons.Telegram />
              </IconButton>

              {contacts.email && (
                <IconButton component="a" href={contacts.email}>
                  <Icons.Mail />
                </IconButton>
              )}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
