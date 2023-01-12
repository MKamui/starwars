import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import {setFavorites, filterFavorites} from '../redux/actions'
import {MdFavorite, MdPlace} from 'react-icons/md'
import {FaBirthdayCake} from 'react-icons/fa'
import {BsGenderAmbiguous} from 'react-icons/bs'

const Favorites = () => {
  const dispatch = useDispatch()
  const {favorites, filtered} = useSelector(state => state)

  useEffect(() => {

  }, [favorites, filtered])


  const handleChange = (e) => {
    dispatch(filterFavorites(e.target.value.toLowerCase()))
  };

  return (
    <div>
      <Navbar/>
      <div className='flex space-x-2 justify-center mt-14 m-2'>
        <label>Search a favorite</label>
        <input className='text-black md:w-60 w-36 rounded-lg' type='text' placeholder='Search...' onChange={(e) => handleChange(e)}/>
      </div>
      {favorites.length === 0 ? 
      (<div className='text-center mt-40 text-xl'>
        <h2>To add a character to favorites, you must hit the heart of the character first</h2>
      </div>) : null}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14'>
      {filtered.length === 1 ? filtered.map((character) => 
        <div className='w-4/5 h-30 flex flex-col m-8 border-2 border-yellow-400 rounded-lg'>
        <h1 className='text-xl m-2 underline'>{character.name}</h1>
        <div className='flex items-center mx-2 my-1'>
          <BsGenderAmbiguous size={20} className='mr-2'/>
          <h2 className='text-lg'>{character.gender}</h2>
        </div>
        <div className='flex justify-between mx-2 my-1 text-lg items-center'>
          <div className='flex items-center'>
            <FaBirthdayCake size={20} className='mr-2'/>
            <h2 className='text-lg'>{character.birth}</h2>
          </div>
          <MdFavorite 
            size={35} 
            onClick={() => dispatch(setFavorites({name: character.name, gender: character.gender, birth: character.birth, planet: character.planet}))}
            className='cursor-pointer text-red-500'
          />
        </div>
        <div className='flex items-center mx-2 my-1'>
            <MdPlace size={20} className='mr-2'/>
            <h2>{character.planet}</h2>
        </div>
      </div>
      )
      : favorites.length > 0 && favorites.map((character) => 
      <div className='w-4/5 h-30 flex flex-col m-8 border-2 border-yellow-400 rounded-lg'>
        <h1 className='text-xl m-2 underline'>{character.name}</h1>
        <div className='flex items-center mx-2 my-1'>
          <BsGenderAmbiguous size={20} className='mr-2'/>
          <h2 className='text-lg'>{character.gender}</h2>
        </div>
        <div className='flex justify-between mx-2 my-1 text-lg items-center'>
          <div className='flex items-center'>
            <FaBirthdayCake size={20} className='mr-2'/>
            <h2 className='text-lg'>{character.birth}</h2>
          </div>
          <MdFavorite 
            size={35} 
            onClick={() => dispatch(setFavorites({name: character.name, gender: character.gender, birth: character.birth, planet: character.planet}))}
            className='cursor-pointer text-red-500'
          />
        </div>
        <div className='flex items-center mx-2 my-1'>
            <MdPlace size={20} className='mr-2'/>
            <h2>{character.planet}</h2>
        </div>
      </div>)
      }
      </div>
    </div>
  )
}

export default Favorites