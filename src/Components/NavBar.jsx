import React, { useState } from "react";
import NavItem from "./NavItem";
import CartWidget from "./CartWidget";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";


export default function NavBar() {

    const [showNav, setShowNav] = useState(false);

    return (
        <> 
        <nav className="md:flex justify-between items-center bg-slate-800 sticky top-0 z-10 md:px-2">
            <div className="flex items-center justify-between">
                <a href="/">
                    <img className="w-16 h-14 p-2" src="./logo192.png" alt="logo" />
                </a>
                <CartWidget count={10} className="md:hidden flex" />
                {showNav ? (
                    <RiCloseLine
                    onClick={() => setShowNav(!showNav)}
                    className="md:hidden mr-2 text-slate-200 block w-10 h-10 p-2 cursor-pointer"
                    />
                ): (
                    <RiMenu4Line
                    onClick={() => setShowNav(!showNav)}
                    className="md:hidden mr-2 text-slate-200 block w-10 h-10 p-2 cursor-pointer"
                    />
                )}
            </div>
            <ul className={(showNav ? "right-0" : "-right-full") + " md:static fixed bottom-0 top-14 md:flex md:space-x-7 items-center bg-slate-200 md:bg-transparent md:text-slate-200 md:w-auto w-6/12 md:space-y-0 space-y-5 p-4 px-8 transition-right"}>
                <NavItem content="Home" href="/home"/>
                <NavItem content="Shop" href="/shop" />
                <NavItem content="Contact" href="/contact" />
                <CartWidget count={10} className="hidden md:flex" />
            </ul>
        </nav>
        </>
    );
}
