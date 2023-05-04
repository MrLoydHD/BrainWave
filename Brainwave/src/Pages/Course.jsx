import Navbar from '../components/Navbar'
import Info from '../components/CourseInfo'
import Sidebar from '../components/CourseSidebar'
import image from '../Images/matematica.jpeg';

function TodosCursos() {
  return (
    <div className='bg-gray-200 min-h-screen'>
        <header>
            <Navbar></Navbar>
        </header> 
        <main>
          <div className="flex flex-col md:flex-row ml-10">
              <Info></Info>
            <div className="md:w-1/4 ml-5 flex justify-center mt-10">
              <Sidebar></Sidebar>
            </div>
          </div>
        </main>
    </div>
  )
}

export default TodosCursos