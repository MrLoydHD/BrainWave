import Navbar from '../Components/Navbar'
import Info from '../Components/CourseInfo'
import Sidebar from '../Components/CourseSidebar'
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';

function Course() {
  const { id } = useParams();
  const { data: course, error, isPending } = useFetch('http://localhost:3000/courses/' + id);

  return (
    <div className='bg-gray-200 min-h-screen'>
        <header>
            <Navbar></Navbar>
        </header> 
        <main>
          <div className="flex flex-col md:w-11/12 md:flex-row ml-10">
              {!isPending && <Info course={course} error={error} isPending={isPending}></Info>}
            <div className="md:w-1/4 ml-4 flex mt-10">
              {!isPending && <Sidebar thisCourse={course}></Sidebar>}
            </div>
          </div>
        </main>
    </div>
  )
}

export default Course