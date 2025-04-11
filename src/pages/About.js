import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About Our Furniture</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in 2010, we started as a small workshop crafting custom furniture pieces for local clients. 
              Our passion for quality materials and timeless design quickly grew into a full-fledged furniture brand 
              serving customers nationwide.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every piece in our collection is designed with both aesthetics and functionality in mind, 
              using sustainably sourced materials and traditional craftsmanship techniques.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To create beautiful, functional furniture that stands the test of time while maintaining 
              sustainable practices throughout our production process.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• Eco-friendly materials sourcing</li>
              <li>• Handcrafted by skilled artisans</li>
              <li>• Designed for longevity</li>
              <li>• Customer satisfaction guarantee</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-6">Visit Our Showroom</h2>
          <p className="text-gray-700 mb-6">
            123 Furniture Avenue, Design District<br />
            New Delhi, India 110001<br />
            Open Monday-Saturday: 10AM - 7PM
          </p>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a href="tel:+911234567890" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Call Us
            </a>
            <a href="mailto:info@turnicraft.com" className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors">
              Email Us
            </a>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Meet the Developer</h3>
            <p className="text-gray-700 mb-4">
              This e-commerce platform was developed by:
            </p>
            <p className="font-bold text-lg mb-4">Tanishq Saraf</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/whytanishqq/profilecard/?igsh=dzRxZHVoaGRqbnI3" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-pink-600 hover:text-pink-700">
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/tanishq-saraf-04b0a8288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-700 hover:text-blue-800">
                LinkedIn
              </a>
              <a href="https://github.com/Whytanishq" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-800 hover:text-black">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;