'use client';

const team = [
  {
    name: 'Vishal Garg',
    role: 'CEO & Founder',
    bio: 'Vishal founded Better with the vision of making homeownership more accessible through technology.'
  },
  {
    name: 'Erik Bernhardsson',
    role: 'CTO',
    bio: 'Erik leads our technology team, building the digital infrastructure that powers Better.'
  },
  {
    name: 'Sarah Wilson',
    role: 'Head of Operations',
    bio: 'Sarah ensures our operations run smoothly and our customers receive exceptional service.'
  },
  {
    name: 'David Kim',
    role: 'Head of Product',
    bio: 'David drives product strategy and innovation, creating tools that simplify homeownership.'
  }
];

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet our team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The people behind Better, working to make homeownership accessible for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">{member.name.charAt(0)}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-green-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}