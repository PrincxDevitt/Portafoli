import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';
import HeroPic from "../assets/Perfil.jpg";

const qualification = () => {
  return (
   <section className='flex flex-col lg:flex-row justify-around items-center p-10 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-400 lg:space-x-10 ssm:space-y-10'>
  {/* Contenedor del Texto */}
  <div className='lg:w-2/3 ssm:w-full text-center lg:text-left'>
    <h1 className='text-5xl lg:text-6xl text-cyan-400 font-extrabold'>
      Your Front-End Developer
    </h1>
    <hr className='my-6 border-t-2 border-cyan-400 mx-auto lg:mx-0 w-2/3 lg:w-1/3' />
    
    {/* Introducción */}
    <p className='mt-5 text-lg text-slate-300 italic'>
      Transformando ideas en experiencias digitales excepcionales.
    </p>

    {/* Descripción */}
    <p className='mt-8 text-lg lg:text-xl text-slate-300 leading-relaxed'>
      Como desarrollador front-end, combino creatividad, funcionalidad y accesibilidad 
      para diseñar y construir interfaces web atractivas e interactivas. 
      Utilizo tecnologías modernas como <span className='text-cyan-400 font-semibold'>React</span>, 
      <span className='text-cyan-400 font-semibold'> Tailwind CSS</span>, y <span className='text-cyan-400 font-semibold'>JavaScript</span> 
      para garantizar resultados optimizados y personalizados a las necesidades de los usuarios.
    </p>

    {/* Lista de Habilidades */}
    <div className='mt-8'>
      <h2 className='text-2xl text-cyan-400 font-semibold mb-4'>Habilidades clave:</h2>
      <ul className='list-disc list-inside text-slate-300 space-y-2'>
        <li>Diseño de interfaces responsivas y adaptativas.</li>
        <li>Optimización del rendimiento y velocidad de carga.</li>
        <li>Colaboración eficaz con equipos multidisciplinarios.</li>
        <li>Resolución de problemas técnicos y mejoras iterativas.</li>
      </ul>
    </div>
  </div>
</section>

      );
    }

export default qualification