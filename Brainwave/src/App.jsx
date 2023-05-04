import './App.css'
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from './Pages/Home'
import TodosCursos from './Pages/TodosCursos'
import Course from './Pages/Course'

function App() {
  return (
    <BrowserRouter>
      <Routes>
				<Route path="/" Component={Home} />
        <Route path="/TodosCursos" Component={TodosCursos} />
        <Route path="/TodosCursos/:id" Component={Course} />
			</Routes>
		</BrowserRouter>
  )
}

export default App
