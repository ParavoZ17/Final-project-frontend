import NavigationPage from "./pages/NavigationPage/NavigationPage"
import "./shared/styles/style.css"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  selectToken } from "./store/auth/authSelector"

import { getCurrentUser } from "./store/auth/authOperations"
import { ToastContainer } from "react-toastify"

function App() {
 

const isToken = useSelector(selectToken)

const dispatch = useDispatch()

useEffect(()=>{
if(isToken){
  dispatch(getCurrentUser())
}
},[dispatch,isToken])
  return (
    <div style={{
    margin: "0 auto",
    width: "100%",
    backgroundColor: "#ffffff",
  }}>
     <NavigationPage/>
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  )
}

export default App

