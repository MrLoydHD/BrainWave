import { Calendar } from 'react-big-calendar';
import Navbar from '../Components/Navbar'
import CustomCalendar from '../Components/Calendar/CustomCalendar'

function EventCalendar() {
  return (
    <div className='lili min-h-screen'>
        <header>
          <Navbar></Navbar>
        </header> 
        <div>
          <CustomCalendar></CustomCalendar>
        </div>
    </div>
  );
}

export default EventCalendar;