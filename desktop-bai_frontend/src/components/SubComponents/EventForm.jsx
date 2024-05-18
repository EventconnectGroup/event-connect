import React from 'react'

const EventForm = () => {
  return (
    <form className='flex flex-col justify-center items-center py-6 md:w-11/12 md:shadow-xl sm:shadow-none' id='eventForm'>
      <h2 className='text-2xl text-[#20B486] font-semibold'>Create An Event</h2>
      <div className='text-left w-full md:px-10 sm:px-3 grid' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(370px , 1fr))" }}>
          <div className='sm:px-2 sm:py-4 md:m-4'>
               <label className='sm:w-5/6 md:w-full text-xl text-gray-950 mb-1 font-semibold block'>Event Category</label>
               <select name="" id="" className='w-full px-5 py-2 rounded-md border border-[#20B486] focus:border-[#3df1b8]'>
                    <option value="Music">Music</option>
                    <option value="Weddings">Weddings</option>
                    <option value="Mettings">Mettings</option>
                    <option value="Festival">Festival</option>
               </select>
          </div>
          <div className='sm:px-1 sm:py-4 md:m-4'>
               <label className='w-full text-xl text-gray-950 mb-1 font-semibold block'>Event Name</label>
               <select name="" id="" className='w-full px-5 py-2 rounded-md border border-[#20B486] focus:border-[#3df1b8]'>
                    <option value="Music">Music</option>
                    <option value="Weddings" selected>Weddings</option>
                    <option value="Mettings">Mettings</option>
                    <option value="Festival">Festival</option>
               </select>
          </div>
          <div className='sm:px-1 sm:py-4 md:m-4'>
               <label className='w-full text-xl text-gray-950 mb-1 font-semibold block'>Event Venue</label>
               <select name="" id="" className='w-full px-5 py-2 rounded-md border border-[#20B486] focus:border-[#3df1b8]'>
                    <option value="Your Home">Your Home</option>
                    <option value="Kigali Arena">Kigali Arena</option>
                    <option value="Intare Conference">Intare Conference</option>
                    <option value="Other">Other</option>
               </select>
          </div>
          <div className='sm:px-1 sm:py-4 md:m-4'>
               <label className='w-full text-xl text-gray-950 mb-1 font-semibold block'>Event Description</label>
               <input type="text" placeholder='Description' className='w-full px-5 py-2 rounded-md border border-[#20B486] focus:border-[#3df1b8]' />
          </div>
          <div className='sm:px-1 sm:py-4 md:m-4'>
               <label className='w-full text-xl text-gray-950 mb-1 font-semibold block'>Event Date</label>
               <input type="date" className='w-full px-5 py-2 rounded-md border border-[#20B486] focus:border-[#3df1b8]' />
          </div>
          <div className='sm:px-1 sm:py-4 md:m-4'>
               <label className='w-full text-xl text-gray-950 mb-1 font-semibold block'>Event Time</label>
               <input type="time" className='w-full px-5 py-2 rounded-md border border-[#20B486] focus:border-[#3df1b8]' />
          </div>
          <div className='sm:px-1 sm:py-4 md:m-4'>
               <label className='w-full text-xl text-gray-950 mb-1 font-semibold block'>Event Reason</label>
               <select name="" id="" className='w-full px-5 py-2 rounded-md border border-[#20B486] focus:border-[#3df1b8]'>
                    <option value="Reason 1">Reason 1</option>
                    <option value="Reason 2">Reason 2</option>
                    <option value="Reason 3">Reason 3</option>
                    <option value="Other">Other</option>
               </select>
          </div>
          <div className='sm:px-1 sm:py-4 md:m-4'>
               <label className='w-full text-xl text-gray-950 mb-1 font-semibold block'>Event Reason</label>
               <input type="text" placeholder='Your reason' className='w-full px-5 py-2 rounded-md border border-[#20B486] focus:border-[#3df1b8]' />
          </div>
      </div>
      <input type="submit" value="Create Event" className='md:w-2/4 sm:w-full p-2 my-[1rem] rounded-md bg-[#20B486] hover:bg-[#3de1ad] text-white text-xl font-semibold' />
    </form>
  )
}

export default EventForm