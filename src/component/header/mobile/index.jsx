import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close_item" onClick={() => setIsOpen(!isOpen)}>
        <i class="fas fa-times"></i>
      </div>
      <div className="mobile_options">
        <div className="mobile_option">
          <a href="#project">
            <i class="fas fa-file options_icon"></i>Project
          </a>
        </div>
        <div className="mobile_option">
          <a href="#skills">
            <i class="fas fa-laptop-code options_icon"></i>Skills
          </a>
        </div>
        <div className="mobile_option">
          <a href="#work">
            <i class="fas fa-briefcase options_icon"></i>Work
          </a>
        </div>
        <div className="mobile_option">
          <a href="#contact">
            <i class="fas fa-user options_icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
