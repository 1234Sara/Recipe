  import React, { useEffect, useState } from 'react';
  import classes from './CategoryMeal.module.scss';
  import axios from 'axios';
  import { Link} from 'react-router-dom';
  import List from './../List/List';

  export default function CategoryMeal() {

    const [allCategoryMeal, setAllCategoryMeal] = useState([]);
    const [apiError, setApiError] = useState(null);


    async function getAllCategoryMeal() {
      try {

        const {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s");
        console.log(data);
        setAllCategoryMeal(data.meals); 
        setApiError(null);
      } catch (error) {
        setApiError(error.message);
        setAllCategoryMeal(null);        
      }
    }    

    useEffect(() => {
      getAllCategoryMeal();
    }, []);


    return (

      <section>
              
              
          <div className={classes.CategoryMeal}>
          <List getAllCategoryMeal={getAllCategoryMeal} />

          <div>
          {apiError && (<div className="alert alert-danger max-w-lg mb-6 mx-auto text-center capitalize">{apiError}</div>)}

            <div className="container mx-auto p-3">
              <div className="row">
                {allCategoryMeal && allCategoryMeal.map((meal) => (
                  <div key={meal.idMeal} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 my-4">
                     
                     <div className='meal text-center hover:shadow-xl group  hover:scale-105 duration-300 transition-all bg-white p-12 pb-4  rounded-[35px]'>

                      <img src={meal.strMealThumb} alt={meal.strCategoryMeal}  
                      className="w-full group-hover:rotate-[360deg] duration-700 transition-all rounded-full drop-shadow-xl -translate-y-20  shadow-2xl"/>
                        <h3 className="font-semibold font-Pacifico text-xl -mt-12">{meal.strMeal}</h3>
                        <h4 className='flex justify-center items-center gap-2 text-emerald-600'>
                        <i className="fa-solid fa-earth-americas"></i> 
                          {meal.strArea}</h4>

                       <Link to={`/meal/${meal.idMeal}`}>
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

          </div>

          
      </section>

    );
  }



  

