import React, { useState } from 'react'
import classes from './Category.module.scss'
import axios from 'axios'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import List from '../List/List';


export default function Category() {

  const [item, setItem] = useState([]);
  const [apiError, setApiError] = useState(null);
  const {id} = useParams();

 async function getCategory() {
  try {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
      console.log(data);
      setItem(data.meals);
      setApiError(null);
  } catch (error) {
    console.error();
    setApiError(error.message);
    setItem(null);
  }
  }

  useEffect(() => {
    getCategory();
  }, [id])
  

  return (
    <div className={classes.Item}>

      <List/>

    {apiError && (<div className="alert alert-danger max-w-lg mb-6 mx-auto text-center capitalize my-56">{apiError}</div>)}

                <div className="container mx-auto p-3">
              <div className="row">
                {item && item.map((cat) => (
                  <div key={cat.idMeal} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 my-4">
                     
                     <div className='meal text-center hover:shadow-xl group  hover:scale-105 duration-300 transition-all bg-white p-12 pb-4  rounded-[35px]'>

                      <img src={cat.strMealThumb} alt={cat.strMeal}  
                      className="w-full group-hover:rotate-[360deg] duration-700 transition-all rounded-full drop-shadow-xl -translate-y-20  shadow-2xl"/>
                        <h3 className="font-semibold font-Pacifico text-xl -mt-12 line-clamp-3">{cat.strMeal}</h3>
                       <Link to={`/meal/${cat.idMeal}`}>
                       <button className='text-white bg-gradient-to-r mt-4 font-semibold px-8 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600'>
                        View Recipe
                        </button>   
                       </Link>
                      </div>  
  
                  </div>
                ))}
              </div>
            </div>
    </div>
  )
}
