import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, X } from 'lucide-react';

const PastorMessage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section 
      className="py-20 bg-navy-500 text-white"
      style={{
        background: 'linear-gradient(to right, #1A2A57 50%, #152246 50%)',
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row">
            <motion.div 
              variants={itemVariants} 
              className="md:w-1/2 p-6 md:p-12"
            >
              <span className="inline-block px-3 py-1 bg-white/10 text-gold-300 rounded-full text-sm font-medium mb-4">Welcome Message</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                A Word From Our Pastor
              </h2>
              <div className="w-20 h-1 bg-gold-500 mb-6"></div>
              <div className="prose prose-lg prose-invert">
                <p className="mb-4">
                  "Welcome to The Father's Church! We're a community built on love, acceptance, and spiritual growth. No matter where you are in your journey, there's a place for you here."
                </p>
                <p className="mb-4">
                  "Our church is a place where you can experience God's presence, build meaningful relationships, and discover your divine purpose. We believe that faith is not just about Sunday services, but about how we live every day."
                </p>
                <p className="mb-6">
                  "I invite you to join us this weekend and experience the difference that a loving heavenly Father and church community can make in your life."
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src="/assets/images/pst.jpg?auto=compress&cs=tinysrgb&w=300" 
                      alt="Pastor Ikenna" 
                      className="w-16 h-16 rounded-full object-cover border-2 border-gold-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Pastor Ikenna Okeke</h4>
                    <p className="text-white/80">Senior Pastor</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="md:w-1/2 p-6 md:p-12 flex items-center justify-center"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl w-full max-w-md group cursor-pointer" onClick={handlePlayClick}>
                <img 
                  src="/assets/images/pst.jpg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Pastor Welcome Message" 
                  className="w-full object-cover h-72 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-900/40 flex items-center justify-center group-hover:bg-navy-900/30 transition-colors">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-10 w-10 text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">Watch Welcome Video</h3>
                  <p className="text-white/80 text-sm">3:24 minutes</p>
                </div>
              </div>
              
              {isPlaying && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
                  <div className="relative w-full max-w-4xl">
                    <button 
                      className="absolute -top-12 right-0 text-white hover:text-gold-300 transition-colors flex items-center space-x-2"
                      onClick={() => setIsPlaying(false)}
                    >
                      <span>Close</span>
                      <X className="w-6 h-6" />
                    </button>
                    <div className="relative w-full overflow-hidden rounded-lg">
                      <div className="aspect-w-16 aspect-h-9">
                        <iframe
                          src="https://www.youtube.com/embed/Ch9_uXRgRO0?autoplay=1&rel=0"
                          title="Welcome to The Father's Church"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PastorMessage;