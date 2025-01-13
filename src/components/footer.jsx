import { BsFacebook, BsTwitter, BsInstagram, BsPinterest, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-400 py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Redes sociales */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-yellow-300 transition duration-300"
            title="Facebook"
          >
            <BsFacebook className="h-6 w-6" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-yellow-300 transition duration-300"
            title="Twitter"
          >
            <BsTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-yellow-300 transition duration-300"
            title="Instagram"
          >
            <BsInstagram className="h-6 w-6" />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-yellow-300 transition duration-300"
            title="GitHub"
          >
            <BsGithub className="h-6 w-6" />
          </a>
        </div>

        {/* Texto del Footer */}
        <p className="text-sm text-slate-300">
          &copy; 2024 Elliot Harper. All rights reserved.
        </p>

        {/* Créditos opcionales */}
        <p className="text-xs text-slate-500">
          Designed with ❤️ by Elliot Harper.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

