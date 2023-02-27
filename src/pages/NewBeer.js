import { useState } from "react"

import axios from "axios"

import { useNavigate } from "react-router-dom"

const NewBeer = () => {

    // const [newDrink, setNewDrink] = useState(
    //     {
    //         name:'',
    //         tagline: '',
    //         description:'',
    //         first_brewed:'',
    //         brewers_tips:''
    //         attenuation_level:null,
    //         contributed_by:''
    //     }
    // )

    const [ name, setName ] = useState('')
    const [ tagline, setTagline ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ first_brewed, setFirst] = useState('')
    const [ brewers_tips, setTips] = useState('')
    const [ attenuation_level, setAttenuation ] = useState(null)
    const [ contributed_by, setContributed ] = useState('')

    const body = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}

    const navigate = useNavigate()


    const handleSubmit = (e) => {
            e.preventDefault()

            axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
                .then((result)=>{
                    console.log(result)
                    navigate('/beers')
                })
                .catch((err)=>{
                    console.log(err)
                })
    }

    return (
        <div id="add">
            <h1>Add A New Beer</h1>
            
            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Tagline</label>
                <input type='text' name="tagline" value={tagline} onChange={(e) => setTagline(e.target.value)}/>

                <label>Description</label>
                <input type='text' name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>

                <label>First Brewed</label>
                <input type='text' name="first_brewed" value={first_brewed} onChange={(e) => setFirst(e.target.value)} />

                <label>Brewers Tips</label>
                <input type='text' name="brewers_tips" value={brewers_tips} onChange={(e) => setTips(e.target.value)}/>

                <label>Attenuation Level</label>
                <input type='number' name="attenuation_level" value={attenuation_level} onChange={(e) => setAttenuation(e.target.value)}/>

                <label>Contributed By</label>
                <input type='text' name="contributed_by" value={contributed_by} onChange={(e) => setContributed(e.target.value)}/>

                <button type="submit">Add Beer</button>

            </form>

        </div>
    )
}

export default NewBeer