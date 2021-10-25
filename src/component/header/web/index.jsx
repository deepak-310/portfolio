import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web_options">
        <a href="#project">
          <i class="fas fa-file options_icon"></i>Project
        </a>
      </div>
      <div className="web_options">
        <a href="#skills">
          <i class="fas fa-laptop-code options_icon"></i>Skills
        </a>
      </div>
      <div className="web_options">
        <a href="#work">
          <i class="fas fa-briefcase options_icon"></i>Work
        </a>
      </div>
      <div className="web_options">
        <a href="#contact">
          <i class="fas fa-user options_icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
