import React from 'react';
import { Linkedin, Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';
 import bgimg from "../images/bgimg.png"
function Footer() {
  return (
    <footer className="bg-gray-700  pt-16 pb-1.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="w-16 h-16 ">
              {/* Replace with your actual logo */}
              <img src={bgimg} alt="Company Logo" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm leading-relaxed text-white">
              Transforming digital landscapes with innovative technology solutions and cutting-edge design.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/innov-imagine-582915350/" className="text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/innovimagine?igsh=MWgyd3h2N3JvMWFmdg==" className="text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/18dGf6b7YL/?mibextid=qi2Omg" className="text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
 
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#web" className="text-white transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#app" className="text-white transition-colors">App Development</a>
              </li>
              <li>
                <a href="#ui" className="text-white transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#ai" className="text-white transition-colors">AI Solutions</a>
              </li>
            </ul>
          </div>
 
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#portfolio" className="text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#careers" className="text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#contact" className="text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
 
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className='text-white'>Hyderabad, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <a href="mailto:hello@innovimagine.com" className="text-white transition-colors">
                  innovimagine@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <a href="tel:+917569460743" className="text-white transition-colors">
                  +91 7569460743
                </a>
              </li>
            </ul>
          </div>
        </div>
 
        {/* Bottom Bar */}
        <div className="mt-4 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white">
              © {new Date().getFullYear()} InnovImagine. All rights reserved.
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;