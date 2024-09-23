"use client"

import React from 'react'
import sectionsData from "@/utiles/sections.json"

function SidebarEditor({ sectionIds, className, handleSectionClick }) {
    console.log(sectionIds, "yyyyyyyyyyyyyy")
    let sections = sectionsData.filter(section => sectionIds.includes(section.id));
    
    return (
        <div className={`${className} `}>
            {sections.map((eachSection) => (
                <div key={eachSection.id}>
                    <p onClick={() => handleSectionClick(eachSection.id)} className='text-lg font-semibold hover:cursor-pointer'>{eachSection.name}</p>
                    {Object.keys(eachSection.props).map((element, index) => (
                        <p key={index} className='pl-4'>{element}</p>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SidebarEditor
