import About from "landing/2025/fem-sabat/About";
// import Contacts from "landing/2025/fem-sabat/Contacts";
import Home from "landing/2025/fem-sabat/Home";
import Lecturers from "landing/2025/fem-sabat/Lecturers";
// import Market from "landing/2025/fem-sabat/Market";
import Scheduler from "landing/2025/fem-sabat/Scheduler";
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

      {/*<Market />*/}

      {/*<Contacts />*/}
    </>
  );
}
