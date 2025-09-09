'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Take the first step towards homeownership. Get pre-approved in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
            <Link href="/start">
              Get started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg" asChild>
            <Link href="/mortgage-calculator">Try calculator</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}