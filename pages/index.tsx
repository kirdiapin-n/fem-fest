import NavigationMenu from "landing/components/NavigationMenu";
import About from "landing/sections/About";
import Contacts from "landing/sections/Contacts";
import Developing from "landing/sections/Developing";
import Exhibition from "landing/sections/Exhibition";
import Home from "landing/sections/Home";
import Lecturers from "landing/sections/Lecturers";
import Market from "landing/sections/Market";
import Scheduler from "landing/sections/Scheduler";
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

      <Developing />
    </>
  );
}
