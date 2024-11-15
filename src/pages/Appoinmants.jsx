//import React from 'react'

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AppContext } from "../context/AppConext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appoinmants = () => {

  const [docSlots, setDocSlots] = useState([]);

  const {docId} = useParams();
  const {doctors, currency} = useContext(AppContext);

  const [docInfo , setDocInfo] = useState(null);

  const fetchDoctorsData = async () => {
    const docInfo = doctors.find(doc => doc._id === docId );
    setDocInfo(docInfo);
   // console.log(docInfo)
  }

  
  const [slotsIndex, setSlotsIndex] = useState(0);
  const [slotsTime, setSlotsTime] = useState('');

  const dayOfWeek = ['SUN', 'MON', 'TUES', 'WED', 'THU', 'FRI', 'SAT'];
  

  const AvailableSlot = async () => {

    setDocSlots([]);

    //getting current date 
    let today = new Date();

    for(let i = 0; i < 7; i++) {
      //geting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i); 

      //setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21,0,0,0); 

      //setting hours
      if(today.getDate() === currentDate.getDate()) {
          currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlotes = [];
      while(currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([] , {hour : '2-digit', minute : '2-digit'});

        //add slotes to arry
        timeSlotes.push({
          datetime : new Date(currentDate),
          time : formattedTime
        })

        //Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
 
      setDocSlots(prev => ([...prev , timeSlotes]))
    }
  }

  useEffect(() => {
    fetchDoctorsData()
  }, [doctors, docId]);

  useEffect(() => {
    AvailableSlot();
  },[docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return docInfo && (
    <div>
      {/*-----doctor deails------*/}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt="doctor_id_details" />
        </div>
        {/*-----doctor name , degree, expe..------*/}
        <div className="flex-1 border border-gray-400 p-8 py-7 rounded-lg bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 md:text-2xl text-gray-900 font-medium">
            {docInfo.name} 
            <img className="w-5" src={assets.verified_icon} alt="verify-icon" />
          </p>
          <div className="flex items-center text-gray-600 gap-2 text-sm mt-1">
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className="border px-2 py-0.5 rounded-full">{docInfo.experience}</button>
          </div>
          {/*-----doctor about------*/}
          <div>
            <p className="flex items-center text-sm font-medium text-gray-900 mt-3 gap-1">About <img src={assets.info_icon} alt="info_icon" /></p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
          </div>
          <p className="text-gray-500 mt-4 font-medium">
          Appointment fee:  <span className="text-gray-600">{currency}{docInfo.fees}</span>
          </p>
        </div>
      </div>
      {/*-----Booking Slots------*/}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {
            docSlots.length && docSlots.map((item, index) => (
              <div onClick={() => setSlotsIndex(index)} className={`text-center py-5 min-w-16 rounded-full cursor-pointer ${slotsIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item[0] && dayOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className="flex items-center w-full overflow-x-scroll gap-3 mt-4">
          {
            docSlots.length && docSlots[slotsIndex].map((item, index) => (
              <p onClick={() => setSlotsTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 rounded-full cursor-pointer py-2 ${item.time === slotsTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
                  {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>
        
        <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">Book an appointment</button>
      </div>

      {/*---- listing related doctors ---- */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appoinmants