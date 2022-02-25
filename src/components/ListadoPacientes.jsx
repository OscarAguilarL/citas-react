import { Paciente } from './Paciente'

export const ListadoPacientes = ({ pacientes = [] }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen">
      <h2 className="font-black text-2xl text-center">ListadoPacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus{' '}
        <span className="text-indigo-600 font-bold">pacientes y citas</span>
      </p>

      {pacientes.map((el) => (
        <Paciente paciente={el} key={el.nombre} />
      ))}
    </div>
  )
}
