import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import { useHistory } from "react-router-dom"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: Initial Render Before Data")
    getAnimals()
    .then(getCustomers)
    .then(getLocations)

  }, [])



const history = useHistory()

  return (
    <>
    <div className="animals">
      <h2>Animals</h2>
        <button onClick={() => {history.push("/animals/create")}}>
        Add Animal
        </button>
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animal => {
          return <AnimalCard key={animal.id} 
          animal={animal} />
        })
      }
    </div>
    </>
  )
}