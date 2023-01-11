import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiOutlineX} from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation().pathname
  const [nav, setNav] = useState(false)
  
  const handleOpen = () => {
    setNav(true)
  }

  const handleClose = () => {
    setNav(false)
  }

  return (
    <>
    {!nav ? (<div className='h-6 p-4 items-center'>
      <div className='flex justify-between text-3xl'>
        <GiHamburgerMenu size={30} onClick={handleOpen} className='cursor-pointer hover:scale-110'/>
        {location === '/' ? (<h1 className='text-4xl'>Characters</h1>) : (<h1 className='text-4xl'>Favorites</h1>)}
        <div></div>
      </div>
    </div>) 
    :
    (<div className='absolute z-10 top-0 w-full h-2/3 bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bd9c4e105170365.5f7342806a6fe.jpg)] bg-center bg-cover'>
      <HiOutlineX size={30} onClick={handleClose} className='cursor-pointer hover:scale-110 m-4'/>
      <ul className='p-6 text-2xl'>
        <Link to={'/'}><li className='py-8 hover:text-3xl hover:text-yellow-300' onClick={handleClose}>Characters</li></Link>
        <Link to={'/favorites'}><li className='py-8 hover:text-3xl hover:text-yellow-300' onClick={handleClose}>Favorites</li></Link>
      </ul>
    </div>)  
  }
    </>
  )
}

export default Navbar