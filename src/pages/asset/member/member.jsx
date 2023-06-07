import Navbar from '../../../component/navbar/navbar.jsx'
import Footer from '../../../component/footer/footer.jsx'
import MemberCard from './memberCard.jsx'
import MemberCardTrinee from './traineeMember.jsx'

const Member = () => {
  return(
    <>
    <div className='p-3 px-4 w-full mt-8'>
      <div className='bg-red-600 p-2 pl-2 rounded-t'>
        <h4 className='text-white font-geologica'>Member JKT48</h4>
      </div>
      <div className='mt-3 grid grid-cols-3 gap-4'>
        <MemberCard />
      </div>
      <div className='bg-red-600 p-2 pl-2 rounded-t mt-10'>
        <h4 className='text-white font-geologica capitalize'>trainee JKT48</h4>
      </div>
      <div className='mt-3 grid grid-cols-3 gap-4'>
        <MemberCardTrinee />
      </div>
      <div className='relative w-full mt-10 pb-8 flex justify-end'>
        <button type='button' className='text-sm font-geologica bg-red-500
        text-white py-2 px-2 rounded-3xl absolute top-0 cursor-pointer'>Alamat Fan Latter
        </button>
      </div>
    </div>
    </>
  )
}

export default Member