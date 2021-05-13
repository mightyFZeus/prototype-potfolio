import React, { useEffect, useState } from "react";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";

const Home = ({ resume }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <div>{isDesktop ? <Desktop resume={resume} /> : <Mobile />}</div>
    </>
  );
};

export default Home;
