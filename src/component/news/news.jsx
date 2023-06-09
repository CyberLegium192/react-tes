import './news.css'
import {Link} from 'react-router-dom'
import NewsData from './datanews.jsx'
const News = ()=>{
  return(
    <>
    <div className='mt-7 p-3 flex justify-between items-end'>
      <h3 className='text-3xl text-red-600 font-poppins'>NEWS</h3>
      <Link to='jkt48/news' className='text-sm font-poppins text-gray-500
     transition-all duration-300 hover:text-red-600'>view all</Link>
    </div>
    <div className='p-3'>
      <NewsData />
    </div>
    
    </>  
  )
}

export default News