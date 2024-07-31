import "./hero.scss";
import { useState } from "react";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  const [showIframe, setShowIframe] = useState(false);

  const toggleIframe = () => {
    setShowIframe(!showIframe);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "../hero/cv.pdf"; // Update this to the path of your CV file
    link.download = "Gayathri_P_CV.pdf";
    link.click();
  };

  const connectLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/gayathri-pch/"; // Update this to your LinkedIn profile URL
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>GAYATHRI P</motion.h2>
          <motion.h1 variants={textVariants}>19 year old tech enthusiast</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={downloadCV}>
              Download CV
            </motion.button>
            <br />
            <br />
            <motion.button variants={textVariants} onClick={connectLinkedIn}>
              Let's connect linkedin
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
