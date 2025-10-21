import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';


const HomLayout = () => {
    return (
        <div>
            {/* Header section */}
            <header className='bg-[#B77466]'>
                <Header></Header>
            </header>
            {/* main section */}
            <main className='bg-[#FFE1AF]'>
              <Outlet></Outlet>
            </main>
            {/* footer section */}
            <footer className='bg-[#957C62]'>
             <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomLayout;