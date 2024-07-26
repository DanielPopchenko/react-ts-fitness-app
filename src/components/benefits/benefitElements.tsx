import { IBenefit, SelectedPageEnum } from '@/shared/types';
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';

export const benefits: Array<IBenefit> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'State of the art facilities',
    text: 'Experience the latest in fitness technology and amenities. Our modern equipment and clean, spacious environment are designed to enhance your workout experience and help you achieve your fitness goals.',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert coaches',
    text: 'Our team of certified trainers is dedicated to guiding you every step of the way. With personalized attention and tailored workout plans, our expert coaches help you push your limits and reach your full potential.',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: '100`s of diverse classes',
    text: 'From high-intensity interval training to calming yoga sessions, our extensive class offerings ensure there’s something for everyone. Join a class that fits your goals and interests, and experience the variety and excitement of our fitness programs.',
  },
];
