'use client';

import { Clock, Shield, Calculator, Users } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '3 weeks to close',
    description: 'Get your mortgage in as little as 3 weeks with our streamlined digital process.'
  },
  {
    icon: Shield,
    title: 'Built for you',
    description: 'Better Mortgage is built exclusively for home buyers and refinancers.'
  },
  {
    icon: Calculator,
    title: 'Transparent pricing',
    description: 'No hidden fees. See exactly what youll pay upfront with our mortgage calculator.'
  },
  {
    icon: Users,
    title: 'Expert support',
    description: 'Get guidance from our team of mortgage experts throughout your journey.'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why choose Better?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing the home loan industry with technology, transparency, and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <feature.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}