import React from 'react'

export const Paciente = () => {
  return (
    <div className="mx-5 mb-8 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">Jon Doe</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">jon@doe.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{' '}
        <span className="font-normal normal-case">10 Diciembre 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{' '}
        <span className="font-normal normal-case">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          aperiam similique aliquam laboriosam animi est adipisci placeat
          corporis sequi impedit fugit cum quod minima, quo voluptatem a
          expedita sapiente consequuntur?
        </span>
      </p>
    </div>
  )
}
