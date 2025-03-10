import React from "react";
import tutions from "../images/edu.png";
import match from "../images/fas.png";
import expense from "../images/cal.png";
 
const projects = [
  {
    title: "Expense Tracker",
    description: "A simple web app to track your daily expenses",
    technologies: ["ReactNative", "firebase",],
    image: expense, // Replace with actual image URL
    testimonial: "Their solution helped us save over $10,000 in operational costs."
  },
  {
    title: "Match Ur Fit",
    description: "where you can find your perfect match for your fitness goals",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    image: match, // Replace with actual image URL
    testimonial: "Their solution increased our online sales by 300%."
  },
  {
    title: "InnovTuitions",
    description: "Interactive offline learning management system",
    technologies: ["React", "Node js", ],
    image: tutions, // Replace with actual image URL
    testimonial: "Seamless learning experience for our global students."
  }
];
 
const Portfolio = () => {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Our Project Portfolio
        </h2>
        <p className="mt-3 text-white">
          Transforming innovative ideas into cutting-edge digital solutions across diverse industries.
        </p>
 
        {/* Portfolio Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-xl shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-white mt-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-400 text-white text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-4 italic text-white border-l-4 border-white pl-4">
                  "{project.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Portfolio;