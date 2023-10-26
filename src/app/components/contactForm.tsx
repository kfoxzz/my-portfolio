import { useEffect, useRef } from 'react';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

export default function ContactForm({
  onCloseForm,
  onSubmitForm,
}: {
  onCloseForm: () => void;
  onSubmitForm: () => void;
}) {
  const form = useRef(null);
  const closeIcon = useRef(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        (form.current && !(form.current as HTMLElement).contains(event.target as HTMLElement)) ||
        (closeIcon.current && (closeIcon.current as HTMLElement).contains(event.target as HTMLElement))
      ) {
        onCloseForm();
      }
    };

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
    // If we don't include dependency array, then the event listener will be unnecessarily added and removed on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='fixed z-1000 w-screen h-screen top-0 left-0 flex bg-zinc-900/[.75]'>
      <form
        ref={form}
        className='bg-zinc-800 h-fit m-auto p-4 rounded min-w-fit w-[75vw] max-w-[480px] flex flex-col'
      >
        <div className='flex justify-end pb-4'>
          <i ref={closeIcon} className='w-fit cursor-pointer'>
            <CloseIcon size={18} />
          </i>
        </div>

        <label htmlFor='name' className='text-xs mb-1'>
          Name
        </label>
        <input type='text' name='name' id='name' className='text-sm mb-4 bg-zinc-700 rounded py-1 px-2' />

        <label htmlFor='email' className='text-xs mb-1'>
          Email
        </label>
        <input type='text' name='email' id='email' className='text-sm mb-4 bg-zinc-700 rounded py-1 px-2' />

        <label htmlFor='message' className='text-xs mb-1'>
          Message
        </label>
        <textarea
          name='message'
          id='message'
          cols={30}
          rows={5}
          className='text-sm mb-4 bg-zinc-700 rounded py-1 px-2'
        ></textarea>

        <button
          type='submit'
          className='self-end text-sm text-zinc-200 py-2 px-6 bg-violet-500 w-fit hover:bg-violet-400 rounded transition ease-in-out delay-50 duration-300'
          onSubmit={ev => {
            ev.preventDefault();
            onSubmitForm();
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}