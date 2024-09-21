"use client"

import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from 'next/navigation';


function Navbar() {
    const pathname = usePathname();
    
    let navType = "root"
    if (pathname.startsWith('/dashboard')) {
        navType = "dashboard";
    }

    if (navType === "root") {
        return (
            <div className='flex items-center justify-between p-4 px-8'>
                <div className='flex items-center gap-5'>
                    <Link href={"/"} className='text-xl font-bold'>LOGO</Link>

                    <Link href={"/pricing"} className='hover-underline'>Pricing</Link>
                    <Link href={"/about-us"} className='hover-underline'>About us</Link>
                    <Link href={"/blog"} className='hover-underline'>Blog</Link>
                </div>
                <div className='flex items-center gap-5'>
                    <Button variant="outline">Login</Button>
                    <Button aschild className="flex items-center gap-2">
                        <Link href={"/sign-up"}>Get Started</Link>
                        <ArrowRight size={18} />
                    </Button>
                </div>
            </div>
        )
    }
    else if (navType === "dashboard") {
        return (
            <div className='flex items-center justify-between p-4 px-8'>
                <div className='flex items-center gap-5'>
                    <Link href={"/"} className='text-xl font-bold'>LOGO</Link>

                </div>
                <div className='flex items-center gap-5'>
                    <UserButton/>
                </div>
            </div>
        )
    }
    else {
        throw new Error(`there is not ${type} type`)
    }
}

export default Navbar
