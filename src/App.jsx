import { Header, Formulario, ListadoPacientes } from './components'
import { useState } from 'react'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (pacienteState) => pacienteState.id !== id
    )

    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
