import React, { useState, useEffect } from "react";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  const handleHover = () => {
    setHovered(true);
  };

  const handleUnhover = () => {
    setHovered(false);
  };

  return (
    <div className={`custom-cursor ${hovered ? "hovered" : ""}`}
         style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      <div className="circle"></div>
      <div className="ring"></div>
      <div className="second-ring"></div>

      {/* Optional: Add hover effect listeners */}
      <div className="hover-listener"
           onMouseEnter={handleHover}
           onMouseLeave={handleUnhover}></div>
    </div>
  );
};

export default Cursor;
