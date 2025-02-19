import React, { useEffect, useState } from 'react'
import classes from './MealDetails.module.scss'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function MealDetails() {

  const [allMeals, setAllMeals] = useState([]);
  const [apiError, setApiError] = useState(null);
  
  const {id} = useParams();


  const openUrl = (url) => {
      // window.open(url, "_blank");
    globalThis.open(url, "_blank");
  };

  async function getMeals() {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      console.log(data);
      setAllMeals(data.meals);
      setApiError(null);
      
    } catch (error) {
      console.error(error);
      setApiError(data.message);
    }
  }

  useEffect(() => {
    getMeals();
  }, [id])
  
  
  return (
    <div className={classes.MealDetails}>

        {apiError && (<div className="alert alert-danger max-w-lg mb-6 mx-auto text-center capitalize">{apiError}</div>)}
        
              <div className="container mx-auto p-3">
              <div className="row">
                {allMeals && allMeals.map((meal) => (
                  <div key={meal.idMeal}>
                    
                    <h3 className={`${classes.Heading} text-5xl font-semibold mb-4 md:mb-4 ml-44 mt-4`}>{meal.strMeal}</h3>
  
                  <div className='flex flex-col lg:flex-row gap-8 mt-6 items-start mb-32 lg:ml-40'>
                  <div className='lg:w-5/12'> 
                        <img src={meal.strMealThumb} alt={meal.strCategory}  
                        className="rounded-2xl mb-4 w-full"/>
  
                        <div className={`${classes.btn} flex gap-2`}>
                          <button 
                            type="submit" 
                            onClick={() => openUrl(meal.strYoutube)}
                            className="bg-red-600 text-white py-2 px-3 rounded-lg flex items-center gap-2">
                            <i className="fa-brands fa-youtube"></i> YouTube
                          </button>
                          
                          <button 
                            type="submit" 
                            onClick={() => openUrl(meal.strSource)}
                            className="bg-green-600 text-white py-2 px-3 rounded-lg flex items-center gap-2">
                            <i className="fa-solid fa-globe"></i> Source
                          </button>
                        </div>
                        </div>  
                        <div className='lg:w-5/12'>
                        <p>{meal.strInstructions}</p>
                        </div>
                        <div className={`${classes.Ingredient} lg:w-5/12 bg-white rounded-2xl p-4`}>
                        <h3 className='text-2xl font-semibold mb-4 border-b-4 p-2'>Ingredients</h3>
                        {Object.keys(meal)
                          .filter((key) => key.startsWith("strIngredient") && meal[key])
                          .map((key, index) => (
                            <div key={index} className='flex justify-between p-2 border-b-2 last-of-type:border-b-0'>
                              <span>{meal[key]} :</span>
                              <span>{meal[`strMeasure${key.replace("strIngredient", "")}`]}</span> 
                            </div>
                          ))}
                      </div>

                  </div>
                    </div>
                  
                  
                ))}
              </div>
            </div>

    </div>
  )
}



