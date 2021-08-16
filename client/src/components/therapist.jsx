import {useState, useEffect} from 'react'
import TherapistCards from './therapistcards';


function Therapist({currentUser}) {
const therapistsUrl = 'http://localhost:3000/therapists'
const [therapists, setTherapists] = useState ([])

    useEffect(() =>{
        fetch(therapistsUrl)
            .then((res) => res.json())
            .then((data) => setTherapists(data))
      }, [])

    const therapistsCards = therapists.map(therapist => 
        <TherapistCards 
        currentUser={currentUser}
        key={therapist.id}
        therapist={therapist}
        therapistReview={therapist.reviews}
    />)

    return (
        <div>
            <h1>Therapist</h1>
            {therapistsCards}
        </div>
    )
}


export default Therapist;
