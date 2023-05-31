import React, {useState, useEffect} from 'react'

const NewsData = () =>{
  const [newsData, setDataNews] = useState([])
  const getData = () => {
    fetch('https://64778b0e9233e82dd53bd43f.mockapi.io/news')
    .then(resp => resp.json())
    .then(data => {setDataNews(data)});
  }
  useEffect(() => {
    getData();
  }, []); 
  return(
    <>
    {newsData.map((berita) => <NewsBox tema={berita.tema}
    tanggal={berita.tanggal} pengumuman={berita.pengumuman}/> )}
    </>  
  )
}

function NewsBox(props) {
  return(
  <>
    <div className='news box w-full bg-red-600 p-3 rounded-lg shadow-sm shadow-slate-400 mb-3'>
        <div className='flex items-center text-xs gap-2 text-white font-poppins'>
          <p className='ml-2 bg-purple-700 w-16 text-center rounded-2xl text-xs leading-5'>{props.tema}</p>
          <p>{props.tanggal}</p>
        </div>
        <div className='p-1'>
          <p className='text-content font-poppins line-clamp-2 md:line-clamp-none'>{props.pengumuman}</p>
        </div>
      </div>
  </>  
  )
}
export default NewsData