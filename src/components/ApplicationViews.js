import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { LocationForm } from "./location/LocationForm"
import { LocationDeta
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/animals */}
            <Route exact path ="/">
                <Home />
            </Route>
            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                    <CustomerProvider>
                        <LocationProvider>
                            <Route exact path="/animals">
                                <AnimalList />
                            </Route>
                            <Route exact path="/animals/create">
                                <AnimalForm />
                            </Route>
                            <Route exact path="/animals/detail/:animalId(\d+)">
                                <AnimalDetail />
                                {/* : means grab anything that looks like this. /d+ is a selector for positive digits */}
                            </Route>
                        </LocationProvider>
                    </CustomerProvider>
            </AnimalProvider>
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
                <Route exact path="/locations/create">
                    <LocationForm />
                </Route>
                <Route exact path="/locations/detail/:locationID(\d+)">
                    <LocationDetail />
                </Route>
            </LocationProvider>
            <EmployeeProvider> 
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
                <Route exact path="/employees/detail/:employeeId(\d+)">
                    <EmployeeDetail />
                </Route>
                    <LocationProvider>
                        <Route exact path ="/employees/create">
                            <EmployeeForm />
                        </Route>
                    </LocationProvider>
            </EmployeeProvider>
            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}