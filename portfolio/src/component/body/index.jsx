import React from 'react'

import './body.css'
// improting components
import About from './about/index'
import Contact from './contact/index'
import Projects from './projects/index'
import Skills from './skills/index'
import Work from './work/index'

function body() {
    return (
        <div className="body">
            <section id="about">
                <About/>
            </section>
            <section id="project">
                <Projects/>
            </section>
            <section id="skills">
                <Skills/>
            </section>
            <section id="work">
                <Work/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
        </div>
    )
}

export default body
