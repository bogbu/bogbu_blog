'use client'

import {usePathname, useRouter} from 'next/navigation'
import React from "react";

function ActiveLink({children, href}: { children: React.ReactNode, href: string }) {
    const path = usePathname();
    const router = useRouter();

    const handleClick = (e: any) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} className={`${path === href ? `active` : ``} gnbA`}>
            {children}
        </a>
    )
}

export default ActiveLink