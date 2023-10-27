'use client';

import { useMemo, useState } from 'react';
import { ModalContext } from '../context/modalContext';

export default function ModalProvider({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  const [open, setOpen] = useState(false);

  const openValue = useMemo(
    () => ({
      open,
      setOpen,
    }),
    [open]
  );

  return <ModalContext.Provider value={openValue}>{children}</ModalContext.Provider>;
}
