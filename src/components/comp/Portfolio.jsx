import React from "react";
import tutions from "../images/edu.png";
import match from "../images/fas.png";
import expense from "../images/cal.png";
 
const projects = {
  webApplications: [
    {
      title: "SSR CHEM",
      description: "Web application",
      technologies: ["React Js", "TailwindCSS",],
      image: "https://ssrchem.vercel.app/static/media/logo.d21094c497be2866076e.png",
    },
    {
      title: "ProgMarketing",
      description: "Web application",
      technologies: ["React Js", "TailwindCSS", "Node Js", "Express Js"],
      image: "https://digitallearning.eletsonline.com/wp-content/uploads/2019/04/Digital-Marketing.jpg",
    },
    {
      title: "Match Your Fit",
      description: "Web application",
      technologies: ["Next.js", "TypeScript", "MongoDB"],
      image: "https://www.attitudetallyacademy.com/Blog/wp-content/uploads/2020/06/attitude.jpg",
    },
    {
      title: "InnovTuitions",
      description: "Web application",
      technologies: ["React", "Node js"],
      image: "https://www.chandigarhhelp.com/wp-content/uploads/2021/08/home-tuition-in-Panchkula.jpg",
    },
    {
      title: "Garuda Motors",
      description: "Web application",
      technologies: ["React Js", "Styled Components", "Node Js", "Express Js"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqgi_YDRvWM-21vR3ewjuoZ3MN13achFhDQ&s",
    },
    {
      title: "Design Studios",
      description: "Web application",
      technologies: ["React Js", "TailwindCSS",],
      image: "https://windsorpatania.com/wp-content/uploads/2024/05/Sustainable-Interior-Materials.jpg",
    },
   
  ],
  mobileApplications: [
    {
      title: "Expense Tracker",
      description: "Mobile application",
      technologies: ["ReactNative", "firebase"],
      image: expense,
    },
    {
      title: "Farm Cart",
      description: "Mobile application",
      technologies: ["ReactNative"],
      image: "https://media.istockphoto.com/id/870915532/photo/man-holding-crate-ob-fresh-vegetables.jpg?s=612x612&w=0&k=20&c=k2dXOI-wxUy7lX77Pm90vU6TJXmAAv5VtK60ZZHIyCA=",
    },
   
  ],
  aiMlProjects: [
    {
      title: "AI Bot",
      description: "AI&ML",
      technologies: ["Python", "TensorFlow", "NLP"],
      image: "https://wesoftyou.com/wp-content/uploads/2025/01/robot-1280x720_0.jpg",
    },
    {
      title: "Breast Cancer Detection",
      description: "Machine learning project",
      technologies: ["Python", "Streamlit", "Dataset"],
      image: "https://blogs.iiit.ac.in/wp-content/uploads/2023/10/oralCancer.jpeg",
    },
    {
      title: "Solar Panel Defect Detection",
      description: "Machine learning project",
      technologies: ["Python", "Streamlit", "Dataset"],
      image: "https://www.pv-magazine.com/wp-content/uploads/2021/09/09026_Above_Drone_opt-1200x900.jpeg",
    },
    {
      title: "Waste Management Classification",
      description: "Machine learning project",
      technologies: ["Python", "Streamlit", "Dataset","Yolo"],
      image: "https://www.opensourceforu.com/wp-content/uploads/2023/07/detection-of-plastic-on-sea.jpg",
    },
    {
      title: "Mood Tracker",
      description: "Machine Learning",
      technologies: ["Python", "Streamlit","Machine Learning"],
      image: "https://pamojaeducation.com/wp-content/uploads/2020/06/Psych-blog_mood-swings.jpg",
    },
  ],
};
 
const Portfolio = () => {
  const renderProjectSection = (title, projects, icon) => (
    <div className="mb-4">
      <div className="flex items-center space-x-3 mb-8">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
 
  return (
    <section className="w-full bg-black py-20">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Our Project Portfolio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming innovative ideas into cutting-edge digital solutions across diverse industries.
          </p>
        </div>
 
        {/* Web Applications Section */}
        {renderProjectSection("Web Applications", projects.webApplications, "💻")}
 
        {/* Mobile Applications Section */}
        {renderProjectSection("Mobile Applications", projects.mobileApplications, "📱")}
 
        {/* AI & ML Projects Section */}
        {renderProjectSection("AI & Machine Learning", projects.aiMlProjects, "🤖")}
      </div>
    </section>
  );
};
 
export default Portfolio;
 