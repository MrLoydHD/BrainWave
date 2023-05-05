import React from 'react';
import { Link } from 'react-router-dom';
import image from '../Images/novoutilizador.jpg';

function Navbar() {
  return (
    <div className="navbar bg-gray-400">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl text-white">Brainwave Academy</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0} className='z-10'>
              <a>
                Cursos
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li><a>Para ti</a></li>
                <li><a><Link to={"/TodosCursos"}>Todos cursos</Link></a></li>
              </ul>
          </li>
          <li><a>Professores</a></li>
            <li tabIndex={0}>
                <a>
                  Meu Espaço
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="p-2 bg-base-100 z-10">
                  <Link to={"/MeusCursos"}><li><a>Meus cursos</a></li></Link>
                  
                  <li><a>Meu calendário</a></li>
                </ul>
            </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img className="w-full h-40 object-cover" src={image} alt={"title"} />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;