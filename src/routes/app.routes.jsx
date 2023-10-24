import { Routes, Route } from "react-router-dom"
import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import {CreateDish} from "../pages/CreateDish"

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/dish" element={<Dish/>}/> 
      <Route path="/create" element={<CreateDish/>}/> 
    </Routes>
  )
}
