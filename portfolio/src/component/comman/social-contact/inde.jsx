import React from 'react'
import { SocialData } from '../../data/social'
import './social.css'

const SocialContact = () => {
    const data=SocialData;
    return (
        <div className="socialcontact">
          {data.map((item)=>{
              return(
                  <a href={item.link}>
                      <div className="social_icons">
                          <img src={item.icon} className="social_icon" target="_blank"/> 
                      </div>
                  </a>
              );
              
          })}
        </div>
    )
}

export default SocialContact
