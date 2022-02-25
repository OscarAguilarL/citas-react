import { Paciente } from './Paciente'

export const ListadoPacientes = ({ pacientes = [], setPaciente = {} }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-2xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{' '}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>

          {pacientes.map((el) => (
            <Paciente paciente={el} key={el.id} setPaciente={setPaciente} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-2xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando tus pacientes{' '}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  )
}
