//import React from "react"

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Doctors from "./pages/Doctors"
import Login from "./pages/Login"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import MyProfile from "./pages/MyProfile"
import MyAppoinments from "./pages/MyAppoinments"
import Appoinmants from "./pages/Appoinmants"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="mx-4 md:mx-14 sm:max-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointment" element={<MyAppoinments />} />
        <Route path="/appoinment/:docId" element={<Appoinmants />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App