import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from '../componentes/Header/Header'
import Nav from '../componentes/Header/Nav'
import Footer from '../componentes/Footer/Footer'
import FooterMobile from '../componentes/Footer/FooterMobile'
import ProductMange from '../componentes/product/ProductMange';
import CommentProduct from '../componentes/product/CommentProduct';

function Product() {
  return (
    <div>
        <Header />
        <Nav />

        <div>
            <ProductMange />

            <CommentProduct />

            <div></div>
        </div>

        <div className='max-md:hidden'>
            <Footer />
        </div>
        <div className='hidden max-md:flex'>
            <FooterMobile />
        </div>
    </div>
  )
}

export default Product