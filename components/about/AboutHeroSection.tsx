'use client';

export function AboutHeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            We're making homeownership simpler, faster, and most importantly, more accessible
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Better is a family of companies serving all your homeownership needs. 
            We started with the simple idea that getting a mortgage should be easier.
          </p>
        </div>
      </div>
    </section>
  );
}