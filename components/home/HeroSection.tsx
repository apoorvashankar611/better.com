'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="flex items-center space-x-2 text-green-600">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium">Rated 4.9 out of 5</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            The rate you deserve
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Proudly helping Americans find better rates on home loans since 2016. 
            Get pre-approved in as little as 3 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg" asChild>
              <Link href="/start">
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg" asChild>
              <Link href="/mortgage-calculator">Calculate payment</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-2xl font-bold text-gray-900">$100B+</div>
              <div className="text-sm text-gray-600">Funded to date</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">400K+</div>
              <div className="text-sm text-gray-600">Customers served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">25%</div>
              <div className="text-sm text-gray-600">Avg. savings</div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
            <div className="w-full h-full bg-white rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-12 h-12 bg-green-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Your Home Awaits</h3>
                <p className="text-gray-600">Simple, fast, and digital mortgage experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}