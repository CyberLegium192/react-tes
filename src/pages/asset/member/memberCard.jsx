import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MemberPage from './memberPage.jsx'
import DataMem from './datamember/datamem.js'
const MemberCard = () => {
  const [MemberData, setMemberData] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [PostPerPage, setPostPerPage] = useState(30);


  const getData = () => {
    fetch('https://647b78c3d2e5b6101db157dd.mockapi.io/jkt48')
    .then(resp => resp.json())
    .then(data => {setMemberData(data)});
  }
  const lastPostIndex = CurrentPage * PostPerPage;
  const firstPostIndex = lastPostIndex - PostPerPage;
  const currentPost = MemberData.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    getData();
  }, []); 
  const tes = DataMem.map((hal) => hal.id)
  console.log(tes)
  return(
    <>
    {currentPost.map((member) => <CardMember id={member.id} nama={member.nama}
    url={member.image}/>)}
    </>  
  )
}
function CardMember(props) {
  return(
    <>
    <Link to={`profile/details`}>
      <div className='border-2 border-slate-300 p-1 rounded' key={props.id}>
        <img src={props.url}/>
        <div className='text-xs text-center bg-red-200 p-2 rounded mt-1
        font-geologica px-6 h-10 flex justify-center items-center'>
          <p className='line-clamp-2 hover:text-red-600 duration-100'>{props.nama}</p>
        </div>
      </div>
    </Link>
    </>
  )
}


export default MemberCard