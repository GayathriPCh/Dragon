import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaMedium, FaTwitter, FaInstagram, FaGithub ,FaLink} from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import "./contact.scss";

// Define your motion variants
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

// Styled component for icon with hover effect
const StyledIcon = styled(motion.a)`
  transition: transform 0.3s ease; /* Adding transition for smooth animation */
  cursor: pointer; /* Ensure the cursor changes to pointer on hover */
  color: rgb(162, 255, 0); /* Icon color */
  font-size: 1.5rem; /* Icon size */
  position: relative; /* Ensure relative positioning for tooltips */

  &:hover {
    transform: scale(1.2); /* Enlarge the icon on hover */
  }

  /* Tooltip styling */
  &:hover::before {
    content: attr(title);
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    color: ##7bfc03;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    font-size: 1.5rem;
    top: 3rem; /* Position below the icon */
    left: 50%; /* Centered horizontally */
    transform: translateX(-50%);
    white-space: nowrap;
    opacity: 0; /* Hidden by default */
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::before {
    opacity: 1; /* Show tooltip on hover */
  }
`;

// Styled component for footer
const StyledFooter = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  padding: 1rem;
`;

const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      animate="animate"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <motion.h1 variants={variants}>Beam&nbsp;&nbsp;&nbsp;a&nbsp;&nbsp;&nbsp;Message</motion.h1>
      <motion.div className="icons" variants={variants}>
        {/* Wrap each icon with the StyledIcon component */}
        <StyledIcon href="mailto:p.gayathri.ch@gmail.com" className="icon" variants={variants} title="p.gayathri.ch@gmail.com">
          <FaEnvelope />
        </StyledIcon>
        <StyledIcon href="https://www.linkedin.com/in/gayathri-pch/" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="LinkedIn/@gayathri-pch">
          <FaLinkedin />
        </StyledIcon>
        <StyledIcon href="https://medium.com/@p.gayathri.ch" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="Medium/@p.gayathri.ch">
          <FaMedium />
        </StyledIcon>
        <StyledIcon href="https://github.com/GayathriPCh" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="Github/@GayathriPCh">
          <FaGithub />
        </StyledIcon>
        <StyledIcon href="https://x.com/GayathriP164882" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="Twitter/@GayathriP164882">
          <FaTwitter />
        </StyledIcon>
        <StyledIcon href="https://aspecta.id/u/GayathriPCh" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="Aspecta/GayathriPCh">
          <FaLink />
        </StyledIcon>
         <StyledIcon href="https://gayathri37.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="gayathri37.hashnode.dev">
          <SiHashnode />
        </StyledIcon>
      </motion.div>
     
    </motion.div>
  );
};

export default Contact;
//https://gayathri37.hashnode.dev/