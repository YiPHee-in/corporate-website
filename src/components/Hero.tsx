
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-[85vh] flex items-center pt-16 pb-16 px-6 md:px-12 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -right-[30%] w-[70%] h-[70%] bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[20%] w-[50%] h-[50%] bg-blue-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 w-full">
        <div className="flex flex-col justify-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-primary text-sm font-medium">AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Simplifying Lives with <span className="text-primary">Intelligent</span> Technology
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Founded in Bengaluru, YiPHee creates AI solutions that solve everyday challenges and enhance quality of life.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#solutions" 
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 font-medium shadow-md hover:shadow-xl flex items-center gap-2 group"
            >
              Explore Solutions
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 rounded-full border border-gray-300 hover:border-primary transition-all duration-300 font-medium text-gray-900 hover:text-primary"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className="flex items-center justify-center lg:justify-end">
          <img 
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
            alt="AI Innovation" 
            className="w-full max-w-lg rounded-2xl shadow-2xl object-cover"
            style={{ aspectRatio: "4/3" }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
