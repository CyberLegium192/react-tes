import { React, useRef } from "react";
import { IoIosArrowDown } from 'react-icons/io';
const DropDown = () => {
  
  // THEATER DROPDOWN
  const Theater = () => {
    const theaterDown = useRef()
    const ClickDown = (e) => {
      e.preventDefault()
      theaterDown.current.classList.toggle('active')
    }
    return(
      <>
        <div className='border-b-2 relative border-b-gray-500 flex pb-2 items-center'>
          <a href='' onClick={ClickDown} className='flex justify-between w-full'>Theater<IoIosArrowDown
          className='text-lg' /></a>
        </div>
        <div className='text-xs downtheater font-normal capitalize mb-4' ref={theaterDown}>
          <a className='block mb-3' href=''>apa itu theater?</a>
          <a className='block mb-3' href=''>apa itu theater?</a>
          <a className='block mb-3' href=''>apa itu theater?</a>
          <a className='block mb-3' href=''>apa itu theater?</a>
          <a className='block mb-3' href=''>apa itu theater?</a>
          <a className='block mb-3' href=''>apa itu theater?</a>
        </div>
      </>  
    )
  }
  const AnyDropDown = (props) => {
    const anydropdown = useRef()
    const ClickAnyDown = (e) =>{
      e.preventDefault()
      anydropdown.current.classList.toggle('active')
    }
    return(
      <>
        <div className='border-b-2 relative border-b-gray-500 flex pb-2
        items-center'>
          <a href='' onClick={ClickAnyDown} className='flex justify-between w-full'>{props.name}<IoIosArrowDown className='text-lg font-bold'/></a>
        </div>
        
        <div className='text-xs anyDown font-normal capitalize mb-4'
        ref={anydropdown}>
          <a className='block mb-3' href=''>{props.list1}</a>
          <a className='block mb-3' href=''>{props.list2}</a>
        </div>
      </>  
    )
  }
  return(
    <>
      <Theater />
      <AnyDropDown name='JKT48 POINTS' list1='cara beli & pakai JKT48 Points'
      list2='beli JKT48 points'/>
      <AnyDropDown name='SHOP' list1='JKT48 Web shop' list2='JKT48 shop at
      tokopedia'/>
    </>  
  )
}
export default DropDown