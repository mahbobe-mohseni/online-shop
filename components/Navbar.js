"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useContext } from "react"; 
import{CartContex}from '../context/Cart'

export default function Navbar() {
  const{state,dispatch}= useContext(CartContex)
  const{cart}=state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 text-gray-900 shadow-lg border-b border-gray-300">
      <nav className="flex h-14 px-8 justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-gray-900 hover:text-gray-600 transition">
          Shopping
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/cart" className="p-2 text-gray-700 hover:text-gray-500 transition">
            Cart
            {cart.cartItems.lenght>0 &&(
              <span className="ml-1 rounded-xl bg-gray-200 px-2 py-1 text-xs font-bold">
                {cart.cartItems.reducer((acc,cur)=>acc+cur.qyt,0)}
              </span>
            )
            
            }
          </Link>
          <Link href="/login" className="p-2 text-gray-700 hover:text-gray-500 transition">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} className="text-gray-900" /> : <Menu size={28} className="text-gray-900" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 text-center p-4 space-y-4 border-t border-gray-300">
          <Link href="/cart" className="block text-gray-700 hover:text-gray-500 transition">
            Cart
          </Link>
          <Link href="/login" className="block text-gray-700 hover:text-gray-500 transition">
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
