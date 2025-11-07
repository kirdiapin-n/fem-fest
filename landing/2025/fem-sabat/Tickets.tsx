import { IDS } from "constants/landing";
import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import revolutIcon from "assets/images/revolut_icon.png";
import tinkoffIcon from "assets/images/Tinkoff_Bank_icon.png";
import wiseIcon from "assets/images/wise_icon.png";
import { Section } from "ui/templates/Section";
import { trackTicketClick } from "utils/analytics";

const Price = styled(Typography)(({ theme }) => ({
  fontFamily: "Hlebozavod-Medium, serif",
  fontSize: "3rem",
  lineHeight: 1,
  marginBottom: theme.spacing(2),
}));

const TicketCard = styled(Card)(({ theme }) => ({
  borderRadius: 0,
  boxShadow: "none",
  border: `2px solid ${theme.palette.text.primary}`,
  backgroundColor: theme.palette.background.paper,
}));

export default function Tickets() {
  return (
    <Section title="Покупка билетов" id={IDS.TICKETS}>
      <Stack justifyItems="flex-end" spacing={{ xs: 3, md: 4 }} p={6}>
        <Typography fontSize="1.5rem">Приобрести билет онлайн</Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 4 }}
        >
          <TicketCard>
            <CardContent>
              <Typography variant="overline" color="text.secondary">
                В евро
              </Typography>
              <Price>35 €</Price>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={
                    <img alt="Wise" src={wiseIcon.src} width={20} height={20} />
                  }
                  href="https://wise.com/pay/me/kseniiap262"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackTicketClick("wise", "eur")}
                >
                  Wise
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  startIcon={
                    <img
                      alt="Revolut"
                      src={revolutIcon.src}
                      width={20}
                      height={20}
                    />
                  }
                  href="http://revolut.me/arinak90"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackTicketClick("revolut", "eur")}
                >
                  Revolut
                </Button>
              </Stack>
            </CardContent>
          </TicketCard>

          <TicketCard>
            <CardContent>
              <Typography variant="overline" color="text.secondary">
                В рублях
              </Typography>
              <Price>4000 ₽</Price>

              <Button
                variant="contained"
                color="primary"
                startIcon={
                  <img
                    alt="Т‑банк"
                    src={tinkoffIcon.src}
                    width={20}
                    height={20}
                  />
                }
                href="https://www.tbank.ru/cf/8kIxnljQZLV"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackTicketClick("tinkoff", "rub")}
              >
                Т‑банк
              </Button>
            </CardContent>
          </TicketCard>
        </Stack>

        <Typography fontSize="1.5rem">Купить билеты офлайн</Typography>

        <Typography variant="body2">🔖 Цена билета: 35 €</Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 4 }}
        >
          <TicketCard>
            <CardContent>
              <Typography variant="overline" fontSize="1rem" color="black">
                📌 Будва
              </Typography>
              <Stack spacing={2} mt={1}>
                <Stack spacing={1}>
                  <Button
                    component="a"
                    variant="contained"
                    color="primary"
                    href="https://maps.app.goo.gl/STzkFM8UgVKKVUxk8"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ alignSelf: "flex-start" }}
                  >
                    Kaffa Kaffa
                  </Button>
                  <Typography color="text.secondary" maxWidth={420}>
                    Уютная атмосфера, авторские десерты и вкусный кофе.
                    Идеальное место для встречи с друзьями или быстрого кофе с
                    собой.
                  </Typography>
                </Stack>

                <Stack spacing={1}>
                  <Button
                    component="a"
                    variant="contained"
                    color="primary"
                    href="https://www.instagram.com/nora.performance?igsh=dDU5emFtbjFncXo0"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ alignSelf: "flex-start" }}
                  >
                    Театральная студия Насти Вареник
                  </Button>
                  <Typography color="text.secondary" maxWidth={420}>
                    Театр, где живут, а не играют. Здесь вы найдете голос, тело
                    и сообщество.
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </TicketCard>

          <TicketCard>
            <CardContent>
              <Typography variant="overline" fontSize="1rem" color="black">
                📌 Херцег-Нови
              </Typography>
              <Stack spacing={1} mt={1}>
                <Button
                  component="a"
                  variant="contained"
                  color="primary"
                  href="https://t.me/vratazaleto"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ alignSelf: "flex-start" }}
                >
                  Vrata za leto
                </Button>
                <Typography color="text.secondary" maxWidth={420}>
                  Уголок с эксклюзивными товарами для тела и души.
                </Typography>
              </Stack>
            </CardContent>
          </TicketCard>

          <TicketCard>
            <CardContent>
              <Typography variant="overline" fontSize="1rem" color="black">
                📌 Подгорица
              </Typography>
              <Stack spacing={1} mt={1}>
                <Button
                  component="a"
                  variant="contained"
                  color="primary"
                  href="https://maps.app.goo.gl/TzohVZiCL89LdSWC6"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ alignSelf: "flex-start" }}
                >
                  Bogart
                </Button>
                <Typography color="text.secondary" maxWidth={420}>
                  Насладитесь крафтовым пивом или кофе и спросите билеты на
                  баре.
                </Typography>
              </Stack>
            </CardContent>
          </TicketCard>
        </Stack>

        <Box>
          <Typography>
            Если вы оплатили билет онлайн, пишите{" "}
            <Link href="https://t.me/Anuta_Ozarina">@Anuta_Ozarina</Link>, для
            подтверждения.
          </Typography>
        </Box>
      </Stack>
    </Section>
  );
}
