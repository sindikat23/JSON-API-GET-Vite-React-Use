import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img 
            className="w-[150px] h-[50px] object-cover" 
            src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658e5b70aa8dfa366d9cc13f_658ead1d39c6e24c8b43c90e/scale_1200" 
            alt="JSON" 
          />
        </div>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><Link to={'/'} className="hover:text-blue-500">Yangiliklar</Link></li>
          <li><Link to={'/user_list'} className="hover:text-blue-500">Xodimlar</Link></li>
          <li><Link to={'/post_list'} className="hover:text-blue-500">Postlar</Link></li>
          <li><Link to={'/album_list'} className="hover:text-blue-500">Albomlar</Link></li>
          <li><Link to={'/about'} className="hover:text-blue-500">Biz haqimizda</Link></li>
        </ul>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold active:bg-blue-300 transition">
            Login In
          </button>
          <button className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold active:bg-green-300 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar