import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import { useHistory } from "react-router"
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()

  }, [])

const history = useHistory()

  return (
    <div className="locations">
      <h2>Locations</h2>
      <button onClick={() => {history.push("/locations/create")}}>
        Add Location
      </button>
      {console.log("LocationList: Render", locations)}
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
  )
}

