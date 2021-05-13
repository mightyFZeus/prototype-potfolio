import React,{useEffect, useState} from "react";
import Desktop from './Desktop/Desktop'


const Home = ({resume}) => {
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
        <div>
      {isDesktop ? <Desktop resume={resume} /> : (
        <div>I show on 1450px or lower</div>
      )}
    </div>
    </>
  );
};

export default Home;
