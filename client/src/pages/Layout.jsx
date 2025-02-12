import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout({cartCount}) {
  return (
    <div>
      <Header cartCount={cartCount}/>
      <Outlet />
      <Footer />
    </div>
  );
}

