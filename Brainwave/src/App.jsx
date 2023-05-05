import './App.css'
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from './Pages/Home'
import TodosCursos from './Pages/TodosCursos'
import Course from './Pages/Course'
import MeusCursos from './Pages/MeusCursos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
				<Route path="/" Component={Home} />
        <Route path="/TodosCursos" Component={TodosCursos} />
        <Route path="/TodosCursos/:id" Component={Course} />
        <Route path="/MeusCursos" Component={MeusCursos}></Route>
			</Routes>
		</BrowserRouter>
  )
}

export default App
