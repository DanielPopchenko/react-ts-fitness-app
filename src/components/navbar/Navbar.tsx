import { Dispatch, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPageEnum } from '../../shared/types';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { IUser } from '@App';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { useAuth0 } from '@auth0/auth0-react';

interface IProps {
  selectedPage: SelectedPageEnum;
  setSelectedPage: (value: SelectedPageEnum) => void;
  isTopOfPage: boolean;
  user: IUser;
  setUser: Dispatch<React.SetStateAction<IUser>>;
  toggleOpen: () => void;
}

export const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
  user,
  setUser,
  toggleOpen,
}: IProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const { loginWithRedirect } = useAuth0();

  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';

  const flexBetween = 'flex items-center justify-between';
  const isAboveMediaScreens = useMediaQuery('(min-width:1060px)');

  const handleLogout = () => {
    setUser(null);
    Swal.fire({
      title: 'Logging you out...',
      text: 'You have been loged out!',
      icon: 'success',
    });
  };

  return (
    <nav className={`${navbarBackground} ${flexBetween} fixed top-0 z-50 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* LEFT SIDE */}
          <img src={Logo} alt="logo" />

          {/* RIGHT SIDE */}
          {isAboveMediaScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={() => setSelectedPage(SelectedPageEnum.Home)}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={() => setSelectedPage(SelectedPageEnum.Benefits)}
                />
                <Link
                  page="Our classes"
                  selectedPage={selectedPage}
                  setSelectedPage={() => setSelectedPage(SelectedPageEnum.OurClasses)}
                />
                <Link
                  page="Contact us"
                  selectedPage={selectedPage}
                  setSelectedPage={() => setSelectedPage(SelectedPageEnum.ContactUs)}
                />
              </div>
              <div className={`${flexBetween} gap-8 `}>
                <motion.button
                  className="bg-secondary-500 rounded-md py-2 px-5 transition hover:bg-primary-500 hover:text-white"
                  // onClick={!user ? toggleOpen : handleLogout}
                  onClick={() => loginWithRedirect()}
                >
                  {user ? 'Log out' : 'Sign in'}
                </motion.button>
                {user && `Welcome, ${user.name}!`}
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
      {/* ! Mobile menu modal ! */}
      {!isAboveMediaScreens && isMenuToggled && (
        // ! when you want a spesific number w-[300px] - you need to specify it like this
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="text-gray-400 w-7 h-7" />
            </button>
          </div>
          {/* ! MENU ITEMS ! */}
          <div className="flex text-center flex-col gap-10">
            <div className={`flex flex-col gap-10 text-2xl`}>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className="mt-52 flex flex-col items-center text-center">
              <motion.button
                className="bg-secondary-500 block rounded-md py-2 px-5 transition hover:bg-primary-500 hover:text-white text-center"
                onClick={!user ? toggleOpen : handleLogout}
              >
                {user ? 'Log out' : 'Sign in'}
              </motion.button>
              {user && <p className="text-2xl mt-5">Welcome, {user.name}!</p>}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
