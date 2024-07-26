import { SelectedPageEnum } from '@/shared/types';
import ActionButton from '@/shared/ActionButton';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import HomePageText from '@/assets/HomePageText.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

interface IProps {
  setSelectedPage: (value: SelectedPageEnum) => void;
}

const Home = ({ setSelectedPage }: IProps) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  return (
    <section className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0" id="home">
      {/* Image and main header */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPageEnum.Home)}
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      >
        {/* Main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            {/* parent div of an image */}
            <div className="relative">
              {/* before:content-evolvetext - that is how to use image as a :before element
                  earlier we put it in tailwind.condfig.js */}
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="Home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              Welcome to Evogym, where your fitness journey begins. Our cutting-edge
              facility is designed to support and inspire you every step of the way.
              Discover a new standard in fitness with personalized programs, expert
              guidance, and a supportive community. Transform your body and mind with us
              today!
            </p>
          </motion.div>
          {/* actions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8"
          >
            <ActionButton setSelectedPage={setSelectedPage}>Join now</ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPageEnum.ContactUs)}
              href={`#${SelectedPageEnum.ContactUs}`}
            >
              <p>Learn more</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-1 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="Home-Page-Graphic" />
        </div>
      </motion.div>

      {/* Sponsors - we will not see them if isAboveMediumScreens*/}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="Sponsor-RedBull" />
              <img src={SponsorForbes} alt="Sponsor-Forbes" />
              <img src={SponsorFortune} alt="Sponsor-Fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
