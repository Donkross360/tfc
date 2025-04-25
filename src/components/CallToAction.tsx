import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Gift } from 'lucide-react';

const CallToAction: React.FC = () => {
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

  return (
    <section 
      id="cta" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/images/praise.jpg?auto=compress&cs=tinysrgb&w=1920")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-white/10 text-gold-300 rounded-full text-sm font-medium mb-4">Join Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Your Journey Starts Here
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              We'd love to welcome you to The Father's Church. Here's how you can get connected.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gold-500 p-4 rounded-full">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">Plan Your Visit</h3>
              <p className="text-white/80 text-center mb-6">
                We can't wait to meet you! Fill out the form below, and we'll have a welcome gift waiting when you arrive.
              </p>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-gold-500">
                    <option value="" className="bg-navy-800">Select a Service</option>
                    <option value="sunday-9am" className="bg-navy-800">Sunday, 9:00 AM</option>
                    <option value="sunday-11am" className="bg-navy-800">Sunday, 11:30 AM</option>
                    <option value="wednesday" className="bg-navy-800">Wednesday, 7:00 PM</option>
                  </select>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-md font-medium transition-colors"
                >
                  Plan My Visit
                </motion.button>
              </form>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gold-500 p-4 rounded-full">
                  <Gift className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">Give Online</h3>
              <p className="text-white/80 text-center mb-6">
                Your generosity enables our church to continue our mission and outreach in our community and beyond.
              </p>
              <div className="space-y-4">
                {/* <div className="grid grid-cols-3 gap-2">
                  {['$25', '$50', '$100', '$250', '$500', 'Custom'].map((amount, index) => (
                    <button 
                      key={index}
                      className="py-2 px-3 border border-white/30 rounded-md text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
                    >
                      {amount}
                    </button>
                  ))}
                </div> */}
                <div>
                  <input 
                    type="text" 
                    placeholder="Custom Amount" 
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-gold-500">
                    <option value="" className="bg-navy-800">Select Fund</option>
                    <option value="general" className="bg-navy-800">General Offering</option>
                    <option value="missions" className="bg-navy-800">Missions</option>
                    <option value="building" className="bg-navy-800">Building Fund</option>
                    <option value="youth" className="bg-navy-800">Youth Ministry</option>
                  </select>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-md font-medium transition-colors"
                >
                  Give Now
                </motion.button>
                <p className="text-white/60 text-sm text-center">
                  Secure payments powered by Stripe. Click for more <a href="#" className="underline hover:text-gold-300">giving options</a>.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;