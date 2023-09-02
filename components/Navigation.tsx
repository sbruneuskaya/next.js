'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";
import React from "react";

type NavLink = {
    label: string
    href: string
}

type Props = {
    navLinks: NavLink[]
}

const Navigation = ({navLinks}: Props) => {
    const pathName = usePathname()
    return <>{
                navLinks.map((el) => {
                        const isActive = pathName === el.href;

                        return (
                            <Link href={el.href} key={el.label}
                                  className={isActive ? 'active' : ''}
                                  // style={{borderBottom: isActive ? '2px solid red' : '2px solid transparent'}}
                            >
                                {el.label}
                            </Link>
                        )
                    }
                )
            }
        </>

}

export {Navigation}