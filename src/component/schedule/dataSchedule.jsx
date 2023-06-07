import React, {useState, useEffect} from 'react'

const DataSchedule = () =>{
  const [schedule, setSchedule] = useState([])
  const getSchedule = () =>{
    fetch('https://64778b0e9233e82dd53bd43f.mockapi.io/schedule')
    .then(resp => resp.json())
    .then(data => {setSchedule(data)});
  }
  useEffect(() => {
    getSchedule();
  }, []); 
  return(
    <>
      {schedule.map((item) => <ScheduleData tanggal={item.tanggal}
      acara={item.acara} hari={item.hari}/>)}
    </>
  )
}
function ScheduleData(props) {
  return(
  <>
      <div className='w-full border-2 border-red-600 p-3 rounded-lg
      shadow-sm shadow-slate-400 mb-3 py-4 font-poppins'>
        <div className='flex items-center text-xs gap-2 text-black font-poppins'>
          <p className=' bg-purple-700 w-16 text-center rounded-2xl text-xs
          leading-5 text-white'>event</p>
          <p>{props.tanggal}</p>
          <p>{props.hari}</p>
        </div>
        <div className='p-1'>
          <p className='text-content-schedule text-black font-poppins text-sm
          mt-2'>{props.acara}</p>
        </div>
      </div>
    
  </>  
  )
  
  
  
  
  
}

export default DataSchedule