"use client";

import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { Menu as LucideMenu, X } from "lucide-react"; // Lucide icons
import { CartContext } from "../context/Cart";
import { useSession } from "next-auth/react";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react"; // Headless UI
import DropDown from "./DropDown";

// LinkBox component
export function LinkBox({ children }) {
  return (
    <div className="p-2 text-gray-700 hover:text-gray-500 transition">
      {children}
    </div>
  );
}

// Navbar component
export default function Navbar() {
  const { status, data: session } = useSession();
  const { state } = useContext(CartContext);
  const { cart } = state;
  const { cartItems } = cart;
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  return (
    <header className="bg-gray-100 text-gray-900 shadow-lg border-b border-gray-300">
      <nav className="flex h-14 px-8 justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-gray-900 hover:text-gray-600 transition"
        >
          Shopping
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/cart"
            className="p-2 text-gray-700 hover:text-gray-500 transition"
          >
            Cart
            {items.length > 0 && (
              <span className="ml-1 rounded-xl bg-gray-200 px-2 py-1 text-xs font-bold">
                {items.reduce((acc, cur) => acc + cur.qty, 0)}
              </span>
            )}
          </Link>

          {/* User Session */}
          {status === "loading" ? (
            <LinkBox>Loading...</LinkBox>
          ) : session?.user ? (
            <HeadlessMenu as="div" className="relative inline-block text-left">
              <HeadlessMenu.Button className="p-2 text-gray-700 hover:text-gray-500 transition">
                {session.user.name}
              </HeadlessMenu.Button>

              <Transition
                as="div"
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <HeadlessMenu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 rounded-xl shadow-lg focus:outline-none">
                  <div className="py-2">
                    <HeadlessMenu.Item>
                      {({ active }) => (
                        <DropDown
                          href="/profile"
                          className={`block px-4 py-2 text-sm ${
                            active ? "bg-gray-100 text-gray-700" : "text-gray-700"
                          }`}
                        >
                          Profile
                        </DropDown>
                      )}
                    </HeadlessMenu.Item>
                    <HeadlessMenu.Item>
                      {({ active }) => (
                        <DropDown
                          href="/logout"
                          className={`block px-4 py-2 text-sm ${
                            active ? "bg-gray-100 text-gray-700" : "text-gray-700"
                          }`}
                        >
                          Logout
                        </DropDown>
                      )}
                    </HeadlessMenu.Item>
                  </div>
                </HeadlessMenu.Items>
              </Transition>
            </HeadlessMenu>
          ) : (
            <Link
              href="/login"
              className="p-2 text-gray-700 hover:text-gray-500 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={28} className="text-gray-900" />
          ) : (
            <LucideMenu size={28} className="text-gray-900" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 text-center p-4 space-y-4 border-t border-gray-300">
          <Link
            href="/cart"
            className="block text-gray-700 hover:text-gray-500 transition"
          >
            Cart
          </Link>
          <Link
            href="/login"
            className="block text-gray-700 hover:text-gray-500 transition"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
