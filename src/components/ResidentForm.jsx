import React from 'react'
import "./styles/ResidentForm.css"

const ResidentForm = ({handleSubmit, theme, changeTheme}) => {
    return (
        <form onSubmit={handleSubmit} className="dimensionFilter">
            <button className='dimensionFilter__icon'><i className='bx bx-search-alt-2'></i></button>
            <input className='dimensionFilter__input' type="text" id='idLocation' placeholder='type a location id'/>
            <div onClick={changeTheme} className='dimensionFilter__icon dimensionFilter__icon--link'>
                <i className={`navbar__icon bx bx-${theme === "light" ? "moon" : "sun"}`}></i>
            </div>
        </form>
    )
}

export default ResidentForm
