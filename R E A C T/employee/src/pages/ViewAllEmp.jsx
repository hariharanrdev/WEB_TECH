import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UpdateEmp from './UpdateEmp';

const ViewAllEmp = () => {

  let navigate = useNavigate();

  let [employees, setEmployees] = useState([]);

  // Fetch Employees
  let getData = async () => {
    let res = await axios.get("http://localhost:4000/employees");
    console.log(res.data);
    setEmployees(res.data);
  };

  // Delete Employee
  let deleteEmployee = async () => {
    await axios.delete(`http://localhost:4000/employees/${id}`);
    getData(); // refresh data
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <h2>All Employees</h2>

        <p>
          In this page we will get the data from
          http://localhost:4000/employees and display it on UI
        </p>

        <table border="" cellPadding={20} cellSpacing={0}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Ename</th>
              <th>Email</th>
              <th>Designation</th>
              <th colSpan={3}>Options</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((val,ind) => {
              return (
                <tr key={ind}>
                  <td>{val.id}</td>
                  <td>{val.ename}</td>
                  <td>{val.email}</td>
                  <td>{val.designation}</td>

                  <td>
                    <button
                      onClick={() => {
                        navigate(`/view-single-emp/${val.id}`);
                      }}
                    >View
                    </button>
                  </td>
				  <td>
					<button>
						Update
					</button>
				  </td>
                  <td>
					  <button
				    	onClick={async () => {
				      	await axios.delete(`http://localhost:4000/employees/${val.id}`);
				      	getData();
				   	 }}
				  	>
				    Delete
				  </button>
				</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ViewAllEmp;