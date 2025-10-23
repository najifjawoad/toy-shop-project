import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const HomLayout = () => {
  return (
    <div>
      {/* Header section */}
      <header className='bg-[#B77466]'>
        <Header />
      </header>

      {/* Main section */}
      <main className='bg-[#FFE1AF]'>
        <Outlet />
      </main>

      {/* Footer section */}
      <footer className='bg-[#957C62]'>
        <Footer />
      </footer>
    </div>
  );
};

export default HomLayout;
