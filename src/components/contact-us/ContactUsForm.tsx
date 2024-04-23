import { error } from 'console';
import React, { FormEvent } from 'react';
import { useForm } from 'react-hook-form';

type Props = {};

const ContactUsForm = (props: Props) => {
  const {
    register,
    reset,
    trigger,
    formState: { errors },
  } = useForm();

  const inputStyles = 'w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <form
      target="_blank"
      onSubmit={handleSubmit}
      method="POST"
      action="https://formsubmit.co/2e6c76f9713e50a8a89f6cbc953fb369"
    >
      {/* name */}
      <input
        type="text"
        placeholder="NAME"
        className={inputStyles}
        {...register('name', {
          required: true,
          maxLength: 100,
        })}
      />
      {errors.name && (
        <p className="mt-1 text-primary-500">
          {errors.name.type === 'required' && 'This field is required.'}
          {errors.name.type === 'maxLength' && 'Maximum length is 100 chars.'}
        </p>
      )}

      {/* email */}
      <input
        type="text"
        placeholder="EMAIL"
        className={inputStyles}
        {...register('email', {
          required: true,
          maxLength: 100,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      {errors.email && (
        <p className="mt-1 text-primary-500">
          {errors.email.type === 'required' && 'This field is required.'}
          {errors.email.type === 'pattern' && 'Invalid email adress.'}
        </p>
      )}

      {/* message */}
      <textarea
        rows={4}
        cols={50}
        placeholder="MESSAGE"
        className={inputStyles}
        {...register('message', {
          required: true,
          maxLength: 2000,
        })}
      />
      {errors.message && (
        <p className="mt-1 text-primary-500">
          {errors.message.type === 'required' && 'This field is required.'}
          {errors.message.type === 'maxLength' && 'Maximum length is 2000 chars.'}
        </p>
      )}

      <button className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
        SUBMIT
      </button>
    </form>
  );
};

export default ContactUsForm;
