import { useState } from 'react'
import { generarId } from '../utils/generarId'

import { Error } from './Error'

export const Formulario = ({ setPacientes }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay al menos un campo vacío')
      setError(true)
      return
    }

    setPacientes((state) => [
      ...state,
      { id: generarId(), nombre, propietario, email, fecha, sintomas },
    ])

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

    setError(false)
    return
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-2xl text-center">
        Seguimiento de pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y{' '}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-16"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota
          </label>
          <input
            type="text"
            id="mascota"
            htmlFor="mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre propietario
          </label>
          <input
            type="text"
            id="propietario"
            htmlFor="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            placeholder="Nombre del dueño"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            htmlFor="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electronico"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            type="date"
            id="alta"
            htmlFor="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            placeholder="Correo electronico"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          ></textarea>
        </div>

        <input
          type="submit"
          value="Agregar paciente"
          className="bg-indigo-600 p-3 text-white uppercase font-bold rounded-xl hover:bg-indigo-700 cursor-pointer transition-colors duration-300 w-full"
        />
      </form>
    </div>
  )
}
