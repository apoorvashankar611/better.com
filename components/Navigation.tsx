'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Better</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/mortgage-calculator" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Buy
            </Link>
            <Link href="/mortgage-calculator" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Refinance
            </Link>
            <Link href="/mortgage-calculator" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              HELOC
            </Link>
            <Link href="/about-us" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              About
            </Link>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-gray-600" />
              <span className="text-gray-700 font-medium">Call (415) 523-8837</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/start">Sign in</Link>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/start">Get started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <Link 
              href="/mortgage-calculator" 
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Buy
            </Link>
            <Link 
              href="/mortgage-calculator" 
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Refinance
            </Link>
            <Link 
              href="/mortgage-calculator" 
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              HELOC
            </Link>
            <Link 
              href="/about-us" 
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/start">Sign in</Link>
              </Button>
              <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                <Link href="/start">Get started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}