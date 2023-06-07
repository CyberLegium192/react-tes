import {Link} from 'react-router-dom'
const Theater = () => {
  return(
    <div className='p-3 px-4 w-full mt-8'>
      <div className='bg-red-600 p-2 pl-2 rounded-t'>
        <h4 className='text-white font-geologica'>THEATER JKT48</h4>
      </div>
      <div className=''>
        <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShF2wAXYVgugcVWuA7D6F5o-gDKAor0LrMRg&usqp=CAU'
        className='mt-4'/>
        <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZB7P_bd2I-aPnWYkQcCfY_E0Q907XcF1ZQ&usqp=CAU'
        className='mt-4'/>
        <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDV1LDXllFFpC_H0pHJyKgSrXxbTOwkTBwQ&usqp=CAU'
        className='mt-4'/>
      </div>
      <Link to='' className='cursor-pointer border-2 border-red-600 inline-block mt-4 w-full
      text-center py-2 text-black rounded-full transition-all duration-300 font-geologica capitalize hover:bg-red-600
      hover:text-white'>cek jadwal pertunjukan disini</Link>
      <Link to='' className='cursor-pointer border-2 border-red-600 inline-block mt-5 w-full
      text-center py-2 text-black rounded-full transition-all duration-300 font-geologica capitalize hover:bg-red-600
      hover:text-white'>cek jadwal event disini</Link>
      
      
      <div className='w-full px-4 border-2 rounded border-red-600 mt-6 p-1'>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3152058487753!2d106.80161109999999!3d-6.2221031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14c3d59c579%3A0xe849bfc44b7a3583!2sJl.%20Pintu%20Satu%20Senayan%2C%20RT.1%2FRW.3%2C%20Gelora%2C%20Kecamatan%20Tanah%20Abang%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010270!5e0!3m2!1sid!2sid!4v1686065709801!5m2!1sid!2sid"
      className='w-full h-80 cursor-pointer'></iframe>
        <div className='mt-4 capitalize font-poppins pb-6'>
          <h2 className='text-red-600'>alamat</h2>
          <p className='text-sm mt-3'>JKT48 Theater <br/>fX Sudirman F4 <br />Jl. Jend Sudirman Pintu
          Satu Senayan <br/>Jakarta Selatan, Indonesia</p>
          <h2 className='text-red-600 mt-5'>dengan mobil</h2>
          <p className='text-sm mt-3'>Dekat dengan Stadion Gelora Bung Karno</p>
          <h2 className='text-red-600 mt-5'>dengan transjakarta</h2>
          <p className='text-sm mt-3'>Berhenti di Halte Gelora Bung Karno</p>
          
        </div>
      
      </div>
      
    </div>
  )
}
export default Theater