import React, { useContext } from 'react'
import './ErrBox.css'
import { Context } from '../../contexts/Context'
export default function ErrBox(props) {
  const context=useContext(Context)
  return (
    <div className='ErrBox bg-red-500 text-[32px] text-white py-6 mt-6'>
      <p className=' text-center'>هیچ {props.titleErr} یافت نشد</p>  
    </div>
  )
}
