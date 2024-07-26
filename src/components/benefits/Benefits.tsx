import { IBenefit, SelectedPageEnum } from '@/shared/types';
// import {
//   AcademicCapIcon,
//   HomeModernIcon,
//   UserGroupIcon,
// } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import HeadingText from '@/shared/HeadingText';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

import { benefits } from './benefitElements';

// ! we tell ts that this is an array of objects
// const benefits: Array<IBenefit> = [
//   {
//     icon: <HomeModernIcon className="h-6 w-6" />,
//     title: 'State of the art facilities',
//     text: 'Experience the latest in fitness technology and amenities. Our modern equipment and clean, spacious environment are designed to enhance your workout experience and help you achieve your fitness goals.',
//   },
//   {
//     icon: <AcademicCapIcon className="h-6 w-6" />,
//     title: 'Expert coaches',
//     text: 'Our team of certified trainers is dedicated to guiding you every step of the way. With personalized attention and tailored workout plans, our expert coaches help you push your limits and reach your full potential.',
//   },
//   {
//     icon: <UserGroupIcon className="h-6 w-6" />,
//     title: '100`s of diverse classes',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, corrupti animi est sapiente, qui sit unde quis dicta nulla ad earum autem iste quidem quasi itaque reiciendis eligendi, aspernatur beatae!',
//   },
// ];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

interface IProps {
  setSelectedPage: (value: SelectedPageEnum) => void;
}

const Benefits = ({ setSelectedPage }: IProps) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        // ! FOR HIGHLIGHTING WHERE WE ARE
        onViewportEnter={() => setSelectedPage(SelectedPageEnum.Benefits)}
      >
        {/* Header section  */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5 md:my-5"
        >
          <HeadingText>MORE THAN JUST A GYM.</HeadingText>
          <p className="my-5 text-sm">
            At Evogym, we redefine fitness with state-of-the-art facilities, expert
            coaches, and a diverse range of classes. We are committed to providing an
            exceptional experience that goes beyond traditional workouts. Our members
            enjoy a holistic approach to health and wellness in an environment that
            fosters growth and achievement.
          </p>
        </motion.div>

        {/* Benefits section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          // ! this cnfigure obj will stagger (пошатнет) all the children in the divmotion.
          variants={container}
          className="md:flex items-center justify-between gap-8 mt-5"
        >
          {benefits.map((benefit: IBenefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              text={benefit.text}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* graphics and description */}
        <div className="md:flex md:mt-28 mt-16 gap-16 justify-between items-center">
          {/* GRAPHIC */}
          <img
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />

          <div className="">
            {/* TITLE */}
            {/* 
							it is relative because we neen to position the waves above it
							and we wanna keep them that way also on smaller screens 
						*/}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HeadingText>
                    THOUSANDS OF HAPPY CLIENTS GETTING{' '}
                    <span className="text-primary-500">FIT</span>.
                  </HeadingText>
                </motion.div>
              </div>
            </div>

            {/* descr */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 mb-5">
                Join the ranks of our many satisfied members who have transformed their
                lives with Evogym. Our proven approach and supportive community have
                helped countless individuals achieve their fitness goals and enjoy a
                healthier lifestyle. Experience the difference that has made us a favorite
                choice for fitness enthusiasts everywhere.
              </p>
            </motion.div>

            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>Join now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
