import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { rooms } from '../data/rooms';

const Rooms = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Luxury Rooms</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated selection of premium accommodations, 
            each designed to provide the ultimate comfort and luxury experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Link
              key={room.id}
              to={`/room/${room.id}`}
              className="block"
            >
              <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full font-semibold">
                  ${room.price}/night
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{room.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <span className="mr-2">👥</span>
                    <span>{room.guests} guests</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <span className="mr-2">📐</span>
                    <span>{room.size}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 3 && (
                    <span className="text-gray-500 text-sm">
                      +{room.amenities.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="text-center">
                  <div className="bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg group-hover:bg-primary-700 transition duration-300">
                    Tap to View Details
                  </div>
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Can't find the perfect room? Contact our team for personalized recommendations.</p>
          <button className="btn-primary">
            Contact Concierge
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Rooms;