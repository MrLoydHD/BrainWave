import Navbar from '../components/Navbar'
import Search from '../components/TodosCursosSearch'
import Filters from '../components/TodosCursosFilters'
import Courses from '../components/TodosCursosCourses'

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
                <div className='w-1/4 ml-4'>
                    <Filters></Filters>
                </div>
                <div className='w-3/4 p-10'>
                    <Courses></Courses>
                </div>
            </div>
            
        </main>
    </div>
  )
}

export default TodosCursos