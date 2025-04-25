import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const events = [
    {
      title: 'Get Connected',
      date: 'Every weekday',
      time: '1:00 PM',
      location: 'The Ark',
      description: 'A 30 minutes lunch hour fellowship.',
      image: '/assets/images/get-connected.jpeg',
    },
    {
      title: 'Join Us Live',
      date: 'Every Service day',
      time: '@Church time o\'clock',
      location: 'Online',
      description: 'Links : <a href="https://facebook.com/TheFathersChurch" target="_blank" class="text-blue-600 underline">FACEBOOK</a> | <a href="https://thefatherschurch.mixlr.com/" target="_blank" class="text-blue-600 underline">MIXLR</a>  |  <a href="https://www.youtube.com/@TheFathersChurch" target="_blank" class="text-blue-600 underline">YOUTUBE</a>',
      image: '/assets/images/live.jpeg',
    },
    {
      title: 'Virtue Conference',
      date: 'July 5-7, 2025',
      time: 'All Day',
      location: 'Main Auditorium',
      description: 'Three days of inspiration, worship, and community for Queens.',
      image: '/assets/images/klm.jpeg',
    },
  ];

  return (
    <section id="events" className="py-20 bg-warmGray-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-gold-100 text-gold-600 rounded-full text-sm font-medium mb-4">Get Involved</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800 mb-6">
              Events
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-navy-700 max-w-3xl mx-auto">
              Join us for these special gatherings designed to help you connect with God and our community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-800 mb-2">{event.title}</h3>
                  <div className="flex items-center text-navy-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-gold-500" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-navy-600 mb-2">
                    <Clock className="h-4 w-4 mr-2 text-gold-500" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-navy-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2 text-gold-500" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-navy-600 text-sm mb-4" 
                     dangerouslySetInnerHTML={{ __html: event.description }}></p>
                  <button className="text-gold-500 hover:text-gold-600 font-medium transition-colors inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <a 
              href="#" 
              className="inline-block bg-navy-500 hover:bg-navy-600 text-white px-6 py-3 rounded-md transition-colors font-medium"
            >
              View All Events
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;