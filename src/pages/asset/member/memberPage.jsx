import {Link, useParams} from 'react-router-dom'
import DataMem from './datamember/datamem.js'
const MemberPage = ()=>{
  const {id} = member;
  return <h1>halo</h1>
}
function halo(){
  const {DataMemId} = useParams();
  const member = DataMem.find((membe) => membe.id === DataMemId)
  console.log("halo")
}
halo()
export default MemberPage