import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import ResidentForm from './components/ResidentForm'
import ResidentList from './components/ResidentList'
import { getRandomNumber } from './helpers/handleRandom'

const RESIDENTS_PERPAGE = 8;

function App() {
  //Estado que almacena la info de la location 
  const [location, setLocation] = useState()
  //Funcion que almacena el valor del input no controlado 
  const [nameLocation, setNameLocation] = useState("")
  //Paginación
  const [page, setPage] = useState(1)
  //Dark mode
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  //Funcion que se ejecuta en el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

  //Funcion que hace la paginación en por 12 
  const pagination = () => {
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit)
    return newResidents
  }

  //Efecto que se ejecuta en el primer render y cuando cambia nameLocation
  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }, [nameLocation])
  

  return (
    <div className="App" id={theme}>
      <Header/>
      <ResidentForm changeTheme={changeTheme} theme={theme} handleSubmit={handleSubmit}/>
      <LocationInfo location={location} />
      <Pagination page={page} setPage={setPage} location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE}/>
      <ResidentList pagination={pagination}/>
      <Pagination page={page} setPage={setPage} location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE}/>
    </div>
  )
}

export default App
