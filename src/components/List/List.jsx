import React, { useEffect, useState } from 'react'
import classes from './List.module.scss'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';


export default function List({getAllCategoryMeal}) {
    const [listMeal, setListMeal] = useState([]);
    const [apiError, setApiError] = useState(null);
    const navigate = useNavigate();
    
    async function getListMeal() {
      try {
        const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
        setListMeal(data.meals);
        setApiError(null);
        console.log(data);
        
        setApiError(null);
        
      } catch (error) {
        console.error("Error fetching categories:", error);
        setApiError(error.message);
        setListMeal(null);
      }
    }

     useEffect(() => {
      getListMeal();
        }, []);

        function handleSelectOption(event) {
          navigate(`/category/${event.target.value}`)
        }

  return (
    <div className={classes.ListMeal}>

      <h2 className={classes.ListHeading}>Learn, Cook, Eat Your Food</h2>
      
      {apiError && (<div className="alert alert-danger max-w-lg mb-6 mx-auto text-center capitalize">{apiError}</div>)}



      <select id="meal-category" className='hidden'>
                <option value="">Select Category</option>
              </select>

            <ul className={classes.MealList}>
            
            <li className={classes.ListMealItem}>
              <NavLink to={'/'} 
              // className={classes.ListMealLink} 
              className={({ isActive }) =>
                isActive ? `${classes.ListMealLink} ${classes.active}` : classes.ListMealLink
              }
  
              onClick={getAllCategoryMeal}>All</NavLink>
            </li>

              {listMeal && listMeal.map((cat, index) => (
              <>
                <li key={index} className={classes.ListMealItem}>
                  <NavLink to={`/category/${cat.strCategory}`} 
                  className={({ isActive }) =>
                    isActive ? `${classes.ListMealLink} ${classes.active}` : classes.ListMealLink
                  }>
                    {cat.strCategory}
                  </NavLink>
                </li>
              </>
              ))}
            </ul>

            <select id="meal-category" className={`${classes.select} hidden`} onChange={handleSelectOption}>
              {/* <option value="">Select Category</option> */}
              {listMeal && listMeal.map((cat, index) => (
                <option key={index} value={cat.strCategory}>{cat.strCategory}</option>
              ))}
            </select>


    </div>
  )
}




