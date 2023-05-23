import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from '../Images/novoutilizador.jpg';
import { UserContext } from '../Contexts/UserContext';
import Card from './NavBarCard';


function Navbar() {

    const {userType, setUserType} = useContext(UserContext);
    const [notificationOn, setNotificationOn] = useState(false);
    const [avatarOn, setAvatarOn] = useState(false);

    const [notifications, setNotifications] = useState([
      { id: 1, name: 'Martim Correia', comment: 'Não entendi muito bem...' },
      { id: 2, name: 'Carlos Alberto', comment: 'Gostei do video, ...' },
      // Add as many notifications as you want
    ]);

    useEffect(() => {
      const storedUserType = localStorage.getItem('userType');
      if (storedUserType) {
        setUserType(storedUserType);
      }
    }, []);

    const handleUserChange = () => {
      setUserType(userType === 'student' ? 'teacher' : 'student');
    }

    const handleNotification = () => {
      setNotificationOn(!notificationOn);
    }

    const handleAvatar = () => {
      setAvatarOn(!avatarOn);
    }

  return (
    <div className="navbar bg-primary shadow-lg z-30 font-bold">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost hover:bg-transparent normal-case text-3xl">Brainwave Academy</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal text-xl px-1 mr-4">
          <li><Link to={"/TodosCursos"}>Todos Os Cursos</Link></li>
          {userType === 'teacher' && 
            <li>
              <Link to="/EspacoProfessor">Espaço do Professor</Link>
            </li>
          }
          <li tabIndex={0}>
              <Link to="#">
                Meu Espaço
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </Link>
              <ul className="p-2 bg-base-100 shadow-lg text-lg z-20">
                <li><Link to={"/MeusCursos"}>Cursos Comprados</Link></li>
                <li><Link to={"/EventCalendar"}>Meu calendário</Link></li>
              </ul>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end relative">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <button onClick={handleNotification}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 2a6 6 0 00-6 6v5a2 2 0 01-2 2h16a2 2 0 01-2-2V8a6 6 0 00-6-6z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 18a2 2 0 002 2h.01a2 2 0 00-2-2z" />
              </svg>
            </button>
            {userType === 'teacher' && (
              <>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform -translate-x-1 bg-red-600 rounded-full">
                2
                </span>
              </>
            )}
          </label>
          {notificationOn && (
            <ul tabIndex={0} className="mt-3 p-2 h-auto shadow-lg menu dropdown-content bg-base-100 rounded-box w-96">
              {userType === 'teacher' && (
                <>
                  {notifications.map(notification => (
                  <li key={notification.id}>
                    <Card name={notification.name} comment={notification.comment} />
                  </li>
                ))}
                
                </>
              )}
              {userType === 'student' && (
                <>
                <li className="h-32 text-center text-lg justify-center">
                    Sem notificações...
                </li>
                </>
              )}
          </ul>
          )}
      </div>
      <div className="dropdown dropdown-end mr-4">
        <label tabIndex={0} onClick={handleAvatar} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img className="w-full h-40 object-cover" src={image} alt={"title"} />
          </div>
        </label>
        {avatarOn && (
          <ul tabIndex={0} className="mt-3 p-2 shadow-lg menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link to="#" className="justify-between" onClick={handleUserChange}
              >{userType === 'student' ? 'Trocar para professor' : 'Trocar para aluno'}
              </Link>
            </li>
            <li><Link to="#">Settings</Link></li>
            <li><Link to="#">Logout</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
