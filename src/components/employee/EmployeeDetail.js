import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams } from "react-router-dom"

export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext)

	const [employee, setEmployee] = useState({})

	const {employeeId} = useParams();

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployee(response)
    })
  }, [])
  return (
    <section className="employee">
      <Link to={`/employees/detail/${employee.id}`}>
      <h3 className="employee__name">{employee.name}</h3>
      </Link>
      {/*Question mark: Tries to find property, skips it if DNE. Otherwise nested trying to access property of undefined obj would blow up.*/}
      <div className="animal__location">Location: {employee.location?.name}</div>
    </section>
  )
}
