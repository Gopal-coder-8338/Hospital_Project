//import React from 'react'

import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Banner = () => {

    const navigate = useNavigate();
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
        {/*.....left side..... */}
        <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
                <p>Book Appointment</p>
                <p className="mt-4">With 100+ Trusted Doctors</p>
            </div>
            <button onClick={() => {navigate('/login'); scrollTo(0, 0)}} className="bg-white text-sm sm:text-base mt-6 hover:scale-105 transition-all duration-300 text-gray-600 px-8 py-3 rounded-full">Create account</button>
        </div>

        {/*.....right side..... */}
        <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
            <img className="w-full absolute max-w-md bottom-0 right-0" src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner