import { SelectedPageEnum, IClass } from '@/shared/types';
import { motion } from 'framer-motion';
import HeadingText from '@/shared/HeadingText';
import Class from './Class';
import { classes } from './classes';

interface IProps {
  setSelectedPage: (value: SelectedPageEnum) => void;
}

const OurClasses = ({ setSelectedPage }: IProps) => {
  return (
    <div id="ourclasses" className="w-full bg-primary-100 py-40">
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
            At Evogym, we offer a diverse range of classes designed to cater to all
            fitness levels and interests. Whether you're looking to build strength,
            improve flexibility, or boost cardiovascular health, we have something for
            everyone.
          </p>
        </motion.div>
        {/* SIDE SCROLLING */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          {/* 
          whitespace-nowrap so we do not have white space left over so we 
          do not move the text to the next line
           */}
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((ourclass: IClass, idx) => (
              <Class
                key={`${ourclass.name}-${idx}`}
                description={ourclass.description}
                image={ourclass.image}
                name={ourclass.name}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default OurClasses;
