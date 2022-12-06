import { useState } from "react"
import avatar from "../images/image-avatar.png"
import logo from "../images/logo.svg"
import menu from "../images/icon-menu.svg"
import close from "../images/icon-close.svg"
import {FaShoppingCart} from "react-icons/fa"
import Cart from "./Cart"

export default function Header() {
   const [isOpen, setIsOpen] = useState(false)
   const [CartIsOpen, setCartIsOpen] = useState(false)
    return (
      <>
        <header className="relative flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
         <div className="flex items-center justify-start gap-4">
                <ul className="flex items-center justify-start gap-4">
                     {!isOpen && 
                       <li className="lg:hidden"><button onClick={() => setIsOpen(true)}><img src={menu} alt="logo" className="cursor-pointer" /></button></li> 
                     }
                     {isOpen && 
                      <li className="lg:hidden close"><button onClick={() => setIsOpen(false)}><img src={close} alt="logo" className="w-6 cursor-pointer" /></button></li>
                     }
                    <li><img src={logo} alt="logo" /></li>
                </ul>
             <nav className={isOpen && "open"}>
                <ul >
                   <li>Collections</li>
                   <li>Men</li>
                   <li>Women</li>
                   <li>About</li>
                   <li>Contact</li>
                </ul>
             </nav>
         </div>
         <div >
            <ul className="flex items-center justify-start gap-4">
               <li><button onClick={() => setCartIsOpen(!CartIsOpen)}><FaShoppingCart /></button></li>
               <li>{CartIsOpen && <Cart />}</li>
               <li><img src={avatar} alt="profile-pic" className="w-12" /></li>
            </ul>
         </div>
         </header>
     </>
    )
   }