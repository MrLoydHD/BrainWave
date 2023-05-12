import React from 'react';
import { Link } from 'react-router-dom';
import image from '../Images/novoutilizador.jpg';

function Navbar() {
  return (
    <div className="navbar bg-primary font-bold">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost hover:bg-transparent normal-case text-3xl">Brainwave Academy</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal text-xl px-1">
          <li tabIndex={0} className='z-10'>
              <Link to="#">
                Cursos
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </Link>
              <ul className="p-2 bg-base-100">
                <li><Link to="#">Para ti</Link></li>
                <li><Link to={"/TodosCursos"}>Todos cursos</Link></li>
              </ul>
          </li>
          <li><Link to="#">Professores</Link></li>
            <li tabIndex={0}>
                <Link to="#">
                  Meu Espaço
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </Link>
                <ul className="p-2 bg-base-100 z-10">
                  <li><Link to={"/MeusCursos"}>Meus cursos</Link></li>
                  <li><Link to={"/EventCalendar"}>Meu calendário</Link></li>
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
            <Link to="#" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><Link to="#">Settings</Link></li>
          <li><Link to="#">Logout</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
