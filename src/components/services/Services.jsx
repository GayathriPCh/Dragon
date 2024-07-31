import { useRef } from "react";
import "./services.scss"; // Assuming you keep the SCSS file name as services.scss
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "HTML/CSS",
  "Python",
  "Java",
  "C",
  "SQL",
  "MongoDB",
  "Git/GitHub",
  "ExpressJS",
  "Django",
  "AWS Fundamentals",
  "LINUX/UNIX",
  "TypeScript",
];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Greetings, Earthlings. <br /> I am Gayathri, a computer science student from the far reaches of the tech universe.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="https://avatars.githubusercontent.com/u/132088009?v=4" alt="Profile Picture" />
          <h1>Skills and Expertise</h1>
        </div>
        <div className="skillsContainer">
          <div className="skillsRow scrollRight">
            {skills.map((skill, index) => (
              <div key={index} className="skillItem">
                {skill}
              </div>
            ))}
          </div>
          <div className="skillsRow scrollLeft">
            {skills.map((skill, index) => (
              <div key={index} className="skillItem">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <motion.div className="textContainer" variants={variants}>
          <p>
            My mission involves crafting intricate web designs, exploring the depths of artificial intelligence, navigating the vast clouds of computing, uncovering the secrets of blockchain, and fortifying the realms of cybersecurity. Join me in discussing the most groundbreaking trends that are propelling the future of your technological world.
          </p>
          <hr />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
