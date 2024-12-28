
import React from "react";
import { FaGithub } from "react-icons/fa"; // Ícono de GitHub
import { HiOutlineFolderOpen } from "react-icons/hi"; // Ícono para Proyectos
import { MdContactMail } from "react-icons/md"; // Ícono de Contacto
import { BsMoonStars } from "react-icons/bs"; // Ícono para Modo Oscuro

const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-between p-10 bg-black">

        <div className="flex space-x-8">

          <a
            href="#"
            className="text-cyan-400 font-mono text-xl flex items-center space-x-2 hover:text-yellow-300 transition"
            title="GitHub"
          >
            <FaGithub className="h-6 w-6" />
            
          </a>

          <a
            href="#"
            className="text-cyan-400 font-mono text-xl flex items-center space-x-2 hover:text-yellow-300  transition"
            title="Proyectos"
          >
            <HiOutlineFolderOpen className="h-6 w-6" />
            
          </a>

          <a
            href="#"
            className="text-cyan-400 font-mono text-xl flex items-center space-x-2 hover:text-yellow-300 transition"
            title="Contacto"
          >
            <MdContactMail className="h-6 w-6" />
            
          </a>
        </div>

        <div>
          <a
            href="#"
            className="text-cyan-400 font-mono text-xl flex items-center space-x-2 hover:text-yellow-300  transition"
            title="Modo Oscuro"
          >
            <BsMoonStars className="h-6 w-6" />
            
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;


