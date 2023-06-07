import React, {useState, useEffect} from 'react'
const NewsBoxAll = () => {
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
    <div className='box w-full p-3 rounded-lg shadow-sm shadow-slate-400 mb-3
    cursor-pointer'>
        <div className='flex items-center text-xs gap-2 font-poppins'>
          <p className='ml-2 bg-purple-700 text-center text-white
          rounded-2xl py-1 px-3 text-xs'>{props.tema}</p>
          <p className='text-black'>{props.tanggal}</p>
        </div>
        <div className='p-1'>
          <p className='text-xs text-black font-poppins line-clamp-2 md:line-clamp-none'>{props.pengumuman}</p>
        </div>
      </div>
  </>  
  )
}
export default NewsBoxAll