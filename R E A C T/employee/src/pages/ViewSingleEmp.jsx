import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ViewSingleEmp = () => {
  let [employee,setEmployee]=useState({
	id:"",
	ename:"",
	email:"",
	designation:""
  })
  let {empid} = useParams();
  console.log(empid);

  console.log(`I am getting data from http://localhost:4000/employees`)

  useEffect(()=>{
	let getdata = async () => {
		let {data} = await axios.get(`http://localhost:4000/employees/${empid}`)
		console.log(data);
		setEmployee(data);
	}
	getdata();

  },[])
  return(
	<>
		<h1>View Single Emp Page</h1>
		<h2>Employee Id: {employee.id}</h2>
		<h2>Name: {employee.ename}</h2>
		<h2>Email: {employee.email}</h2>
		<h2>Designation: {employee.designation}</h2>

	</>
  )
}

export default ViewSingleEmp;