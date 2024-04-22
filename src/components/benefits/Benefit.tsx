import { SelectedPageEnum } from '@/shared/types';
import { motion } from 'framer-motion';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
  setSelectedPage: (value: SelectedPageEnum) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit = ({ icon, text, title, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="rounded-full border-2 border-gray-100 bg-gray-100 p-4">
          {icon}
        </div>
      </div>

      <h3 className="font-extrabold">{title}</h3>
      <p className="my-3">{text}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPageEnum.ContactUs)}
        href={`#${SelectedPageEnum.ContactUs}`}
      >
        <p>Learn more</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
