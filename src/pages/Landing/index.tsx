import React, { useEffect } from "react";
import { useWindowSize } from "react-use";

import { Header } from "./Header";
import { useVideo } from "../useVideo";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Landing = () => {
  const { height } = useWindowSize();
  const { getResults } = useVideo();

  useEffect(() => {
    getResults();
  }, [getResults]);

  return (
    <div className="LandingJSX" style={{ height: height }}>
      <Header />
      <div className="slickPosition"></div>
    </div>
  );
};
