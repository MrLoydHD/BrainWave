import './App.css'
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from './Pages/Home'
import TodosCursos from './Pages/TodosCursos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
				<Route path="/" Component={Home} />
        <Route path="/TodosCursos" Component={TodosCursos} />
			</Routes>
		</BrowserRouter>
  )
}

export default App
