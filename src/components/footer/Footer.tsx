import React from 'react';
import Logo from '@/assets/Logo.png';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const flexBetween = 'flex items-center justify-between';
  return (
    <footer className={`${flexBetween} bg-primary-100 w-full py-6 px-32`}>
      <img src={Logo} alt="logo" />
      <div className={`${flexBetween}w-4/5 gap-10`}>
        <div className={`${flexBetween}`}>
          <FaPhoneAlt className="mr-3 text-lg" />
          <p className="">+1 (123) 544-4432</p>
        </div>
        <div className={`${flexBetween}`}>
          <MdEmail className="mr-3 text-lg" />
          <p className="">fitnessapp@email.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
