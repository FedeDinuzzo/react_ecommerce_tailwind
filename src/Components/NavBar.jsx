import React from "react";
import NavItem from "./NavItem";
import CartNavigatorIcon from "./CartNavigatorIcon";

export default function NavBar() {
    return (
        <> 
        <nav className="flex justify-between items-center bg-teal-900">
            <a href="/">
                <img className="w-14 h-12 p-2 pl-4" src="./logo192.png" alt="logo" />
            </a>
            <ul className="flex justify-between items-center space-x-7 text-teal-200 p-2 pr-4">
                <NavItem content="Home" href="/home" />
                <NavItem content="Shop" href="/shop" />
                <NavItem content="Contact" href="/contact" />
                <CartNavigatorIcon count={10} />
            </ul>
        </nav>
        </>
    );
}
