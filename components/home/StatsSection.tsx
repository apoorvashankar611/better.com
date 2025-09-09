'use client';

const stats = [
  { number: '$100B+', label: 'Total funding' },
  { number: '400,000+', label: 'Customers served' },
  { number: '4.9/5', label: 'Customer rating' },
  { number: '25%', label: 'Average savings' }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by hundreds of thousands
          </h2>
          <p className="text-xl text-gray-600">
            Join the Better community and experience the difference
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}