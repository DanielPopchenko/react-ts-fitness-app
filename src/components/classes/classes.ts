import { IClass } from '@/shared/types';

import img1 from '@/assets/image1.png';
import img2 from '@/assets/image2.png';
import img3 from '@/assets/image3.png';
import img4 from '@/assets/image4.png';
import img5 from '@/assets/image5.png';
import img6 from '@/assets/image6.png';

export const classes: Array<IClass> = [
  {
    name: 'First class',
    description:
      'Experience a dynamic workout that challenges and invigorates. Our classes are designed to push your limits and enhance your fitness journey with effective, engaging routines.',
    image: img1,
  },
  {
    name: 'Second class',
    description:
      'Join our specialized sessions focused on strength, flexibility, and overall wellness. Tailored to meet diverse needs, these classes offer a comprehensive approach to fitness',
    image: img2,
  },
  {
    name: 'Third class',
    image: img3,
    description:
      'Explore a range of high-energy classes that keep you motivated and engaged. Perfect for those looking to boost their cardio fitness and endurance.',
  },
  {
    name: 'Fourth class',
    description:
      'Experience the benefits of mindful movement with our yoga and Pilates classes. Designed to improve balance, flexibility, and mental well-being.',
    image: img4,
  },
  {
    name: 'Fifth class',
    description:
      'Dive into our strength training classes to build muscle and increase your power. Suitable for all fitness levels, these sessions focus on technique and progression.',
    image: img5,
  },
  {
    name: 'Sixth class',
    image: img6,
    description:
      'Join our group sessions for a fun and motivating workout environment. Our group classes foster community and provide a supportive atmosphere for achieving your fitness goals.',
  },
];
