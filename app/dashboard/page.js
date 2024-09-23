
import { Button } from '@/components/ui/button'
import templates from "@/utiles/templates.json"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function DashBoardPage() {


  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h1>Select Templates</h1>
      <div>
        {templates.map((template) => (
          <Link href={`/dashboard/editor?templteId=${template.id}`} key={template.id} className='flex flex-col gap-1 border border-gray-400 rounded-md'>
            <Image src={template.photo} alt='template' width={1000} height={1000} className='w-48'/>
            <p>{template.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}


export default DashBoardPage
