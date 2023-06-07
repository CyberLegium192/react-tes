import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
const MemberCardTrinee = () => {
  const [MemberData, setMemberData] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(30);
  const [PostPerPage, setPostPerPage] = useState(13);
  
  const getData = () => {
    fetch('https://647b78c3d2e5b6101db157dd.mockapi.io/jkt48')
    .then(resp => resp.json())
    .then(data => {setMemberData(data)});
  }
  const lastPostIndex = CurrentPage + PostPerPage;
  const firstPostIndex = lastPostIndex - PostPerPage;
  const currentPost = MemberData.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    getData();
  }, []); 
  return(
    <>
    {currentPost.map((member) => <CardMember nama={member.nama} url={member.image}/>)}
    </>  
  )
}
function CardMember(props) {
  return(
    <>
    <Link to='/'>
      <div className='border-2 border-slate-300 p-1 rounded '>
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


export default MemberCardTrinee