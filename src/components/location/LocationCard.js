import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({location}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
        <div className="location__employees">{location.employees.length} Employees</div>
        <div className="location__animals">{location.animals.length} Animals</div>
    </section>
)
