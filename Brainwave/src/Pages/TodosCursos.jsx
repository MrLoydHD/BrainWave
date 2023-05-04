import Navbar from '../components/Navbar'
import Search from '../components/TodosCursosSearch'
import Filters from '../components/TodosCursosFilters'

function TodosCursos() {
  return (
    <div className='bg-gray-200 min-h-screen'>
        <header>
            <Navbar></Navbar>
        </header> 
        <main>
            <div className='flex justify-center items-center mt-10 shadow-lg'>
                <Search></Search>
            </div>
            <div className='flex w-full mt-10'>
                <div className='w-1/3'>
                    <Filters></Filters>
                </div>
                <div className='w-2/3'>
                    
                </div>
            </div>
            
        </main>
    </div>
  )
}

export default TodosCursos