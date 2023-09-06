import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

export default function Footer() {

  const mode  = useSelector((state)=> state.darkMode.mode);
  const dispatch =useDispatch();
  console.log(mode)
  return (
    <div className={mode? 'text-white' : null}>
        <div className='border-t-4 border-black mt-10'>
            <h1 className='font-black py-4'>NEWS PORTAL</h1>

            <div className='flex justify-between pb-2'>
                <p>2023, 20WebAppChallenge || All Rights Reserved</p>

                <div>icons</div>
            </div>

        </div>

    </div>
  )
}