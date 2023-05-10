import Navbar from '../Components/Navbar'
import HomeSearch from '../Components/HomeSearch'
import HomeCarousel from '../Components/HomeCarousel'

function Home() {
  return (
    <div className='bg-green-20 min-h-screen'>
        <header>
          <Navbar></Navbar>
        </header> 
        <main className='flex justify-center items-center mb-20 p-20 h-128 bg-cover bg-no-repeat dark-overlay'>
          <HomeSearch></HomeSearch>
        </main>
        <div className='flex-auto text-center'>
                <p className='text-6xl'>Cursos Populares</p>
                <HomeCarousel></HomeCarousel>
        </div>
    </div>
  )
}

export default Home