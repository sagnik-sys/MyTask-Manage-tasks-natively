import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-green-300 flex justify-between items-center px-5 py-3 p-2">
      <div className="text-xl font-bold">MyTask.Com</div>
      
      <ul className="flex gap-6">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all">About</li>
        <li className="cursor-pointer hover:font-bold transition-all">Contact</li>
      </ul>
    </div>
  )
}

export default Navbar