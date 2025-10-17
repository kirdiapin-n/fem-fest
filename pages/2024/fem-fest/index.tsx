import About from "landing/2024/sections/About";
import Contacts from "landing/2024/sections/Contacts";
import Exhibition from "landing/2024/sections/Exhibition";
import Home from "landing/2024/sections/Home";
import Lecturers from "landing/2024/sections/Lecturers";
import Market from "landing/2024/sections/Market";
import Scheduler from "landing/2024/sections/Scheduler";
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
