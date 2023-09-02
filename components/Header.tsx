import {Navigation} from "./Navigation";
import React from "react";

const NavItems = [
    {label: 'Home', href: '/'},
    {label: 'Blog', href: '/blog'},
    {label: 'About', href: '/about'}
]


const Header = () => {
    return (
        <header>
            <Navigation navLinks={NavItems}/>
        </header>
    )
}

export {Header}