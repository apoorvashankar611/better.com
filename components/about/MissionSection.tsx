'use client';

export function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We believe that everyone should be able to achieve the dream of homeownership. 
              That's why we're working to remove the complexity, reduce the costs, and eliminate 
              the inefficiencies that make getting a mortgage harder than it should be.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By leveraging technology and keeping our customers at the center of everything we do, 
              we're building a better way to buy, sell, and finance homes.
            </p>
          </div>
          <div className="aspect-square bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-1 shadow-2xl">
            <div className="w-full h-full bg-white rounded-3xl p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">B</span>
                  </div>
                </div>
                <p className="text-gray-600 text-lg">Building the future of home finance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}