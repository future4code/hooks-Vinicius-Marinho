import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const TripConponent = styled.div`
border: solid black 1px;
padding: 10px;
width: 500px;
`

const TripName = styled.div`
border: solid black 1px;
padding: 10px;
width: 500px;
display: flex;
flex-direction: row;
justify-content: space-between;
`

const useListTrips = ()=>{
    const [trips, setTrips]=useState([])

    const navigate = useNavigate()
    
    useEffect(()=>{getTrips()},[])

    const getTrips = ()=>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-marinho-hooks/trips"

        axios
            .get(url)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => console.log(err))
    }

    const deleteTrips = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-marinho-hooks/trips/${id}`

        const headers = {
            headers: {
                auth : localStorage.getItem("token")
            }
        }

        axios
            .delete(url,headers)
            .then((res) =>{
                getTrips()
            })
            .catch((err) => console.log(err))
    }

    const tripsComponent = trips.map(trip => {
        return (
            <TripConponent key={trip.id}>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Duração: {trip.durationInDays}</p>
                <p>Data: {trip.date}</p>
                <button>Increver-se</button>
            </TripConponent>
        )
    })

    const goToTripDetails = (id) => {
        navigate(`/admin/trips/${id}`)
    }

    const tripsName = trips.map(trip => {
        return (
            <TripName key={trip.id}>
                <p>{trip.name}</p>
                <button onClick={deleteTrips}>X</button>
                <button onClick={goToTripDetails}>Detalhes</button>
            </TripName>
        )
    })

    return (
        {tripsName, tripsComponent}
    )
}

export default useListTrips
