import { SelectedPageEnum, IClass } from '@/shared/types';

import img1 from '@/assets/image1.png';
import img2 from '@/assets/image2.png';
import img3 from '@/assets/image3.png';
import img4 from '@/assets/image4.png';
import img5 from '@/assets/image5.png';
import img6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import HeadingText from '@/shared/HeadingText';

const classes: Array<IClass> = [
  {
    name: 'First class',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quidem ad consequatur consectetur hic natus autem ipsa error maiores. Quod qui quis enim itaque consectetur? Provident, aspernatur dolores? Vitae, nisi?',
    image: img1,
  },
  {
    name: 'Second class',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quidem ad consequatur consectetur hic natus autem ipsa error maiores. Quod qui quis enim itaque consectetur? Provident, aspernatur dolores? Vitae, nisi?',
    image: img2,
  },
  {
    name: 'Third class',
    image: img3,
  },
  {
    name: 'Fourth class',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quidem ad consequatur consectetur hic natus autem ipsa error maiores. Quod qui quis enim itaque consectetur? Provident, aspernatur dolores? Vitae, nisi?',
    image: img4,
  },
  {
    name: 'Fifth class',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quidem ad consequatur consectetur hic natus autem ipsa error maiores. Quod qui quis enim itaque consectetur? Provident, aspernatur dolores? Vitae, nisi?',
    image: img5,
  },
  {
    name: 'Sixth class',
    image: img6,
  },
];

interface IProps {
  setSelectedPage: (value: SelectedPageEnum) => void;
}

const OurClasses = ({ setSelectedPage }: IProps) => {
  return (
    <div id={`#${SelectedPageEnum.OurClasses}`} className="w-full bg-primary-100 py-40">
      <motion.div
        // ! function in it triggers when the el enters a viewport
        onViewportEnter={() => setSelectedPage(SelectedPageEnum.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeadingText>Our classes</HeadingText>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet nam
            unde dignissimos! Reprehenderit doloribus enim ullam, fugit ducimus totam eum
            nostrum perferendis officia commodi ab odit harum rem! Facere.
          </p>
        </motion.div>
        {/* SIDE SCROLLING */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          {/* 
          whitespace-nowrap so we do not have white space left over so we 
          do not move the text to the next line
           */}
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map(() => {
              return {};
            })}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default OurClasses;
