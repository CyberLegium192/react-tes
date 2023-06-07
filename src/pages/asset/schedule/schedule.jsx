import ScheduleBoxAll from './boxSchedule.jsx'
const AllSchedule = () => {
  return(
    <>
    <div className='p-3 px-2 w-full mt-8'>
      <div className='bg-red-600 p-2 pl-2 rounded-t'>
        <h4 className='text-white font-geologica'>Berita Terbaru</h4>
      </div>
      <div className='mt-7'>
        <ScheduleBoxAll />
      </div>
      
    </div>
    </>  
  )
}

export default AllSchedule