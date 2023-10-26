import { useEffect, useRef } from 'react';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

export default function ContactForm({ closeForm }: { closeForm: () => void }) {
  const form = useRef(null);
  const closeIcon = useRef(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        (form.current && !(form.current as HTMLElement).contains(event.target as HTMLElement)) ||
        (closeIcon.current && (closeIcon.current as HTMLElement).contains(event.target as HTMLElement))
      ) {
        closeForm();
      }
    };

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
    // If we don't include dependency array, then the event listener will be unnecessarily added and removed on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='fixed z-1000 w-screen h-screen top-0 left-0 flex'>
      <form ref={form} className='bg-zinc-900 h-fit m-auto p-10 border border-white w-fit flex flex-col'>
        <i ref={closeIcon} className='w-fit cursor-pointer'>
          <CloseIcon size={36} />
        </i>

        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' />

        <label htmlFor='email'>Email</label>
        <input type='text' name='email' id='email' />

        <label htmlFor='message'>Message</label>
        <textarea name='message' id='message' cols={30} rows={10}></textarea>

        <button type='submit'>Send</button>
      </form>
    </div>
  );
}
