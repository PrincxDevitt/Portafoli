import HeroPic from "../assets/Perfil.jpg";
const Project = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-10 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-400">
      {/* About Me */}
      <div className="relative">
        <img 
          src={HeroPic}
          alt="About Me" 
          className="w-full h-[300px] object-cover rounded-md border-4 border-cyan-400" 
        />
        <button 
          className="absolute inset-0 bg-black bg-opacity-60 text-cyan-400 text-2xl font-bold flex items-center justify-center rounded-md hover:bg-opacity-80 hover:text-yellow-300 transition duration-300">
          About Me
        </button>
      </div>

      {/* Qualification */}
      <div className="relative">
        <img 
          src={HeroPic}
          alt="Qualification" 
          className="w-full h-[300px] object-cover rounded-md border-4 border-cyan-400" 
        />
        <button 
          className="absolute inset-0 bg-black bg-opacity-60 text-cyan-400 text-2xl font-bold flex items-center justify-center rounded-md hover:bg-opacity-80 hover:text-yellow-300 transition duration-300">
          Qualification
        </button>
      </div>

      {/* Projects */}
      <div className="relative">
        <img 
          src={HeroPic}
          alt="Projects" 
          className="w-full h-[300px] object-cover rounded-md border-4 border-cyan-400" 
        />
        <button 
          className="absolute inset-0 bg-black bg-opacity-60 text-cyan-400 text-2xl font-bold flex items-center justify-center rounded-md hover:bg-opacity-80 hover:text-yellow-300 transition duration-300">
          Projects
        </button>
      </div>

      {/* Contact */}
      <div className="relative">
        <img 
          src={HeroPic}
          alt="Contact" 
          className="w-full h-[300px] object-cover rounded-md border-4 border-cyan-400" 
        />
        <button 
          className="absolute inset-0 bg-black bg-opacity-60 text-cyan-400 text-2xl font-bold flex items-center justify-center rounded-md hover:bg-opacity-80 hover:text-yellow-300 transition duration-300">
          Contact
        </button>
      </div>
    </section>
  );
};

export default Project;