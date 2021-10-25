import React from 'react'
import SocialContact from '../../comman/social-contact/inde'
import './about.css'

function About() {
    return (
        <div className="about">
            <div className="about_top">
                <div className="about_info">
                    Hello there,I am <br/>
                    <span className="info_name">Deepak Chouhan.</span><br/>
                    I Love experimenting with the web.
                </div>
                <div className="about_img">
                    <img src={require("./Coding-bro.png").default}  className="image"/>

                </div>

            </div>
            <div className="about_bottom">
               <SocialContact />
            </div>
        </div>
    )
}

export default About
