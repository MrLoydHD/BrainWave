import Navbar from '../Components/Navbar'
import HomeSearch from '../Components/HomeSearch'
import HomeCarousel from '../Components/HomeCarousel'

function Home() {
  return (
    <div className='bg-gray-200 min-h-screen'>
        <header>
          <Navbar></Navbar>
        </header> 
        <main className='flex justify-center items-center m-20 p-20'>
          <HomeSearch></HomeSearch>
        </main>
        <div>
          <div className='flex justify-center items-center'>
            <p className='text-6xl'>Cursos Populares</p>
          </div>
          <footer className="flex justify-center items-center fixed bottom-10">
              <HomeCarousel></HomeCarousel>
          </footer>
        </div>
    </div>
  )
}

export default Home