
import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "Solutions", href: "#solutions" },
        { name: "Pricing", href: "#" },
        { name: "Case Studies", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Team", href: "#team" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Support", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block">
              <span className="text-primary font-display font-bold text-3xl">YiPHee</span>
            </a>
            <p className="mt-4 text-gray-600 max-w-md">
              Enhancing everyday life with intelligent, adaptive AI solutions. Founded in Bengaluru, serving the world.
            </p>
            <div className="flex space-x-4 mt-6">
              {["twitter", "linkedin", "facebook", "instagram"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={`Follow on ${social}`}
                >
                  <span className="capitalize">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="font-bold text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href} 
                      className="text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} YiPHee AI Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="text-gray-600 text-sm">
              Made with
            </span>
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            <span className="text-gray-600 text-sm">
              in Bengaluru, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
