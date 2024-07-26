import { useEffect, useState } from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { SelectedPageEnum } from './shared/types';
import Home from '@/components/home/Home';
import Benefits from '@/components/benefits/Benefits';
import OurClasses from '@/components/classes/OurClasses';
import ContactUs from '@/components/contact-us/ContactUs';
import Modal from './components/modal/Modal';
import Footer from '@/components/footer/Footer';

export interface IUser {
  name: string;
  email: string;
}

export default function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPageEnum>(
    SelectedPageEnum.Home,
  );

  const [user, setUser] = useState<IUser | null>(null);

  console.log(user);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // ! THIS IS FOR NAVBAR TO HAVE RED BG WHEN MOVING FROM THE TOP
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

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
        user={user}
        setUser={setUser}
        toggleOpen={toggleModal}
      />

      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />

      {modalOpen && <Modal user={user} setUser={setUser} toggleOpen={toggleModal} />}
    </div>
  );
}
