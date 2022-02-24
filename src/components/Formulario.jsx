import { useState } from 'react'

export const Formulario = () => {
  const [nombre, setNombre] = useState('')

  console.log(nombre)

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-20">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añadir pacientes y{' '}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-16">
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
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          ></textarea>
        </div>

        <input
          type="submit"
          value="Agregar paciente"
          className="bg-indigo-600 p-3 text-white uppercase font-bold rounded-xl hover:bg-indigo-700 cursor-pointer transition-colors duration-300"
        />
      </form>
    </div>
  )
}
