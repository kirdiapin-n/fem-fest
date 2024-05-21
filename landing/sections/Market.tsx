import { IDS } from "constants/landing";
import { Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import data from "api/products.json";
import { Icons } from "icons";
import React from "react";
import { TProduct } from "types";
import { Photo } from "ui/atoms/Photo";
import { Stack } from "ui/atoms/Stack";
import { Section } from "ui/templates/Section";

function Product(props: TProduct) {
  const { product, contact, author_name, day } = props;
  const { description, photo_url, name } = product;

  return (
    <Stack direction="column">
      <Photo url={photo_url} withoutFilters />

      <Stack direction="column" spacing={0}>
        <Typography align="center">
          <u>{name}</u>
        </Typography>

        <Typography fontSize="small" align="center">
          {day}
        </Typography>

        <Typography>
          Автор: <b>{author_name}</b>
        </Typography>

        {description && (
          <Typography whiteSpace="pre-wrap">О себе: {description}</Typography>
        )}
      </Stack>

      <Stack justifyContent="center">
        {contact.telegram && (
          <IconButton component="a" href={contact.telegram}>
            <Icons.Telegram />
          </IconButton>
        )}
        {contact.instagram && (
          <IconButton component="a" href={contact.instagram}>
            <Icons.Instagram />
          </IconButton>
        )}
      </Stack>
    </Stack>
  );
}

export default function Market() {
  return (
    <Section id={IDS.MARKET} title={"Маркет"}>
      <Grid container spacing={4}>
        {data.map((props, index) => (
          <Grid key={index} item xs={4} md={2}>
            <Product {...props} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
