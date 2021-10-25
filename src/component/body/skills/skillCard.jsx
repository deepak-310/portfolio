import React from 'react'
import './skillcard.css'

function skillCard({skill}) {
    return (
        <div className='skill_card'>
            <div className="skill_icon">{skill.icon}</div>
            <label className="skill_name">{skill.name}</label>

            
        </div>
    )
}

export default skillCard