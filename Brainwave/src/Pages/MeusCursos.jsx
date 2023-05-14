import Navbar from '../Components/Navbar'
import Cursos from '../Components/MeusCursosList'
import useFetch from '../Hooks/useFetch'

function MeusCursos() {
    const { error, isPending, data: courses } = useFetch('http://localhost:3000/myCourses');
    return (
        <div className='lili min-h-screen'>
            <header>
                <Navbar></Navbar>
                    <div className="rounded-lg m-3 flex justify-center items-center mt-10">
                        <h1 className="text-7xl text-gray-800">Meus Cursos</h1>
                    </div>
            </header> 
            <main className='mt-10 flex justify-center py-2'>
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                { courses && <Cursos courses={courses} /> }
            </main>
        </div>
    )
}

export default MeusCursos