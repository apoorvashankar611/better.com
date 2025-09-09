'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold">Better</span>
            </div>
            <p className="text-gray-400 text-sm">
              Better is a family of companies serving all your homeownership needs.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <div className="space-y-2">
              <Link href="/mortgage-calculator" className="block text-gray-400 hover:text-white transition-colors">
                Purchase
              </Link>
              <Link href="/mortgage-calculator" className="block text-gray-400 hover:text-white transition-colors">
                Refinance
              </Link>
              <Link href="/mortgage-calculator" className="block text-gray-400 hover:text-white transition-colors">
                HELOC
              </Link>
              <Link href="/mortgage-calculator" className="block text-gray-400 hover:text-white transition-colors">
                Mortgage Calculator
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="/about-us" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Press
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Licensing
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                NMLS
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Better. All rights reserved. NMLS ID #330511
          </p>
        </div>
      </div>
    </footer>
  );
}