import React, { useState } from 'react'
import Header from '../componentes/Header/Header'
import Nav from '../componentes/Header/Nav'
import Footer from '../componentes/Footer/Footer'
import FooterMobile from '../componentes/Footer/FooterMobile'
import ListProduct from '../componentes/shop/ListProduct'
import FilterProduct from '../componentes/shop/FilterProduct'

function OtherProduct() {
    let [open,setOpen] = useState(false);
  return (
    <div>
        <Header />
        <Nav />

        <div className='flex flex-row-reverse mt-5 pr-5 pl-5 '>
            <div className='w-1/5 max-md:hidden'>
                <FilterProduct />
            </div>

            <div className='w-4/5 max-md:w-full'>
                <ListProduct />
            </div>
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

export default OtherProduct