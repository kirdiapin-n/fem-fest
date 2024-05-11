import MenuIcon from "@mui/icons-material/Menu";
import { Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { IDS } from "../constants/landing";
import About from "../landing/sections/About";
import Exhibition from "../landing/sections/Exhibition";
import Home from "../landing/sections/Home";
import Lecturers from "../landing/sections/Lecturers";
import Lectures from "../landing/sections/Lectures";
import Market from "../landing/sections/Market";

export default function Index() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        bgcolor="black"
        sx={{
          zIndex: 2,
          display: { xs: "flex", lg: "none" },
          position: "fixed",
          justifyContent: "end",
          width: "100%",
        }}
      >
        <Tooltip title="Menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon sx={{ width: 32, height: 32 }}></MenuIcon>
          </IconButton>
        </Tooltip>
        <Menu
          id="menu"
          aria-labelledby="menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Typography
              fontSize="2rem"
              color="text.primary"
              fontFamily="Hlebozavod-Medium, serif"
            >
              <Link href={`#${IDS.ABOUT}`} underline="none" color="inherit">
                о нас
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              fontSize="2rem"
              color="text.primary"
              fontFamily="Hlebozavod-Medium, serif"
            >
              <Link href={`#${IDS.LECTURES}`} underline="none" color="inherit">
                лекции
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              fontSize="2rem"
              color="text.primary"
              fontFamily="Hlebozavod-Medium, serif"
            >
              <Link
                href={`#${IDS.EXHIBITION}`}
                underline="none"
                color="inherit"
              >
                выставка
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              fontSize="2rem"
              color="text.primary"
              fontFamily="Hlebozavod-Medium, serif"
            >
              <Link href={`#${IDS.LECTURERS}`} underline="none" color="inherit">
                лекторы
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              fontSize="2rem"
              color="text.primary"
              fontFamily="Hlebozavod-Medium, serif"
            >
              <Link href={`#${IDS.MARKET}`} underline="none" color="inherit">
                маркет
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              fontSize="2rem"
              color="text.primary"
              fontFamily="Hlebozavod-Medium, serif"
            >
              <Link href={`#${IDS.PHOTO}`} underline="none" color="inherit">
                фото
              </Link>
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
      <Home />

      <About />

      <Lectures />

      <Exhibition />

      <Lecturers />

      <Market />
    </>
  );
}
