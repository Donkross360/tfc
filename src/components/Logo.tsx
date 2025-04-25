import React from 'react';
// import logo from '../assets/images/logo.png';

interface LogoProps {
  isScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  return (
    <div className="flex items-center space-x-3">
      <img 
        src="/assets/images/logo.png" 
        alt="The Father's Church Logo" 
        className="max-w-[100px] h-auto object-contain"
      />
      <span className={`font-display font-bold text-xl ${
        isScrolled ? 'text-navy-500' : 'text-white'
      }`}>
        {/* The Father's Church */}
      </span>
    </div>
  );
};

export default Logo;