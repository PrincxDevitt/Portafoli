import WebsPages from "../assets/WebPages.jpg";
import Personal from "../assets/Personal.jpg";
import Work from "../assets/Work.jpg";

const Webs = () => {
  return (
    <section className="p-10 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-400">
      {/* Título */}
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">
        Projects
      </h2>

      {/* Contenido en cuadrícula */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Webs Pages */}
        <div className="relative group">
          <img
            src={WebsPages}
            alt="Webs Pages"
            className="w-full h-[300px] object-cover rounded-md border-4 border-cyan-400 transition-transform duration-300 group-hover:scale-105"
          />
          <button
            className="absolute inset-0 bg-black bg-opacity-60 text-cyan-400 text-2xl font-bold flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-opacity-80 hover:text-yellow-300"
          >
            Webs Pages
          </button>
        </div>

        {/* Personal */}
        <div className="relative group">
          <img
            src={Personal}
            alt="Personal"
            className="w-full h-[300px] object-cover rounded-md border-4 border-cyan-400 transition-transform duration-300 group-hover:scale-105"
          />
          <button
            className="absolute inset-0 bg-black bg-opacity-60 text-cyan-400 text-2xl font-bold flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-opacity-80 hover:text-yellow-300"
          >
            Personal
          </button>
        </div>

        {/* Work */}
        <div className="relative group">
          <img
            src={Work}
            alt="Work"
            className="w-full h-[300px] object-cover rounded-md border-4 border-cyan-400 transition-transform duration-300 group-hover:scale-105"
          />
          <button
            className="absolute inset-0 bg-black bg-opacity-60 text-cyan-400 text-2xl font-bold flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-opacity-80 hover:text-yellow-300"
          >
            Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Webs;

