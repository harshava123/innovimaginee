import React,{ useState } from 'react';
import { Phone, Mail } from 'lucide-react';
 
function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'submitted'
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
 
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
 
      const result = await response.json();
      if (response.ok) {
        setStatus('submitted');
      } else {
        alert('Error sending consultation request: ' + result.error);
        setStatus('idle');
      }
    } catch (error) {
      alert('Error sending request: ' + error.message);
      setStatus('idle');
    }
  };
 
  return (
    <div className="min-h-screen bg-navy-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Let's Innovate Together
          </h1>
          <p className=" text-lg text-white leading-relaxed">
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
        
      </div>
    </div>
  );
}
 
export default Contact;