import React from 'react'
import "./workcard.css"
function WorkCard({item}) {
    return (
        <div className="work_card">
            <img src={item.companyLogo} className="work_logo"/>
            <div className="work_info">
                <label className="company_name">{item.company}</label>
                <label className="designation">{item.designation}</label>
                <div className='work_datas'>
                    <label>{item.doj}</label>-<label>{item.dol}</label>
                </div>
                <div className="work_dis">
                    <p>{item.work}</p>
                </div>
            </div>
            
        </div>
    )
}

export default WorkCard
