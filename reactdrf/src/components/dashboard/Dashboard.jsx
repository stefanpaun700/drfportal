import {useEffect, useState} from 'react'
import axios from 'axios'
import Button from './Button'

const Dashboard = () => {
  const accessToken = localStorage.getItem('accessToken')
  useEffect(() => {
    const fetchProtectedData = async () =>{
      try{
        const response = await axios.get('http://127.0.0.1:8000/api/v1/protected-view', {
          headers: {
            Authorization:`Bearer ${accessToken}`
          }
        })
        console.log('Success', response.data)
      }catch(error){
        console.error("Error fetching data", error)
      }
    }
    fetchProtectedData()
  }, [])

  return (
    <>
      <div className="container">
          <div className='p-5 mb-5 text-center bg-light-dark rounded'>
              <h1 className='text-light'>Protected Dashboard</h1>
              <p className="lead text-light">Dashboard </p>
              
          </div>
      </div>
    </>
  )
}

export default Dashboard