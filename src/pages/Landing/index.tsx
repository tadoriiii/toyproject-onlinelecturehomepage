import React from "react";
import { useWindowSize } from "react-use";

import { Header } from "./Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Landing = () => {
  const { height } = useWindowSize();

  return (
    <div className="LandingJSX" style={{ height: height }}>
      <Header />
      <div className="slickPosition"></div>
    </div>
  );
};
