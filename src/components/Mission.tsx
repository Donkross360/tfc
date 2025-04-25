import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Mission: React.FC = () => {
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

  const values = [
    {
      title: "God is Love",
      description: "and He loves all people. It is His desire to reach out to those who are poor, oppressed, widowed or orphaned, and to heal the broken hearted. - Psalm 7:5-6, 1 John 4:16",
      icon: "❤️",
    },
    {
      title: "Faith",
      description: "Is acting on the word of God - Habakkuk 2:4, 2 Corithians 5:7",
      icon: "✝️",
    },
    {
      title: "The Bible",
      description: "Is the infallible word of God, inspired by the holy spirit and contains every answer to man's problems - 2 Timothy 3:16-17, 2 Peter 1:20-21 ",
      icon: "📖",
    },
    {
      title: "Relationship with God",
      description: "we can have a personal relationship with God through salvation, God's free gift to man. It is not a result of what we do, but only available through God's Unearned favour. - Ephesians 2:8-9, Romans 5:1",
      icon: "💞",
    },
  ];

  return (
    <section id="mission" className="py-20 bg-warmGray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-gold-100 text-gold-600 rounded-full text-sm font-medium mb-4">What we Believe</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800 mb-6">
              Our Mission & Values
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-navy-700 max-w-3xl mx-auto">
             In The Father’s Church, there is room enough for every one to manifest the gifts and callings of God, through the Ministry of the Holy Spirit. We pray that you encounter God through the materials you find on this website, and that this encounter guides you into a joyful, fruitful and purposeful life in our Lord and Saviour, Jesus Christ.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 rounded-full p-3 text-2xl">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-700 mb-2">{value.title}</h3>
                    <p className="text-navy-600">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 bg-navy-500 rounded-lg p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-3/5">
                <h3 className="text-2xl font-bold mb-4">Our Vision Statement</h3>
                <p className="text-white/90 mb-6">
                  "The Father's Church
                  Is An Assembly Of Believers Committed To Revealing The Fatherhood Of Almighty God To This Generation Through Sound Biblical Teachings And Coresponding Moral Conduct."
                </p>
                <a 
                  href="#" 
                  className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-md transition-colors font-medium"
                >
                  Learn More About Us
                </a>
              </div>
              <div className="md:w-2/5 mt-6 md:mt-0 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-6xl">✨</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;