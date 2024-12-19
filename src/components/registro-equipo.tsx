// 'use client'
// import { useState } from 'react'
// //import { supabase } from '@/lib/supabase'

// export default function RegistroEquipo() {
//   const [nombre, setNombre] = useState('')
//   const [logoUrl, setLogoUrl] = useState('')
//   const [mensaje, setMensaje] = useState('')

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     try {
//       const { data, error } = await supabase
//         .from('equipos')
//         .insert([
//           { nombre, logo_url: logoUrl }
//         ])
//         .select()

//       if (error) throw error

//       setMensaje('Equipo registrado exitosamente')
//       setNombre('')
//       setLogoUrl('')
//     } catch (error) {
//       setMensaje('Error al registrar el equipo')
//       console.error(error)
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto mt-8">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
//             Nombre del Equipo
//           </label>
//           <input
//             type="text"
//             id="nombre"
//             value={nombre}
//             onChange={(e) => setNombre(e.target.value)}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="logo" className="block text-sm font-medium text-gray-700">
//             URL del Logo (opcional)
//           </label>
//           <input
//             type="url"
//             id="logo"
//             value={logoUrl}
//             onChange={(e) => setLogoUrl(e.target.value)}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Registrar Equipo
//         </button>

//         {mensaje && (
//           <p className={`text-center ${mensaje.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
//             {mensaje}
//           </p>
//         )}
//       </form>
//     </div>
//   )
// } 