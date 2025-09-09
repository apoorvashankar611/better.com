'use client';

import { Heart, Zap, Users, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'We put our customers at the center of everything we do, designing products and experiences that truly serve their needs.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We leverage technology to eliminate inefficiencies and create better experiences for homeowners.'
  },
  {
    icon: Users,
    title: 'Transparency',
    description: 'We believe in clear communication and honest pricing. No hidden fees, no surprises.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every interaction, constantly improving our products and services.'
  }
];

export function ValuesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide us in everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <value.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}