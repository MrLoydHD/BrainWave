import Navbar from '../components/Navbar'
import Cursos from '../components/MeusCursosList'
import useFetch from '../hooks/useFetch'

function MeusCursos() {
    const { error, isPending, data: courses } = useFetch('http://localhost:3001/myCourses');
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