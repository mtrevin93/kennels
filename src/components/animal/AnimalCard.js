import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__location__address">Location: {animal.location.address}</div>
        <div className="animal__customer__name">Customer: {animal.customer.name}</div>
    </section>
)