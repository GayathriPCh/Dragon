import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import p1 from './p1.png';
import p2 from './p2.png';
import p3 from './p3.png';
import p4 from './p4.jpg';
import p5 from './p5.png';
const items = [
  {
    id: 1,
    title: "SkyQuest (Jan 2024)",
    img: p1,
    desc: "SkyQuest is a static website project dedicated to astronomy, space, and features related to celestial events, stargazing, and night sky photography.",
    link: "https://github.com/GayathriPCh/SKYQUEST", // Example link, replace with actual project URL
  },
  {
    id: 2,
    title: "BeatWave (Aug-Nov 2023)",
    img: p2,
    desc: "BeatWave is a Python-based web application developed using the Django framework that allows users to generate music compositions inspired by visual elements in an image. By mapping each pixel to a frequency value, BeatWave transforms images into unique musical experiences.",
    link: "https://github.com/GayathriPCh/Image-to-music-mapping-with-python-libraries", // Example link, replace with actual project URL
  },
  {
    id: 3,
    title: "EV_Breeze (Oct 2023)",
    img: p3,
    desc: "EV Breeze is a web application designed to help users plan and track their eco-friendly transportation options.",
    link: "https://github.com/GayathriPCh/EV_Breeze"
  },
  {
    id: 4,
    title: "Steller Society (Feb-Apr 2024)",
    img: p4,
    desc: "Steller Society is a space-themed music player website with an integrated chat feature and custom themes. It provides users with a unique and immersive experience while enjoying their favorite music tracks.",
    link: "https://github.com/GayathriPCh/Steller-Society"
  },
  {
    id: 5,
    title: "Kaleido (May 2024)",
    img: p5,
    desc: "Kaleido is a project developed for the Google AI Hackathon,using Gemini API,which aims to assist artists and designers in experimenting with colors by providing them with insights into historical color schemes, the meanings behind different colors, and the ability to swap colors in their artwork to visualize different vibes.  ",
    link: "https://github.com/GayathriPCh/Kaleido"
  },
 
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>Check this out</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1 style={{ fontFamily: "'necosmic-font-f107950', sans-serif" }}>Stellar Archive</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
