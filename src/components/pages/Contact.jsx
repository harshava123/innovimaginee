import React, { useState, useRef } from 'react';
import { Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
 
function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    message: '',
    mobileNumber: '+91'
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'submitted'
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
 
    try {
      await emailjs.sendForm(
        'service_z0sarzp',
        'template_z00i052',
        form.current,
        'eRcv9cAuvAWuhGfw8'
      );
 
      setStatus('submitted');
      setFormData({
        fullName: '',
        email: '',
        service: '',
        message: '',
        mobileNumber: '+91'
      });
    } catch (error) {
      alert('Error sending request: ' + error.message);
      setStatus('idle');
    }
  };
 
  return (
    <div className="w-full bg-black ">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Let's Innovate Together
            </h1>
            <p className="text-lg text-white leading-relaxed">
              Ready to transform your digital vision into reality? Schedule a consultation with
              our expert team and discover how InnovImagine can elevate your technology solutions.
            </p>
            <div className="space-y-4 pt-6">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-800/20 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-white">Direct Line</p>
                  <a href="tel:+919000278794" className="text-lg text-white font-semibold">
                    +91 9000278794
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-800/20 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-white">Email Us</p>
                  <a href="mailto:innovimagine@gmail.com" className="text-lg text-white font-semibold">
                    innovimagine@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/60 p-8 rounded-2xl backdrop-blur-sm shadow-lg">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Your First Name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all outline-none"
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Your Last Name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all outline-none"
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all outline-none"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Mobile Number</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Enter Mobile number"
                    value={formData.mobileNumber}
                    maxLength="13"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all outline-none appearance-none"
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\+91\d{0,10}$/.test(value)) {
                        setFormData({ ...formData, mobileNumber: value });
                      }
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Service of Interest</label>
                <select
                  name="service"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all outline-none"
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select a Service</option>
                  <option value="ui">UI/UX</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Android/IOS Application Development</option>
                  <option value="resume">Resume/CV</option>
                  <option value="consulting">AI Tool Development</option>
                  <option value="seo">Seo & Digital Marketing</option>
                  <option value="software">Software Solutions & Support</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all outline-none resize-none"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${status === 'idle' ? 'bg-purple-600 hover:bg-purple-700 hover:scale-[1.02]' :
                  status === 'sending' ? 'bg-gray-400 cursor-not-allowed' :
                    'bg-green-600 cursor-default'
                  }`}
                disabled={status === 'sending' || status === 'submitted'}
              >
                {status === 'idle' && 'REQUEST CONSULTATION'}
                {status === 'sending' && 'Sending...'}
                {status === 'submitted' && 'Submitted'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;