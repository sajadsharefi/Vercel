import React from 'react'
import SendOTPForm from '../componentes/Rgister/SendOTPForm'
import CheckOTPForm from '../componentes/Rgister/CheckOTPForm'

function Auth() {
  return (
    <div className='w-full sm:max-w-sm'>
        <SendOTPForm />
        <CheckOTPForm />
    </div>
  )
}

export default Auth