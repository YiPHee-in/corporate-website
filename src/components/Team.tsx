
import React from "react";
import { Linkedin, Twitter, Mail, UserCircle } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Team = () => {
  const founder = {
    name: "Abhishek V",
    role: "Founder & CEO",
    bio: "With a passion for AI innovation, Abhishek founded YiPHee to create intelligent solutions that make a positive impact on education and agriculture in India.",
  };

  return (
    <section id="team" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-primary text-sm font-medium">Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The Mind Behind YiPHee</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Meet our founder who is passionate about creating AI solutions that make a difference in education and agriculture.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md rounded-xl overflow-hidden shadow-lg glass">
            <div className="aspect-[4/5] overflow-hidden bg-gray-100 flex items-center justify-center">
              <UserCircle className="w-48 h-48 text-gray-400" strokeWidth={1.5} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-gray-900">{founder.name}</h3>
              <p className="text-primary font-medium mb-3">{founder.role}</p>
              <p className="text-gray-600 mb-4">{founder.bio}</p>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-primary transition-colors duration-300"
                  aria-label={`${founder.name}'s LinkedIn`}
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-primary transition-colors duration-300"
                  aria-label={`${founder.name}'s Twitter`}
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-primary transition-colors duration-300"
                  aria-label={`Email ${founder.name}`}
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-50 border border-gray-200 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
