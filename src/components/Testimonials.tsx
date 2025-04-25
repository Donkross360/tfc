import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const testimonials = [
    {
      quote: "Finding The Father's Church was truly life-changing. The community here has become like family, and my faith has grown tremendously.",
      name: "Seun Adekunle",
      role: "Member since 2009",
      image: "/assets/images/seun.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      quote: "I was skeptical about church, but the welcoming atmosphere and genuine people here completely changed my perspective. I feel at home.",
      name: "Ahmed",
      role: "Member since 2018",
      image: "/assets/images/ahmed.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      quote: "The worship is incredible, and the teachings are relevant to my daily life. This church has helped me navigate through difficult times.",
      name: "Mart Young",
      role: "Member since 2010",
      image: "assets/images/mart.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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
    <section className="py-20 bg-warmGray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-gold-100 text-gold-600 rounded-full text-sm font-medium mb-4">Testimonies</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-800 mb-6">
              Lives Being Transformed
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-navy-700 max-w-3xl mx-auto">
              Hear from members of our church family about how God is working in their lives.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
              <div className="text-gold-500 mb-6">
                <Quote size={48} />
              </div>
              <blockquote className="text-xl md:text-2xl text-navy-700 mb-6 italic">
                {testimonials[currentIndex].quote}
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gold-200"
                />
                <div>
                  <p className="font-bold text-navy-800">{testimonials[currentIndex].name}</p>
                  <p className="text-navy-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button 
                onClick={prevTestimonial} 
                className="p-2 rounded-full bg-navy-100 hover:bg-navy-200 text-navy-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-gold-500' : 'bg-navy-200 hover:bg-navy-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial} 
                className="p-2 rounded-full bg-navy-100 hover:bg-navy-200 text-navy-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <a 
              href="#" 
              className="inline-block bg-transparent border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white px-6 py-2 rounded-md transition-colors font-medium"
            >
              Share Your Story
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;