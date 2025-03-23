
import React, { useState } from "react";
import { MapPin, Phone, Mail, Check } from "lucide-react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Here you would normally send the data to your server
    setFormData({ name: "", email: "", message: "" });
    
    // Reset form submitted status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Visit us",
      details: "Tech Park, Koramangala, Bengaluru, Karnataka 560034, India"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call us",
      details: "+91 80 4123 7890"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email us",
      details: "hello@yiphee.ai"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-primary text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Contact Us</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Have questions about our AI solutions or want to schedule a demo? Reach out to our team!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Let's start a conversation</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-blue-50">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Follow us</h3>
              <div className="flex space-x-4">
                {["twitter", "linkedin", "facebook", "instagram"].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                    aria-label={`Follow on ${social}`}
                  >
                    <span className="capitalize">{social.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a message</h3>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 outline-none resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-medium shadow-md hover:shadow-xl"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
