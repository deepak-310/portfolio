import React from 'react'
import './header.css'
import { useState } from 'react'

// importing components
import Web from './web'
import Mobile from './mobile'
function Header() {
    const [isOpen, setIsOpen ]=useState(false);
    return (
        <div className="header">
            <div className="logo">
                Portfolio
            </div>
            <div className="menu">
                <div className="web_menu">
                    <Web/>
                </div>
                <div className="mobile_menu">
                    <div onClick={()=>setIsOpen(!isOpen)}>
                    <i class="fas fa-bars menu_icon"></i>
                    </div>
                    {isOpen &&<Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
        </div>
    )
}

export default Header
