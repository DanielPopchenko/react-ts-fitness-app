import { IUser } from '@App';
import React, { Dispatch, FormEvent, SetStateAction, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface IProps {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  toggleOpen: () => void;
}

const Modal = ({ user, setUser, toggleOpen }: IProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null)!;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUser({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
    toggleOpen();
  };

  return (
    <div
      id="modal"
      className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 modal"
    >
      <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md p-4">
        <button
          className="bg-secondary-500 rounded-md py-2 px-2 transition hover:bg-primary-500 hover:text-white"
          onClick={toggleOpen}
        >
          <XMarkIcon width={20} height={20} />
        </button>

        {/* <!-- Modal body --> */}
        <div className="min-h-48 overflow-y-scroll p-4 m-auto text-center">
          <h3 className="text-center font-medium text-2xl mb-5">Register now</h3>

          <form onSubmit={handleSubmit}>
            <p className="mb-3">
              <input
                type="text"
                placeholder="Your name"
                className="rounded-md border  border-stone-600 py-2 px-4  focus:outline-stone-800 w-full text-lg"
                ref={nameRef}
              />
            </p>
            <p className="mb-3">
              <input
                type="email"
                pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
                placeholder="Your email"
                className="rounded-md border  border-stone-600 py-2 px-4  focus:outline-stone-800 w-full text-lg"
                ref={emailRef}
              />
            </p>
            <button className="bg-secondary-500 rounded-md py-2 px-5 transition hover:bg-primary-500 hover:text-white">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
