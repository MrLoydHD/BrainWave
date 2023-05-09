import Navbar from '../Components/Navbar'
import Cursos from '../Components/MeusCursosList'
import useFetch from '../Hooks/useFetch'

function MeusCursos() {
    const { error, isPending, data: courses } = useFetch('http://localhost:3000/myCourses');
    return (
        <div className='bg-gray-200 min-h-screen'>
            <header>
                <Navbar></Navbar>
            </header> 
            <main className='mt-10 flex justify-center'>
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                { courses && <Cursos courses={courses} /> }
            </main>
        </div>
    )
}

export default MeusCursos