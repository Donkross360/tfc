import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, MapPin, Music, Book } from 'lucide-react';

const ServiceTimes: React.FC = () => {
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

  const services = [
    {
      day: 'Sunday',
      name: 'Celebration Service',
      times: ['9:00 AM'],
      icon: <Music className="h-6 w-6" />,
      description: 'Contemporary worship, inspiring message, and community',
    },
    {
      day: 'Wednesday',
      name: 'Kingdom Keys Interactive',
      times: ['6:00 PM'],
      icon: <Book className="h-6 w-6" />,
      description: 'Bible study and prayer for spiritual growth',
    },
    {
      day: '1st Fridays',
      name: 'Throneroom Service',
      times: ['6:00 PM'],
      icon: <Music className="h-6 w-6" />,
      description: 'Engaging worship and Prayer sessions',
    },
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-navy-500 text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(26, 42, 87, 0.95), rgba(26, 42, 87, 0.95)), url("/assets/images/gospel.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-white/10 text-gold-300 rounded-full text-sm font-medium mb-4">Join Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Weekly Service Times
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Opportunities throughout the week for worship, community, and spiritual growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-navy-400/50 rounded-lg p-6 border border-navy-300/10 backdrop-blur-sm hover:transform hover:scale-105 transition-transform"
              >
                <div className="flex items-center space-x-3 mb-4 text-gold-400">
                  {service.icon}
                  <h3 className="text-xl font-bold">{service.day}</h3>
                </div>
                <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
                <div className="mb-3">
                  {service.times.map((time, idx) => (
                    <div key={idx} className="flex items-center mb-1">
                      <Clock className="h-4 w-4 mr-2 text-gold-300" />
                      <span>{time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/80 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants} 
            className="mt-16 bg-white/10 rounded-lg p-8 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 mr-2 mt-1 text-gold-400" />
                  <p className="text-white/90">
                    The Father's Church<br />
                    Eden Centre, Jahi District Abuja<br />
                    <span className="text-gold-300">Free parking available</span>
                  </p>
                </div>
                <a 
                  href="https://www.google.com/maps/place/The+Father's+Church,+Jahi,+Abuja/@9.0882223,7.441732,19z/data=!3m1!4b1!4m6!3m5!1s0x104e0acbc107c52d:0xd42352308cb55a5d!8m2!3d9.088221!4d7.4423757!16s%2Fg%2F1yg4lwml_?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
                  className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-md transition-colors font-medium"
                >
                  Get Directions
                </a>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
                <img 
                  src="/assets/images/eden.jpg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Church Building" 
                  className="rounded-lg w-full object-cover h-40 md:h-auto"
                  style={{ maxWidth: '200px' }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTimes;