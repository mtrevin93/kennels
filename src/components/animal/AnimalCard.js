import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <name className="customer__name">{animal.customer.name}</name>
        <h4 className="animal__breed">{animal.breed}</h4>
        <address className="location__address">{animal.location.name}</address>
    </section>
)