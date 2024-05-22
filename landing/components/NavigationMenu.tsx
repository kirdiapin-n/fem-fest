import { IDS } from "constants/landing";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";

const StyledLink = styled(Link)({
  color: "black",
  fontSize: "2rem",
  fontFamily: "Hlebozavod-Medium, serif",
  textDecoration: "none",
});

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
          <StyledLink href={`#${IDS.ABOUT}`}>о нас</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StyledLink href={`#${IDS.SCHEDULER}`}>лекции</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StyledLink href={`#${IDS.EXHIBITION}`}>выставка</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StyledLink href={`#${IDS.LECTURERS}`}>лекторы</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StyledLink href={`#${IDS.MARKET}`}>маркет</StyledLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <StyledLink href={`#${IDS.CONTACTS}`}>контакты</StyledLink>
        </MenuItem>
      </Menu>
    </Box>
  );
}
