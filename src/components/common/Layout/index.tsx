'use client';

import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header open={open} onOpen={setOpen} />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
