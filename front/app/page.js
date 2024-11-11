import React from 'react'

const Page = () => {
  return (
    <div className='bg-red-400 mx-auto flex'>

      <form action='http://127.0.0.1:8000/api/clientes/' method='POST' className='bg-red-400'>
      <div className='flex'>
        <div className='grow gap-1'>
        <label className='bg-red-400 text-white'>
          Cedula
          <input type='text' name ='Cedula' className='bg-red-400' />
        </label>
        </div>
        <div className='grow gap-1 '>
        <label className='bg-red-400  text-white'>
          Nombre
          <input type='text' name ='Nombre' className='bg-red-400' />
        </label>
        </div>
        <div className='grow gap-1'>
        <label className='bg-red-400  text-white'>
          Apellido
          <input type='text' name ='Apellido' className='bg-red-400' />
        </label>
        </div>
        <div className='grow gap-1'>
        <label className='bg-red-400  text-white'>
          Edad
          <input type='number' name ='Edad' className='bg-red-400' />
        </label>
        </div>
        <div className='grow gap-1'>
        <label className='bg-red-400  text-white'>
          correo
          <input type='email' name ='correo' className='bg-red-400' />
        </label>
        </div>
        <div className='grow gap-1'>
        <label className='bg-red-400  text-white'>
          domicilio
          <input type='text' name ='domicilio' className='bg-red-400' />
        </label>
        </div>
        <button className='bg-black text-white' type='submit'>Enviar</button>
        </div>
      </form>

    </div>
  )
}

export default Page
