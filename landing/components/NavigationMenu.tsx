import MenuIcon from "@mui/icons-material/Menu";
import { Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import React, { useEffect, useState } from "react";
import { IDS } from "../../constants/landing";

export default function NavigationMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < 200) {
        setIsVisible(true);
      } else if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <Box
      bgcolor="text.primary"
      sx={{
        zIndex: 2,
        display: { xs: "flex", lg: "none" },
        position: "fixed",
        justifyContent: "end",
        width: "100%",
        top: isVisible ? "0" : "-64px", // скрыть или показать шапку
        transition: "top 0.3s",
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
          <MenuIcon
            style={{ color: "black" }}
            sx={{ width: 32, height: 32 }}
          ></MenuIcon>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          mt: "1px",
          "& .MuiMenu-paper": { backgroundColor: "text.primary" },
        }}
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
            <Link href={`#${IDS.ABOUT}`} underline="none" color="black">
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
            <Link href={`#${IDS.SCHEDULER}`} underline="none" color="black">
              лекции
            </Link>
          </Typography>
        </MenuItem>
        {/*<MenuItem onClick={handleClose}>*/}
        {/*  <Typography*/}
        {/*    fontSize="2rem"*/}
        {/*    color="text.primary"*/}
        {/*    fontFamily="Hlebozavod-Medium, serif"*/}
        {/*  >*/}
        {/*    <Link href={`#${IDS.EXHIBITION}`} underline="none" color="black">*/}
        {/*      выставка*/}
        {/*    </Link>*/}
        {/*  </Typography>*/}
        {/*</MenuItem>*/}
        <MenuItem onClick={handleClose}>
          <Typography
            fontSize="2rem"
            color="text.primary"
            fontFamily="Hlebozavod-Medium, serif"
          >
            <Link href={`#${IDS.LECTURERS}`} underline="none" color="black">
              лекторы
            </Link>
          </Typography>
        </MenuItem>
        {/*<MenuItem onClick={handleClose}>*/}
        {/*  <Typography*/}
        {/*    fontSize="2rem"*/}
        {/*    color="text.primary"*/}
        {/*    fontFamily="Hlebozavod-Medium, serif"*/}
        {/*  >*/}
        {/*    <Link href={`#${IDS.MARKET}`} underline="none" color="black">*/}
        {/*      маркет*/}
        {/*    </Link>*/}
        {/*  </Typography>*/}
        {/*</MenuItem>*/}
        {/*<MenuItem onClick={handleClose}>*/}
        {/*  <Typography*/}
        {/*    fontSize="2rem"*/}
        {/*    color="text.primary"*/}
        {/*    fontFamily="Hlebozavod-Medium, serif"*/}
        {/*  >*/}
        {/*    <Link href={`#${IDS.PHOTO}`} underline="none" color="black">*/}
        {/*      фото*/}
        {/*    </Link>*/}
        {/*  </Typography>*/}
        {/*</MenuItem>*/}
      </Menu>
    </Box>
  );
}
