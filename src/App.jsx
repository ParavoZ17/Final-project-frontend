import NavigationPage from "./pages/NavigationPage/NavigationPage"
import "./shared/styles/style.css"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  selectToken } from "./store/auth/authSelector"

import { getCurrentUser } from "./store/auth/authOperations"

function App() {
 

const isToken = useSelector(selectToken)

const dispatch = useDispatch()

useEffect(()=>{
if(isToken){
  dispatch(getCurrentUser())
}
},[dispatch,isToken])
  return (
    <>
     <NavigationPage/>
    </>
  )
}

export default App

