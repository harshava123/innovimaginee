import React from 'react';
import { Bot, LineChart, Image } from 'lucide-react';

function Ainnov() {
  const aiSolutions = [
    {
      title: "Intelligent Chatbot",
      description: "Advanced conversational AI for customer support",
      icon: <Bot className="w-6 h-6" />,
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning models for data-driven insights",
      icon: <LineChart className="w-6 h-6" />,
    },
    {
      title: "Image Recognition",
      description: "Computer vision solutions for complex visual tasks",
      icon: <Image className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-navy-900 px-4 py-20 relative overflow-hidden">
      {/* Background Animation Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20" />
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 4 + 'px',
              height: Math.random() * 4 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Innovations
          </h2>
          <p className=" text-lg text-white max-w-2xl mx-auto">
            Transformative AI solutions that push the boundaries of technology and innovation
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {aiSolutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gray-700 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/70"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {solution.title}
                </h3>
              </div>
              <p className="text-white">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          {/* <button className="text-white bg-gray-600 hover:bg-purple-700  font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Explore AI Solutions
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Ainnov;