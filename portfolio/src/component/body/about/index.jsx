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
                    I like to Code, Design, Innovate and Experiment. I am an enthusiastic and a social person who loves to take up new challenges and learn new skills. I love meeting new people, exchanging ideas and spreading knowledge and positivity.
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
