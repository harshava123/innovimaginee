import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
function Pricing() {
  const pricingPlans = [
    {
      name: "Startup Essentials",
      price: "499",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Enterprise Solution",
      price: "1999",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      name: "Scale Pro",
      price: "999",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
  ];

  return (
    <div className="  ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent & Flexible Pricing
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Customized pricing solutions tailored to your business needs, with scalable
            options for startups and enterprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-gray-700 rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="space-y-6">
                {/* Plan Name */}
                <h3 className="text-xl font-semibold text-white">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-purple-600">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500 ml-1"></span>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}

              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <Link to="/contact"
            className="text-pink-500 hover:text-pink-600 font-medium transition-colors duration-200"
          >
            Contact Our Sales Team
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing;