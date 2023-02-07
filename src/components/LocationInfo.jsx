import React from 'react'
import "./styles/Location.css"

const LocationInfo = ({location}) => {
    return (
        <section className='location__info'>
            <h2 className='location__title'>{location?.name}</h2>
            <ul className='location__flex'> 
                <li className='location__ul div1'>Type: <span>{location?.type}</span></li>
                <li className='location__ul div2'>Dimension: <span>{location?.dimension}</span></li>
                <li className='location__ul div3'>Population: <span>{location?.residents.length}</span></li>
            </ul>
        </section>
    )
}

export default LocationInfo
