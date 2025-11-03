import { IDS } from "constants/landing";
import {
  Box,
  Typography,
  Stack,
  Button,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import qrcode from "assets/images/qrcode.jpeg";
import React from "react";
import { Section } from "ui/templates/Section";
import { trackDonationClick } from "utils/analytics";

export default function Donations() {
  return (
    <Section id={IDS.DONATIONS} title="Донаты">
      <Stack spacing={4} alignItems="center">
        <Typography variant="body1" fontSize="2rem" textAlign="center">
          Поддержите наше сообщество! <br />
          Вы можете помочь нам пожертвованием в криптовалюте USDT (TRC20) или
          через Т-Банк.
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
        >
          {/* Криптовалюта */}
          <Card sx={{ minWidth: 320 }}>
            <CardContent>
              <Typography variant="body1" fontSize="1.3rem">
                Криптовалюта USDT (TRC20)
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={2}>
                Публичный адрес (скопируйте для перевода):
              </Typography>
              <Box
                sx={{
                  fontFamily: "monospace",
                  wordBreak: "break-all",
                  fontSize: "1.1rem",
                  bgcolor: "#fafbfa",
                  p: 1,
                  borderRadius: 1,
                  mt: 1,
                }}
              >
                0xdb9573284eD127793A26Daa34c4B8AAe72B89893
              </Box>
              <Button
                sx={{ mt: 2, mb: 1 }}
                variant="contained"
                fullWidth
                component={Link}
                href="https://link.trustwallet.com/send?address=0xdb9573284eD127793A26Daa34c4B8AAe72B89893&asset=c60_t0xdAC17F958D2ee523a2206206994597C13D831ec7"
                target="_blank"
                onClick={() => trackDonationClick("trust_wallet")}
              >
                Оплатить через Trust Wallet
              </Button>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                pt={2}
              >
                <img
                  src={qrcode.src}
                  alt="QR-код для доната"
                  width={120}
                  height={120}
                  style={{ borderRadius: 8 }}
                />
              </Box>
            </CardContent>
          </Card>
          {/* T-Bank */}
          <Card sx={{ minWidth: 320 }}>
            <CardContent>
              <Typography variant="body1" fontSize="1.3rem" mb={2}>
                Перевод в Т-Банк
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                href="https://www.tbank.ru/cf/9q2J6kIxtsl"
                target="_blank"
                onClick={() => trackDonationClick("tbank")}
              >
                Открыть страницу Т-Банка
              </Button>
            </CardContent>
          </Card>
        </Stack>
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          mt={5}
        >
          Спасибо вам за поддержку! Каждый перевод помогает развитию нашего
          сообщества и организации новых мероприятий.
        </Typography>
      </Stack>
    </Section>
  );
}
