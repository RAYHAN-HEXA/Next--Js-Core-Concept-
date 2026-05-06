import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/shared/Navbar';

const layout = ({children}) => {
    return (
        <div>
        <Navbar></Navbar>
           {children} 
           <Footer></Footer>
        </div>
    );
};

export default layout;