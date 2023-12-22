import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-600 flex justify-around items-center py-5 text-white">
        <a className="text-light text-xl" href="">
          Aplicacion_web
        </a>
        <ul className="flex justify-between items-center space-x-3">
          <li>
            <a href="" className="text-light mr-3">
              Home
            </a>
          </li>
          <li>
            <a href="./login" className="text-light mr-3">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
