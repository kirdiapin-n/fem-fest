import React from "react";
import About from "../landing/sections/About";
import Exhibition from "../landing/sections/Exhibition";
import Home from "../landing/sections/Home";
import Lecturers from "../landing/sections/Lecturers";
import Lectures from "../landing/sections/Lectures";
import Market from "../landing/sections/Market";

export default function Index() {
  return (
    <>
      <Home />

      <About />

      <Lectures />

      <Exhibition />

      <Lecturers />

      <Market />
    </>
  );
}
