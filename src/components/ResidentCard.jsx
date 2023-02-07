import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles/ResidentCard.css"

const ResidentCard = ({residentUrl}) => {
    const [residentInfo, setResidentInfo] = useState()

    useEffect(() => {
        axios.get(residentUrl)
            .then((res) => setResidentInfo(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <article className='residentCard'>
            <div className='residentCard__img'>
                <img src={residentInfo?.image} alt="" />
            </div>
            <div className='residentCard__status'>
                <div className={`residentCard__status-circle ${residentInfo?.status}`}></div>
                <h4 className='residentCard__status-name'>{residentInfo?.status}</h4>
            </div>
            <section className='residentCard__info'>
                <h3 className='residentCard__name' >Name: <span>{residentInfo?.name}</span></h3>
                <hr className='residentCard__line'/>
                <ul className='residentCard__list'>
                    <li className='residentCard__item'>Specie:<span> {residentInfo?.species}</span></li>
                    <li className='residentCard__item'>Origin:<span> {residentInfo?.origin.name}</span></li>
                    <li className='residentCard__item'>Episodes where appears:<span> {residentInfo?.episode.length}</span></li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard
