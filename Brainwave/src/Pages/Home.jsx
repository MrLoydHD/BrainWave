import Navbar from '../components/Navbar'
import HomeSearch from '../components/HomeSearch'
import HomeCarousel from '../components/HomeCarousel'

function Home() {
  return (
    <div className='bg-gray-200 min-h-screen'>
        <header>
          <Navbar></Navbar>
        </header> 
        <main className='flex justify-center items-center m-20 p-20'>
          <HomeSearch></HomeSearch>
        </main>
        <div className='flex justify-center items-center'>
          <p className='text-6xl'>Cursos Populares</p>
        </div>
        <footer className="flex justify-center items-center fixed bottom-0 p-20">
            <HomeCarousel></HomeCarousel>
        </footer>
    </div>
  )
}

export default Home