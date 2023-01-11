import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import {useDispatch, useSelector} from 'react-redux'
import {getAllPeople, getAllPlanets, setFavorites} from '../redux/actions'
import {MdFavorite, MdPlace} from 'react-icons/md'
import {FaBirthdayCake} from 'react-icons/fa'
import {BsGenderAmbiguous} from 'react-icons/bs'

const Characters = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const dispatch = useDispatch()
  const {characters, planets, favorites} = useSelector(state => state)
  
  useEffect(() => {
    if(characters.length === 0){
    dispatch(getAllPeople())
    dispatch(getAllPlanets())
    }
    else {
      setCurrentPage(0)
    }
  }, [])

  const prevPage = ()=>{
    if(currentPage < 9){
        setCurrentPage(0)
    }else{
        setCurrentPage(currentPage - 9)
    }
  }

  const nextPage = ()=>{
    if(characters.length <= currentPage + 9){
        setCurrentPage(currentPage)
    }else{
        setCurrentPage(currentPage + 9)
    }
  }

  const charactersPage = characters.slice(currentPage, currentPage + 9)
  
  return (
    <div>
      <Navbar/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14'>
        {charactersPage.length > 0 && charactersPage.map((character) => 
        <div className='w-4/5 h-30 flex flex-col m-8 border-2 border-yellow-400 rounded-lg'>
          <h1 className='text-xl m-2 underline'>{character.name}</h1>
          <div className='flex items-center mx-2 my-1'>
            <BsGenderAmbiguous size={20} className='mr-2'/>
            <h2 className='text-lg'>{character.gender}</h2>
          </div>
          <div className='flex justify-between mx-2 my-1 text-lg items-center'>
            <div className='flex items-center'>
            <FaBirthdayCake size={20} className='mr-2'/>
            <h2 className='text-lg'>{character.birth_year}</h2>
            </div>
            <MdFavorite 
            size={35} 
            onClick={() => dispatch(setFavorites({name: character.name, gender: character.gender, birth: character.birth_year, planet: planets.filter((planet) => planet.url === character.homeworld)[0].name}))}
            className={favorites.filter(c=> c.name === character.name).length === 0 ? 'cursor-pointer mr-4 hover:scale-110' : 'cursor-pointer text-red-500 mr-4 hover:scale-110'}
            />
          </div>
          <div className='flex items-center mx-2 my-1'>
            <MdPlace size={20} className='mr-2'/>
            <h2 className='text-lg'>{planets.length > 0 && planets.filter((planet) => planet.url === character.homeworld)[0].name}</h2>
          </div>
        </div>
        )
        }
      </div>
      <div className='flex justify-center'>
      {currentPage === 0 ? null :
        <button onClick={prevPage} className='p-2 m-2 bg-black border-2 border-yellow-400 rounded-lg hover:scale-105'>
          Previous
        </button>}
      {currentPage === characters.length-1 ? null :
        <button onClick={nextPage} className='p-2 m-2 bg-black border-2 border-yellow-400 rounded-lg hover:scale-105'>
          Next
        </button>}
      </div>
    </div>
  )
}

export default Characters