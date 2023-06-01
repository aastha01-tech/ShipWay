import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Private() {
    var auth = localStorage.getItem('user')
  return (
   auth ? <Outlet/> : <Navigate to='/register' /> 
  )
}
