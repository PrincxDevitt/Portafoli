import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';
import HeroPic from "../assets/Perfil.jpg";

const Hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-400
    lg:flex-row ssm:flex-col ssm:space-y-10'>
      
      {/* Texto del Hero */}
      <div className='lg:w-1/3 ssm:w-fit'>
        <p className='text-4xl mb-5 text-slate-300'>I'm</p>
        <h1 className='text-6xl text-cyan-400 font-bold'>Elliot Harper</h1>
        <hr className='my-4 border-cyan-400' />
        
        {/* Descripción del Cliente */}
        <p className='mt-5 text-lg text-slate-300 italic'>
          Diseñador web creativo apasionado por transformar ideas en soluciones visuales impactantes.
        </p>

        <p className='mt-10 text-xl text-slate-300 font-sans'>
           Soy un desarrollador front-end especializado en la creación de interfaces interactivas y responsivas. 
           Mi enfoque está en construir experiencias web visualmente atractivas y funcionales, optimizando la usabilidad y el rendimiento. 
           Trabajo con tecnologías modernas como React, Tailwind CSS y JavaScript, 
           garantizando que cada proyecto sea accesible, rápido y adaptado a las necesidades del usuario.
        </p>
        
        {/* Redes sociales */}
    <div className="mt-6 flex space-x-6 ">
        <a href="https://www.facebook.com" target="_blank" className="text-cyan-400 hover:text-yellow-300 transition duration-300" title="Facebook">
            <BsFacebook className="h-6 w-6" />
        </a>
        <a href="https://www.twitter.com" target="_blank" className="text-cyan-400 hover:text-yellow-300 transition duration-300" title="Twitter">
            <BsTwitter className="h-6 w-6" />
        </a>
        <a href="https://www.instagram.com" target="_blank" className="text-cyan-400 hover:text-yellow-300 transition duration-300" title="Instagram">
            <BsInstagram className="h-6 w-6" />
        </a>

        {/* Poner icon de gmail,Linkeding */}
        
    </div>
      </div>

      {/* Imagen del Hero */}
      <div className='w-1/3 items-center ssm:w-fit'>
        <img 
          src={HeroPic} 
          alt="Perfil" 
          width={600} 
          height={600}  
          className='rounded-full border-8 border-cyan-400 mx-auto w-[500px] h-[500px] object-cover'
        />

     
      </div>

      
    </section>
  );
}

export default Hero;

