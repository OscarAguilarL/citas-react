import { Header, Formulario, ListadoPacientes } from './components'
import { useState } from 'react'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario  setPacientes={setPacientes} />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} />
      </div>
    </div>
  )
}

export default App
