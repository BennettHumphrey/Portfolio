import { useEffect, useState } from 'react'
import { getPets } from './Sanity'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import MainBody from './components/MainBody/MainBody'
import OtherProjects from './components/OtherProjects/OtherProjects'
import Footer from './components/Footer/Footer'

function App() {

  // const [pets, setPets] = useState('')

  // useEffect(() => {
  //   getPets().then((result) => setPets(result))
  // }, []);

  return (
    <>
      {/* <Nav  /> */}
      <Header  />
      <MainBody  />
      {/* <OtherProjects  /> */}
      {/* <Footer  /> */}
      {/* {pets.length > 0 ?
        pets.map((pet, index) => <p key={index}>{pet.name}</p>) : <p>Loading...</p>} */}
    </>
  )
}

export default App
