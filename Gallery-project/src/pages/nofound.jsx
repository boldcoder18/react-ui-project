import React from 'react'
import ravi from '../assets/ravi.jpeg'
import ravi1 from '../assets/ravi1.jpeg'
import { useLocation, useNavigate } from 'react-router-dom'
const Nofound = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-pink-500'>

            <button
                onClick={() => {
                    navigate('/')
                }}
                className='bg-amber-500 py-2 px-5 m-4 rounded cursor-pointer active:scale-95  '>
                home
            </button>
            <button
                onClick={() => {
                    navigate('/Nonext')
                }}
                className='bg-amber-500 py-2 px-5 m-4 rounded cursor-pointer active:scale-95  '>
                Next
            </button>

            <div className=' h-screen flex justify-between bg-pink-400 gap-10 items-center-safe '>
                <img className='h-100 w-100 object-cover rounded-2xl ml-2' src={ravi} alt="ravi" />
                <h1 className='text-3xl text-red-900 font-semibold'>404 you are in woung page</h1>
                <img className='h-100 w-100 object-cover rounded-2xl mr-2' src={ravi1} alt="real ravi" />
            </div>
        </div>
    )
}

export default Nofound
