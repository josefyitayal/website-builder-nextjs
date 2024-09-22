"use client"

import React, { useState } from 'react'
import sectionsData from "@/utiles/sections.json"

const BodySectionRenderer = ({section}) => {
    const {id, type, props} = section

    switch (type) {
        case "body-hero":
            return <HeroSection {...props} />
    }

}


function Dune({templete, selectedPage}) {
    if (selectedPage === "home") {
        return <homePage body={templete.page.home.body}/>
    }

}



function homePage({body}) {
    const [sectionsDate, setSectionsDate] = useState([sectionsData])
    const lists = []
    const sections = body.sections
    return (
        <div>
            {sections.map((sectionId, index) => {
                sectionsData.filter((section) => section.id === sectionId)
            })}
        </div>
    )
}

export default Dune
