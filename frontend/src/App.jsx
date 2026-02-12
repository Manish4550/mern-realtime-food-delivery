import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'
import useGetCurrentuser from './hooks/useGetCurrentuser'

export const serverUrl="http://localhost:8000"

const App = () => {
  useGetCurrentuser()
  return (
    <Routes>
       <Route path="/" element={<SignUp />} />
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/signin' element={<SignIn/>}/>
     <Route path='/forgot-password' element={<ForgotPassword/>}/>


    </Routes>
  )
}

export default App