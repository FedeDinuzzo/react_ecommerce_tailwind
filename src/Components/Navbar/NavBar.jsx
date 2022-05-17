import React, { useState } from "react";
import NavItem from "./NavItem";
import CartWidget from "./CartWidget";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-scroll";
import logo from '../../Images/logo.png';

export default function NavBar() {
    
    //mobile nav
    const [showNav, setShowNav] = useState(false);

    //change navbar color on scrolling
    const [color, setColor] = useState(false);
    
    const changeColor = (() => {
        window.scrollY >= 60 ? setColor(true) : setColor(false)       
    })

    window.addEventListener('scroll', changeColor)

    return (
        <> 
        <nav className={(color ? 'bg-black' : '') + " sticky top-0 z-10 px-1"}>
            <div className="max-w-screen-2xl m-auto justify-between items-center md:flex xl:px-24">
            <div className="flex items-center justify-between">
                <Link to={`/`}>
                    <img className="w-16 p-2 lg:ml-10 cursor-pointer" src={logo} alt="logo" />
                </Link>
                <CartWidget className="md:hidden flex cursor-pointer" />
                {showNav ? (
                    <RiCloseLine
                    onClick={() => setShowNav(!showNav)}
                    className="md:hidden mr-2 text-white block w-10 h-10 p-2 cursor-pointer hover:text-slate-600"
                    />
                ): (
                    <RiMenu4Line
                    onClick={() => setShowNav(!showNav)}
                    className="md:hidden mr-2 text-white block w-10 h-10 p-2 cursor-pointer hover:text-slate-600"
                    />
                )}
            </div>
            <ul className={(showNav ? "right-0" : "-right-full") + " text-white md:static fixed bottom-0 top-14 md:flex md:space-x-7 items-center bg-gray-700 rounded-l-lg md:bg-transparent md:text-white md:w-auto w-6/12 md:space-y-0 space-y-5 p-4 px-8 transition-right"}>
                <Link to="top" smooth={true}><button className="text-lg block hover:underline hover:underline-offset-1"><NavItem content="HOME" to="/" /></button></Link>
                <Link to="shop" smooth={true}><button className="text-lg block hover:underline hover:underline-offset-1"><NavItem content="SHOP" to="/" /></button></Link>
                <Link to="footer" smooth={true}><button className="text-lg hover:underline hover:underline-offset-1">CONTACT</button></Link>
                <CartWidget className="hidden md:flex" />
            </ul>
            </div>
        </nav>
        </>
    );
}
