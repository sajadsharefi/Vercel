import React from 'react'
import AddressUser from '../componentes/Cart/AddressUser'
import Header from '../componentes/Header/Header'
import Nav from '../componentes/Header/Nav'
import Footer from '../componentes/Footer/Footer'
import FooterMobile from '../componentes/Footer/FooterMobile'
import Pardakht from '../componentes/Cart/Pardakht'
import TimeSubmit from '../componentes/Cart/TimeSubmit'
import CartUser from '../componentes/Cart/CartUser'
import Payment from '../componentes/Cart/Payment'

function Cart() {
  return (
    <div>
        <Header />
        <Nav />

        <div className='flex flex-row-reverse px-8 gap-5 max-md:flex-col'>
            <div className='w-2/3 flex flex-col place-items-end max-md:w-full'>
                <span className='w-full border-b-2 border-inherit py-2 text-right'>
                    <h4 className='pr-2'>آدرس ارسال</h4>
                </span>
                <AddressUser />
                <TimeSubmit />
                <CartUser />
                <Payment />
            </div>

            <div className='w-1/3 max-md:w-full'>
                <Pardakht />
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

export default Cart