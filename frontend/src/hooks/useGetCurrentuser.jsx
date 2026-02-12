import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux';
const serverUrl = "http://localhost:8000";
import { setUserData } from '../redux/userSlice';


const useGetCurrentuser = () => { 

    const dispatch=useDispatch()

useEffect(()=>{
const fetchUser = async () => {
    try {
        const result = await axios.get(`${serverUrl}/api/user/current`,{withCredentials:true})
              dispatch(setUserData(result.data))
        
        
    } catch (error) {
        console.log(error);
        
    }
}
fetchUser()
},[])

}

export default useGetCurrentuser