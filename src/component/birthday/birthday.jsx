function CardBirthday(props) {
  return(
    <>
      <div className='p-2 w-36 cursor-pointer'>
        <div className='w-32 h-32 flex justify-center items-center
        overflow-hidden rounded-full border-2 border-red-500'>
          <img src={props.image}
        className='object-top object-cover h-full w-full'/>
        </div>
        <p className='w-full status-birthday mt-1 text-center font-geologica'>{props.status}</p>
        <p className='mt-1 text-sm text-center font-geologica'>{props.name}</p>
        <p className='text-xs text-center font-geologica'>{props.tanggal}</p>
        
      </div>
    </>
  )
}


const Birthday = () =>{
  return(
   <>
   <div className='mt-7 p-3 flex justify-center items-end text-center'>
      <h3 className='text-2xl text-red-600 font-poppins'>Next Birthday</h3>
    </div>
    <div className='p-2 flex justify-between'>
     <CardBirthday image='https://jkt48.com/profile/jeane_victoria.jpg'
     status='[trainee]' name='Jeane Victoria' tanggal='5 Juni 2006'/>
     <CardBirthday
     image='https://jkt48.com/profile/helisma_putri.jpg?v=20230116'
     status='[JKT48]' name='helisma Putri' tanggal='15 Juni 2000'/>
     <CardBirthday image='https://jkt48.com/profile/gendis_mayrannisa.jpg'
     status='[trainee]' name='Gendis Mayrannisa' tanggal='23 Juni 2010'/>
    </div>
    
   </> 
  )
}



export default Birthday