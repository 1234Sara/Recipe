import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import MealDetails from './components/MealDetails/MealDetails';
import CategoryMeal from './components/CategoryMeal/CategoryMeal';
import Category from './components/Category/Category';
import List from './components/List/List';


const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'category-meal',
        element: <CategoryMeal/>
      },
      {
        path: 'meal/:id',
        element: <MealDetails/>
      },
      {
        path: 'category/:id',
        element: <Category/>
      },
      {
        path: '*',
        element: <NotFound/>
      },
      
    ]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
