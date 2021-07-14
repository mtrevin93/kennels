import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <Link to={`/employees/detail/${employee.id}`}>
        <h3 className="employee__name">{employee.name}</h3>
        </Link>
        <div className="employee__address">{employee.address}</div>
    </section>
)
