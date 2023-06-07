const SpecialLink = () => {
  return(
    <>
    <div className='pb-3 pt-2 mt-9 flex justify-center items-end text-center'>
      <h3 className='text-xl uppercase text-red-600 font-poppins'>SPECIAL LINKS</h3>
    </div>
    <div className='flex justify-center flex-wrap gap-3 mt-5'>
      <a href=''>
        <img src='https://jkt48.com/images/home/banner.footer.mvp.png'
        className='w-36'/>
      </a>
      <a href=''>
        <img src='https://jkt48.com/images/home/banner.footer.fanletter.jpg' className='w-36'/>
      </a>
      <a href=''>
        <img src='https://jkt48.com/images/home/banner.footer.handshake.png'
        className='w-36'/>
      </a>
    </div>
    </>  
  )
}

export default SpecialLink