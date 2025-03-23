
import React from "react";
import { GraduationCap, MapPin, BookOpen, Wheat } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: <GraduationCap className="w-10 h-10 text-white" />,
      title: "Tunior - Intelligent Learning Platform",
      description: "An AI-powered education platform that teaches kids their curriculum while identifying and nurturing their passions, guiding them towards early career development.",
      color: "bg-blue-500"
    },
    {
      icon: <Wheat className="w-10 h-10 text-white" />,
      title: "Farmie AI - Smart Agriculture",
      description: "A comprehensive AI solution for rural Indian farmers that helps improve crop yields, suggest optimal crop rotation, identify plant diseases, and analyze soil nutrition.",
      color: "bg-green-600"
    }
  ];

  return (
    <section id="solutions" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-primary text-sm font-medium">Our Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">AI-Powered Innovation</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Discover how our cutting-edge AI solutions can transform education and agriculture in India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <div className={`${solution.color} p-6`}>
                <div className="w-16 h-16 rounded-lg bg-white/10 backdrop-blur-lg flex items-center justify-center mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{solution.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <a 
                  href="#contact" 
                  className="text-primary font-medium flex items-center"
                >
                  Learn more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 font-medium shadow-md hover:shadow-xl"
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
