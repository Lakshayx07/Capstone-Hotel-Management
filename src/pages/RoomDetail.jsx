import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { rooms } from '../data/rooms';

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const room = rooms.find(r => r.id === parseInt(id));
  
  if (!room) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Room Not Found</h1>
        <Link to="/rooms" className="btn-primary">
          Back to Rooms
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-primary-600 hover:text-primary-700 mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Rooms
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative">
              <img
                src={room.detailImages[currentImageIndex]}
                alt={room.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                ${room.price}/night
              </div>
            </div>
            
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {room.detailImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index 
                      ? 'border-primary-600 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${room.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Room Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">{room.name}</h1>
              <p className="text-xl  text-gray-900 mb-2">Location: {room.location}</p>
              <p className="text-xl text-gray-600 leading-relaxed">{room.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-gray-200">
              <div className="text-center">
                <div className="text-2xl mb-1">👥</div>
                <div className="font-semibold text-gray-900">Up to {room.guests}</div>
                <div className="text-sm text-gray-600">Guests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">📐</div>
                <div className="font-semibold text-gray-900">{room.size}</div>
                <div className="text-sm text-gray-600">Room Size</div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Room Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {room.amenities.map((amenity, index) => (
                  <motion.div
                    key={amenity}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg"
                  >
                    <span className="text-primary-600">✓</span>
                    <span className="text-gray-700">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <Link
                to="/booking"
                state={{ room }}
                className="w-full btn-primary text-center block"
              >
                Book This Room - ${room.price}/night
              </Link>
              
            </div>

            <div className="bg-accent-50 border border-accent-200 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-accent-800 mb-2">💎 Special Offer</h4>
              <p className="text-accent-700">Book 3 nights or more and save 15% on your stay!</p>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose This Room?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-semibold text-gray-900 mb-2">Premium Location</h3>
              <p className="text-gray-600">Perfect positioning with stunning views and easy access to hotel amenities.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🛏️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Ultimate Comfort</h3>
              <p className="text-gray-600">Luxurious furnishings and premium bedding for the perfect night's rest.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-semibold text-gray-900 mb-2">5-Star Service</h3>
              <p className="text-gray-600">24/7 room service and personalized attention to every detail.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoomDetail;