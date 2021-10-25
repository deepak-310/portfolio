import React from "react";
import "./contact.css";
import Separator from "../../comman/saperater";
import SocialContact from "../../comman/social-contact/inde";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section_title">Contact</label>
      <div className="contact_contaner">
        <div className="contact_left">
          <p>Want to get in touch Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="downlod_btn">
          <a
            download
            href={require("../../../asscits/deepak-resume.pdf").default}
          >
            <i class="fas fa-download"></i>
            Downlod Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
