"use client"

import SidebarEditor from '@/components/shared/Sidebar.editor'
import React, { useState } from 'react'
import sections from "@/utiles/sections.json"
import templates from "@/utiles/templates.json"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import HomePage from '@/components/templates/pages/HomePage'
import ProductPage from '@/components/templates/pages/ProductPage'
import { useSearchParams } from 'next/navigation'
import sectionsData from "@/utiles/sections.json"


function EditorPage() {
  const templateId = useSearchParams().get("templteId")

  const [selectedSection, setSelectedSection] = useState(null)
  const [page, setPage] = useState("home")
  const [customeTemplate, setCustomTemplate] = useState(templates.find((value) => value.id === templateId))

  function handleSectionClick(id) {
    setSelectedSection(sectionsData.filter(section => id.includes(section.id)))
  }
  console.log(selectedSection, "------------")
  return (  
    <div>
      <div className='flex items-center justify-between p-4'>
        <Link href={"/dashboard"} className='flex gap-1 items-center'>
          <ArrowLeft />
          Edit
        </Link>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant={"outline"}>{page}</Button></DropdownMenuTrigger>
            <DropdownMenuContent>
              {Object.keys(customeTemplate.template.pages).map((value, index) => (
                <DropdownMenuItem key={index} onClick={(e) => setPage(value)}>{value}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <p className='text-lg font-bold'>My Store</p>
        </div>
      </div>
      {/* main window */}
      <div className='flex h-full'>
        <SidebarEditor className={"flex-[0.2] border border-gray-100"} sectionIds={customeTemplate.template.pages[page].sections} handleSectionClick={handleSectionClick} />

        <div className='flex-[0.6]'>
          {page === "home" && (<HomePage />)}
          {page === "product" && (<ProductPage />)}
        </div>

        <div className='flex-[0.2] border border-gray-100'>
          {selectedSection ? (
            selectedSection.map((value, index) => {
              (<p key={index}>{value.name}</p>)
              Object.keys(value.props).map((element, idx) => {
                <div>
                  <p key={idx}>{element}</p>
                  <input />
                </div>
              })
            })
          ) : (
            <p>Select to edit</p>
          )}
        </div>
      </div>
    </div>
  )
}


export default EditorPage
