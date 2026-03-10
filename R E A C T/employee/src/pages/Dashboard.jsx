import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
	<>
		<nav
		style={{
			display:"flex",
			justifyContent:"space-between"
		}}>
			<div>Logo</div>
			<div style={{
				display:"flex",
				gap:"20px"
			}}>
				<NavLink to="create-emp">Create Employees</NavLink> 
				<NavLink to="view-all-emp">View All Employees</NavLink> 
			</div>
		</nav>
		<hr />
		<Outlet /> 
	</>
  )
}
export default Dashboard;