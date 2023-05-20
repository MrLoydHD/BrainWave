import './App.css'
import { BrowserRouter, Routes,Route, } from "react-router-dom"
import Home from './Pages/Home'
import TodosCursos from './Pages/TodosCursos'
import Course from './Pages/Course'
import MeusCursos from './Pages/MeusCursos'
import EventCalendar from './Pages/EventCalendar'
import MeuCursoVideos from './Pages/MeuCursoVideos'
import EspacoProfessor from './Pages/EspacoProfessor'
import EspacoProfessorVideos from './Pages/EspacoProfessorVideos'
import { useState, useMemo } from 'react'
import { UserContext } from './Contexts/UserContext'

function App() {
  const [userType, setUserType] = useState('student'); // inicialmente definido como 'student'

  const value = useMemo(() => ({ userType, setUserType }), [userType, setUserType]); // para evitar re-renderização desnecessária

  return (
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/TodosCursos" Component={TodosCursos} />
          <Route path="/TodosCursos/:id" Component={Course} />
          <Route path="/MeusCursos" Component={MeusCursos}></Route>
          <Route path="/EventCalendar" Component={EventCalendar}></Route>
          <Route path="/MeuCursoVideos/:courseId/:videoId" Component={MeuCursoVideos}></Route>
          <Route path="/EspacoProfessor" Component={EspacoProfessor}></Route>
          <Route path="/EspacoProfessor/:id" Component={EspacoProfessorVideos}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
