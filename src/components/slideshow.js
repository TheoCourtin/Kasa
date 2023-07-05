﻿import React from "react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slideshow = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const all = pictures.length;

  if (all === 0) {
    return "";
  } else if (all === 1) {
    return (
      <div className="slideshow">
        <img src={pictures[current]} alt="Pictures" className="slideshow-img" />
        <div className="counter">
          {current + 1}/{all}
        </div>
      </div>
    );
  }

  const prev = () => {
    setCurrent(current === 0 ? all - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === all - 1 ? 0 : current + 1);
  };

  return (
    <div className="slideshow">
      <img src={pictures[current]} alt="Pictures" className="slideshow-img" />
      <FaChevronLeft onClick={prev} className="icon-prev">
        Prev
      </FaChevronLeft>
      <FaChevronRight onClick={next} className="icon-next">
        Next
      </FaChevronRight>
      <div className="counter">
        {current + 1}/{all}
      </div>
    </div>
  );
};
export default Slideshow;