
import Link from "next/link";
export function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-700 py-6 border-t border-gray-300 mt-10">
        <div className="container mx-auto px-6 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Shopping. All rights reserved.</p>
          <div className="flex justify-center md:justify-end space-x-4 mt-2 md:mt-0">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-500 transition">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="text-gray-600 hover:text-gray-500 transition">Terms of Service</Link>
            <span>|</span>
            <Link href="/contact" className="text-gray-600 hover:text-gray-500 transition">Contact Us</Link>
          </div>
        </div>
      </footer>
    );
  }