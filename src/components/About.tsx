
import React from "react";
import { ShieldCheck, Zap, Users } from "lucide-react";

const About = () => {
  const valueCards = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "We constantly push the boundaries of AI to create solutions that are not just effective but revolutionary."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Trust",
      description: "Privacy and security are paramount. We build AI that users can trust with their data and daily routines."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Human-Centered",
      description: "Our technology exists to serve people, designed with empathy and focused on enhancing human capabilities."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-primary text-sm font-medium">About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission & Values</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Founded in Bengaluru, YiPHee is committed to developing AI solutions that make everyday life smoother, more efficient, and more enjoyable for people around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-5 text-gray-900">Transforming Daily Challenges</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At YiPHee, we believe in the power of artificial intelligence to solve real-world problems. Our team of dedicated engineers, designers, and AI specialists work tirelessly to create solutions that are not only technologically advanced but also intuitive and accessible.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Born in the heart of India's technology hub, we combine global expertise with local insights to address challenges that matter to people in their daily lives. From personal productivity to home automation, our innovations are designed to make a meaningful difference.
            </p>
            <div className="flex items-center">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-sm font-medium">{i}</span>
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-500">Join our growing team of innovators</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-6">
            {valueCards.map((card, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl glass"
              >
                <div className="mb-4 p-3 rounded-lg bg-blue-50 inline-block">
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{card.title}</h4>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
