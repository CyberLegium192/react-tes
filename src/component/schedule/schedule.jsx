import DataSchedule from './dataSchedule.jsx';
import {Link} from 'react-router-dom';
import './schedule.css'
const Schedule = () =>{
  return(
    <>
     <div className='mt-7 px-4 py-4 flex justify-between items-end
     rounded-t-2xl'>
      <h3 className='text-2xl text-red-600 font-poppins'>SCHEDULE</h3>
      <Link to='schedule/jkt48' className='text-sm font-poppins text-gray-700
     transition-all duration-300 hover:text-red-600'>view all</Link>
    </div>
    
    <div className='p-3'>
      <DataSchedule />
    </div>
    
    </>
  )
}
export default Schedule