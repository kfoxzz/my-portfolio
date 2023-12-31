import { useState, useEffect, useRef } from 'react';
import { AiOutlineClose as CloseIcon, AiFillCheckCircle as Checkmark } from 'react-icons/ai';
import { CgSpinner as Spinner } from 'react-icons/cg';
import sendEmail from '../lib/sendEmail';
import useContactForm from '../hooks/useContactForm';
import { sleep } from '../lib/utils';

export default function ContactForm({ onCloseForm }: { onCloseForm: () => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const { values, handleChange } = useContactForm();

  const form = useRef(null);
  const closeIcon = useRef(null);

  const onSubmit = async () => {
    setError(null);
    setLoading(true);

    if (!values.email || !values.message || !values.name) {
      setError('Please fill out all fields.');
      setLoading(false);
      return;
    }

    const res = await sendEmail(values);

    if (res.status !== 200) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    } else {
      setLoading(false);
      setSuccess(true);
      await sleep(2000); // Pause so user can read success message
      await animateFadeOut();
      onCloseForm();
    }
  };

  const animateFadeOut = async () => {
    setAnimateOut(true);
    await sleep(200);
  };

  useEffect(() => {
    const handleClick = async (event: MouseEvent) => {
      if (
        (form.current && !(form.current as HTMLElement).contains(event.target as HTMLElement)) ||
        (closeIcon.current && (closeIcon.current as HTMLElement).contains(event.target as HTMLElement))
      ) {
        await animateFadeOut();
        onCloseForm();
      }
    };

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
    // If we don't include dependency array, then the event listener will be unnecessarily added and removed on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed z-1000 w-screen h-screen top-0 left-0 flex bg-zinc-900/[.75] ${
        animateOut ? 'animate-fade-out' : 'animate-fade-in'
      }`}
    >
      <form
        ref={form}
        className={`bg-zinc-800 h-fit m-auto p-4 rounded min-w-fit w-[75vw] max-w-[480px] flex flex-col`}
        onSubmit={ev => {
          ev.preventDefault();
          ev.stopPropagation();
          onSubmit();
        }}
      >
        <div className='flex justify-end pb-4'>
          <i ref={closeIcon} className='w-fit cursor-pointer'>
            <CloseIcon size={18} />
          </i>
        </div>

        <label htmlFor='name' className='text-xs mb-1'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='text-sm mb-4 bg-zinc-700 rounded py-1 px-2'
          onChange={handleChange}
        />

        <label htmlFor='email' className='text-xs mb-1'>
          Email
        </label>
        <input
          type='text'
          name='email'
          id='email'
          className='text-sm mb-4 bg-zinc-700 rounded py-1 px-2'
          onChange={handleChange}
        />

        <label htmlFor='message' className='text-xs mb-1'>
          Message
        </label>
        <textarea
          name='message'
          id='message'
          cols={30}
          rows={5}
          className='text-sm mb-4 bg-zinc-700 rounded py-1 px-2'
          onChange={handleChange}
        ></textarea>

        {error && <p className='text-rose-900 text-xs mb-4 self-end'>{error}</p>}

        {success ? (
          <span
            className={`flex items-center gap-2 self-end text-sm py-2 text-green-500 w-fit rounded transition ease-in-out delay-50 duration-300`}
          >
            <Checkmark size={18} /> Sent!
          </span>
        ) : (
          <button
            type='submit'
            disabled={loading || success}
            className={`flex items-center gap-2 self-end text-sm text-zinc-200 py-2 px-6 hover:bg-violet-400 ${
              loading ? 'bg-violet-400' : success ? 'bg-green-600 hover:bg-green-700' : 'bg-violet-500'
            } w-fit rounded transition ease-in-out delay-50 duration-300`}
          >
            {loading ? (
              <>
                <Spinner className='animate-spin inline-block' size={18} /> Sending...
              </>
            ) : (
              'Send'
            )}
          </button>
        )}
      </form>
    </div>
  );
}
