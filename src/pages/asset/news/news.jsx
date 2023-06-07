import Navbar from '../../../component/navbar/navbar.jsx'
import NewsBox from './boxNews.jsx'
const AllNews = () => {
  return(
    <>
    <div className='p-3 px-2 w-full mt-8'>
      <div className='bg-red-600 p-2 pl-2 rounded-t'>
        <h4 className='text-white font-geologica'>Berita Terbaru</h4>
      </div>
      <div className='mt-7'>
        <NewsBox />
      </div>
      
    </div>
    </>  
  )
}

export default AllNews