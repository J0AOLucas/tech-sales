import { Linkedin, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white section-padding">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <img src="/logo.png" alt="Dayvisson Da Silva" className="h-10" />
            <p className="text-gray-300 mb-6">
              Tech Sales Strategist & Speaker helping professionals and organizations 
              unlock opportunity in the AI-powered job market.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#speaking-topics" className="hover:text-white transition-colors">Speaking Topics</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Book Me</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Speaking Reel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Free Resources</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span>dayvisson@techsaleshacker.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dayvisson Da Silva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;