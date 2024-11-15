//import React from 'react'

import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                {/*----left side---- */}
            <div>
                <img onClick={() => {navigate('/'); scrollTo(0, 0)}} className="mb-5 w-32 h-20 cursor-pointer" src={assets.logo2} alt="logo" />
                <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, 
                    officiis dolorum molestiae sequi voluptates labore doloremque voluptas eligendi alias
                    porro commodi rem vero quasi? Aliquid sequi voluptatibus ab repellendus facere.</p>
            </div>
            {/*----center---- */}
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col text-gray-600 gap-2">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/*----right side---- */}
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col text-gray-600 gap-2">
                    <li>+91-833-883-5077</li>
                    <li>gopal.reactcoder@gmail.com</li>
                </ul>
            </div>
        </div>
        {/*----copy right--- */}
        <hr />
        <div>
            <p className="py-5 text-sm text-center">Copyright 2024 @ Health-Domain - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer