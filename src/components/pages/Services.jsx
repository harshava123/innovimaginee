import React from 'react';
const services = [
  {
    title: 'Web Application Development',
    description: 'Custom, scalable web solutions that drive business growth and user engagement.',
    icon: '💻',
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps for iOS and Android with seamless user experiences.',
    icon: '📱',
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end web applications with robust front-end and back-end technologies.',
    icon: '🛠️',
  },
  {
    title: 'AI Tool Applications',
    description: 'Innovative AI solutions tailored to transform your business processes.',
    icon: '🤖',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design creating intuitive and engaging digital interfaces.',
    icon: '🎨',
  },
  {
    title: 'Digital Marketing',
    description: 'Promotion of products or services through digital channels and social media.',
    icon: '🌐',
  },
  {
    title: 'Software Support',
    description: 'Continuous support and maintenance to ensure optimal software performance.',
    icon: '🛡️',
  },
];
 
function Services() {
  return (
    <section className="w-full bg-black py-20">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Our Innovative Services</h2>
          <p className="mt-4 text-lg text-white">
            Transforming digital landscapes with cutting-edge technological solutions tailored to your unique business needs.
          </p>
        </div>
 
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-start transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-white">{service.description}</p>
              <span className="mt-4 text-white text-sm font-medium">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default Services;
 
 