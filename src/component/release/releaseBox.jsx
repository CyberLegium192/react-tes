const ReleaseBox = (props) => {
  return(
    <>
      <div className='p-5 rounded bg-white mt-5 pb-24'>
        <img src={props.image}
        className='w-full rounded'/>
        <div className='border-b-2 border-dashed my-4 border-gray-300 mb-5'
        ></div>
        <h3 className='text-sm font-geologica font-bold border-b-2 pb-3
        capitalize border-red-400'>{props.judul}</h3>
        <a href='' className='text-sm font-geologica border-b-2 border-gray-500
        mt-3 inline-block'>TRACK LIST</a>
        <p className='text-xs mt-2 font-geologica text-gray-800'>CD</p>
        <p className='text-xs mt-2 font-geologica text-gray-800
        capitalize'>{props.judul}</p>
        <br />
        <p className='text-xs mt-2 font-geologica text-gray-800
        capitalize'>{props.tracklist1}</p>
        <p className='text-xs mt-2 font-geologica text-gray-800
        capitalize'>{props.tracklist2}</p>
        <p className='text-xs mt-2 font-geologica text-gray-800
        capitalize'>{props.tracklist3}</p>
        <p className='text-xs mt-2 font-geologica text-gray-800
        capitalize'>{props.tracklist4}</p>
        <p className='text-xs mt-2 font-geologica text-gray-800
        capitalize'>{props.tracklist5}</p>
        
        
        <br />
        <p className='text-xs mt-2 font-geologica text-gray-800'>DVD
        </p>
        <p className='text-xs mt-2 font-geologica text-gray-800
        capitalize'>{props.dvd}</p>
        <p className='text-xs mt-2 font-geologica text-gray-800
        capitalize'>{props.dvd2}</p>
        <p className='text-xs mt-2 font-geologica text-gray-800
        capitalize'>{props.dvd3}</p>
        
      </div>
    </>  
  )
  
}
export default ReleaseBox