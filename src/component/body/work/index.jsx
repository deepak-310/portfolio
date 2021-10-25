import React from 'react'
import Separator from "../../comman/saperater";
import { WorkData } from '../../data/work';
import './work.css'
import WorkCard from './workCard';

function Work() {
    const data=WorkData;
    return (
        <div className="work">
         <Separator />
         <label className="section_title">Work</label>
         <div className="work_list">
             {data.map((item)=>{
                 return(
                     <WorkCard item={item}/>
                 )
             })}
         </div>

        </div>
    )
}

export default Work
