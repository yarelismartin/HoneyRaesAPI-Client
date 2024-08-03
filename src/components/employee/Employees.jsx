import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Employees() {
  return (
    <div>
      <h2>Employees</h2>
      <Outlet/>
    </div>
  )
}
