'use client'

import { usePathname , useRouter } from 'next/navigation'
import React from "react";
import {black,newspaperColor} from "@/assets/color/color";

function ActiveLink({ children, href } : {children : React.ReactNode , href : string}) {
    const path = usePathname()
    const router = useRouter();
    const style = {
        display: "block",
        marginRight: 10,
        background: path === href ? `${black}` : ``,
        color : path === href ? `${newspaperColor}` : `${black}`,
        padding : "5px"
    }

    const handleClick = (e:any) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    )
}

export default ActiveLink