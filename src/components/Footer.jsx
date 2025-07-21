import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">🏨 LuxeStay</h3>
            <p className="text-gray-300 mb-4">
              Experience luxury and comfort in our premium accommodations. 
              Your perfect getaway awaits.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Rooms', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@luxestay.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Luxury Ave, Paradise City</p>
              <p>🕒 24/7 Customer Support</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2024 LuxeStay Hotel. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;