import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
  }, [])
  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <h4 className="location__employees">Employees: </h4>
      <div className="location__employees">{location.employees?.map(employee => 
        <div className="location__employee"> {employee.name} </div>
        )}</div>
      <h4 className="location__animals">Animals: </h4> {location.animals?.map(animal =>
        <div className="location__animal"> {animal.name} </div>
         )}
    </section>
  )
}
