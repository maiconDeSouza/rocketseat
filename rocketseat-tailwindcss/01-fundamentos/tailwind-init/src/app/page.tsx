import Image from 'next/image'

export default function Home() {
  return (
   <div className='p-8 bg-slate-900 text-slate-100 md:h-screen flex flex-col justify-center items-center gap-2'>
    <h1 className='font-bold text-5xl first-letter:text-6xl first-letter:text-sky-300'>Hello TailwindCSS</h1>
    <h2>Aula de Tailwind</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laboriosam numquam porro neque, doloremque 
      sed quam temporibus repellendus! Molestias vel praesentium fugit amet rerum perspiciatis quam ipsum 
      voluptas sed modi!
    </p>
    <button disabled type='button' className='bg-sky-500 px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed'>Sign in</button>
    <div className='flex flex-col md:flex-row gap-2'>
      <div className='w-32 h-32 bg-red-500'></div>
      <div className='w-32 h-32 bg-sky-500'></div>
      <div className='w-32 h-32 bg-amber-500'></div>
      <div className='w-32 h-32 bg-green-500'></div>
      <div className='w-32 h-32 bg-teal-500'></div>
      <div className='w-32 h-32 bg-amber-500'></div>
    </div>
   </div>
  )
}
