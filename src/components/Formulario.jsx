export const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-20">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añadir pacientes y{' '}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota
          </label>
          <input
            type="text"
            id="name"
            htmlFor="name"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          />
        </div>
      </form>
    </div>
  )
}
