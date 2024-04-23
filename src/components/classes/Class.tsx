import { IClass } from '@/shared/types';
import React from 'react';

const overlayStyles = `
  p-5 absolute z-30 flex h-[370px] w-[450px] flex-col
  items-center justify-center whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90
`;

const Class = ({ description, image, name }: IClass) => {
  return (
    <li className="relative mx-5 inline-block h-[370px] w-[450px]">
      <div className={`${overlayStyles}`}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={`${image}`} className="object-fill w-full h-full" />
    </li>
  );
};

export default Class;
