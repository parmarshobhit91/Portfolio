import { Link } from "react-scroll";
import logoImage from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="shadow-md border border-gray-500">
      <div className="container mx-auto h-[80px] px-8 flex justify-between items-center">
        {/* Logo */}
        <img src={logoImage} alt="Logo" className="h-[70px] flex-shrink-0" />

        {/* Navigation Links */}
        <div className="hidden md:flex gap-x-8">
          {["home", "about", "skills", "experience", "projects"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="text-xl font-medium px-3 py-2 rounded-4xl text-black hover:bg-white cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Contact Me Button */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="px-6 py-2 text-lg font-medium text-white bg-[#4D9DE0] border border-black hover:bg-black rounded-xl cursor-pointer"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
