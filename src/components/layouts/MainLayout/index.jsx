import React, { useEffect } from 'react'
import Footer from '../Footer';
import '../../../scss/Home.scss';
import NavigationBar from '../Navbar';
import PropTypes from 'prop-types';

const MainLayout = ({children}) => {
    useEffect(() => {
        window.onscroll = () => {
          const header = document.getElementById('nav-header');
         if (window.scrollY > 10) {
           header.classList.add('scroll_top');
         } else {
           header.classList.remove('scroll_top');
         }
       };
       return () => {
        window.onscroll = null;
       };
      },[]);
    
      return (
        <div className='main_wrapper'>
          <NavigationBar />
    
          {/* <!-- MAIN SECTION START --> */}
          <main className='main_section'>
            {children}
          </main>

          <Footer />
        </div>
      )
}

MainLayout.propTypes = {
   children: PropTypes.element
};

export default MainLayout