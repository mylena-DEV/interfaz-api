import React from 'react'

const Page = () => {
  return (
      <form action='http://127.0.0.1:8000/api/clientes/' method='POST' className='max-w-md mx-auto mt-8 p-6 bg-gray-900 rounded-lg shadow-md'>
      <div className='space-y-4'>
        <div className='grow'>
        <label className='block text-md text-white mb-1'>
          Cedula
        </label>
        <input required maxLength={10} minLength={10} placeholder='Ingresar solo números' title='Ingresar solamente números' type='text' name ='Cedula' className='w-130 px-3 py-1 w-full border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent' />
        </div>
        <div className=' '>
        <label className='block text-md text-white mb-1'>
          Nombre
          <input pattern='[A-Za-zÁáÉéÍíÓóÚúÑñ\s]{2,}' required placeholder='Ingrese su nombre' title='Ingrese solamente letras' type='text' name ='Nombre' className='w-130 px-3 py-1 w-full border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent' />
        </label>
        </div>
        <div className=''>
        <label className='block text-md text-white mb-1'>
          Apellido
          <input pattern='[A-Za-zÁáÉéÍíÓóÚúÑñ\s]{2,}' required placeholder='Ingrese su apellido' title='Ingrese solamente letras' type='text' name ='Apellido' className='w-130 px-3 py-1 w-full border border-black rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent' />
        </label>
        </div>
        <div className=''>
        <label className='block text-md text-white mb-1'>
          Edad
          <input required maxLength={3} minLength={1} min={1} max={120} placeholder='Ingresar solo números' title='Ingresar solamente números' type='number' name ='Edad' className='w-130 px-3 py-1 w-full border border-black rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent' />
        </label>
        </div>
        <div className=''>
        <label className='block text-md text-white mb-1'>
          Correo
          <input required placeholder='Ingrese su correo' type='email' name ='correo' className='w-130 px-3 py-1 w-full border border-black rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent' />
        </label>
        </div>
        <div className=''>
        <label className='block text-md text-white mb-1'>
          Domicilio
          <input required placeholder='Ingrese su dirección'  type='text' name ='domicilio' className='w-130 px-3 py-1 w-full border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent' />
        </label>
        </div>
        <button className='w-full mt-6 px-4 py-2 text-white bg-red-900 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-red-900 transition-colors'>Enviar</button>
        </div>
      </form>
  )
}

export default Page
