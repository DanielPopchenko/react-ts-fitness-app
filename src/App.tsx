import { useEffect, useState } from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { SelectedPageEnum } from './shared/types';
import Home from '@/components/home/Home';
import Benefits from '@/components/benefits/Benefits';
import OurClasses from '@/components/classes/OurClasses';
import ContactUs from '@/components/contact-us/ContactUs';

export default function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPageEnum>(
    SelectedPageEnum.Home,
  );

  // ! THIS IS FOR NAVBAR TO HAVE RED BG WHEN MOVING FROM THE TOP
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      // ! by doing this we check if we are on the top of the page
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPageEnum.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
    </div>
  );
}
