import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube  } from "react-icons/fa";
const Footer = () => {
  return(
    <>
    <div className='p-3 py-10 bg-slate-900 w-full mt-10'>
      <div className='text-center flex flex-wrap justify-center gap-2'>
        <a href='' className='text-xs text-slate-200 font-geologica border-r-2
        pr-2 uppercase inline-block '>top</a>
        <a href='' className='text-xs text-slate-200 font-geologica border-r-2
        pr-2 uppercase inline-block '>news</a>
        <a href='' className='text-xs text-slate-200 font-geologica border-r-2
        pr-2 uppercase inline-block '>member</a>
        <a href='' className='text-xs text-slate-200 font-geologica border-r-2
        pr-2 uppercase inline-block mr-2'>apa itu jkt48?</a>
        <a href='' className='text-xs text-slate-200 font-geologica  uppercase inline-block '>apa itu AKB48?</a>
        <a href='' className='text-xs text-slate-200 font-geologica border-r-2
        pr-2 uppercase inline-block '>perkenalan produser</a>
        <a href='' className='text-xs text-slate-200 font-geologica border-r-2
        pr-2 uppercase inline-block '>kontak</a>
        <a href='' className='text-xs text-slate-200 font-geologica
        pr-2 uppercase inline-block '>syarat dan ketentuan</a>
      </div>
      <div className='text-center flex flex-wrap justify-center gap-2 my-7'>
        <a href='' className='text text-slate-200 font-geologica border-r-2
        pr-2 uppercase inline-block '><FaFacebookF /></a>
        <a href='' className='text text-slate-200 font-geologica border-r-2
        pr-2 uppercase inline-block '><FaTwitter /></a>
        <a href='' className='text text-slate-200 font-geologica border-r-2
        pr-2 uppercase inline-block '><FaInstagram /></a>
        <a href='' className='text text-slate-200 font-geologica border-r-2
        pr-2 uppercase inline-block '><FaTiktok /></a>
        <a href='' className='text text-slate-200 font-geologica
        pr-2 uppercase inline-block '><FaYoutube /></a>
      </div>
      <p className='text-xs text-slate-200 text-center font-geologica '>Copyright © 2023 JKT48 Operation Team (PT. Indonesia Musik Nusantara) All Rights Reserved</p>
    </div>
    </>
  )
}


export default Footer