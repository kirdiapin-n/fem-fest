import About from "landing/2024/fem-fest/About";
import Contacts from "landing/2024/fem-fest/Contacts";
import Exhibition from "landing/2024/fem-fest/Exhibition";
import Home from "landing/2024/fem-fest/Home";
import Lecturers from "landing/2024/fem-fest/Lecturers";
import Market from "landing/2024/fem-fest/Market";
import Scheduler from "landing/2024/fem-fest/Scheduler";
import NavigationMenu from "landing/components/NavigationMenu";
import React from "react";
import { IDS } from "../../../constants/landing";

const links = [
  { href: IDS.ABOUT, title: "О нас", component: <About /> },
  { href: IDS.SCHEDULER, title: "Расписание", component: <Scheduler /> },
  { href: IDS.LECTURERS, title: "Лекторы", component: <Lecturers /> },
  { href: IDS.EXHIBITION, title: "Выставка", component: <Exhibition /> },
  { href: IDS.MARKET, title: "Маркет", component: <Market /> },
  { href: IDS.CONTACTS, title: "Контакты", component: <Contacts /> },
];

export default function Index() {
  return (
    <>
      <NavigationMenu links={links} />

      <Home />

      {links.map((link) => (
        <React.Fragment key={link.href}>{link.component}</React.Fragment>
      ))}
    </>
  );
}
