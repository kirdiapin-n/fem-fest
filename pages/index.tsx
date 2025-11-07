import About from "landing/2025/fem-sabat/About";
import Contacts from "landing/2025/fem-sabat/Contacts";
import Donations from "landing/2025/fem-sabat/Donations";
import Home from "landing/2025/fem-sabat/Home";
import Lecturers from "landing/2025/fem-sabat/Lecturers";
import Scheduler from "landing/2025/fem-sabat/Scheduler";
import Tickets from "landing/2025/fem-sabat/Tickets";
import NavigationMenu from "landing/components/NavigationMenu";
import React from "react";
import { IDS } from "../constants/landing";

export const routes = [
  { href: IDS.SCHEDULER, title: "Расписание", component: <Scheduler /> },
  { href: IDS.TICKETS, title: "Покупка билетов", component: <Tickets /> },
  { href: IDS.LECTURERS, title: "Лекторки", component: <Lecturers /> },
  { href: IDS.DONATIONS, title: "Донаты", component: <Donations /> },
  { href: IDS.ABOUT, title: "О нас", component: <About /> },
  { href: IDS.CONTACTS, title: "Контакты", component: <Contacts /> },
];

export default function Index() {
  return (
    <>
      <NavigationMenu links={routes} />

      <Home />

      {routes.map((route) => (
        <React.Fragment key={route.href}>{route.component}</React.Fragment>
      ))}
    </>
  );
}
