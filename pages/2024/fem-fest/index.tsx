import About from "landing/2024/fem-fest/About";
import Contacts from "landing/2024/fem-fest/Contacts";
import Exhibition from "landing/2024/fem-fest/Exhibition";
import Home from "landing/2024/fem-fest/Home";
import Lecturers from "landing/2024/fem-fest/Lecturers";
import Market from "landing/2024/fem-fest/Market";
import Scheduler from "landing/2024/fem-fest/Scheduler";
import NavigationMenu from "landing/components/NavigationMenu";
import React from "react";

export default function Index() {
  return (
    <>
      <NavigationMenu />

      <Home />

      <About />

      <Scheduler />

      <Lecturers />

      <Exhibition />

      <Market />

      <Contacts />
    </>
  );
}
