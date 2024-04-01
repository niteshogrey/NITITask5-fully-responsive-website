import React from "react";
import { FaPlane, FaLock, FaHeadset } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import "./icon.css";

const Icon = () => {
  return (
    <div className="icons-container">
      <div className="icons">
        <i>
          <FaPlane />
        </i>
        <div className="content">
          <h3>free shipping</h3>
          <p>order over $100</p>
        </div>
      </div>
      <div className="icons">
        <i>
          <FaLock />
        </i>
        <div className="content">
          <h3>secure payment</h3>
          <p>100% secure payment</p>
        </div>
      </div>
      <div className="icons">
        <i>
        <FaClockRotateLeft />
        </i>
        <div className="content">
          <h3>easy returns</h3>
          <p>10 days returns</p>
        </div>
      </div>
      <div className="icons">
        <i>
          <FaHeadset />
        </i>
        <div className="content">
          <h3>24/7 support</h3>
          <p>call us anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Icon;
