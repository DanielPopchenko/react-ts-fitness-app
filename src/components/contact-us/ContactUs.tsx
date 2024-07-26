import { SelectedPageEnum } from '@/shared/types';
import { motion } from 'framer-motion';

import contactUsPageGraphic from '../../assets/ContactUsPageGraphic.png';
import HeadingText from '@/shared/HeadingText';
import ContactUsForm from './ContactUsForm';

type Props = {
  setSelectedPage: (value: SelectedPageEnum) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  return (
    <section id={`${SelectedPageEnum.ContactUs}`} className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPageEnum.ContactUs)}>
        {/* SECTION HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { x: -50, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
        >
          <HeadingText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HeadingText>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="md:flex justify-between mt-10 gap-8">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <ContactUsForm />
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <div className="before:absolute md:before:content-evolvetext w-full before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full"
                src={contactUsPageGraphic}
                alt="contact-us-page-graphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
