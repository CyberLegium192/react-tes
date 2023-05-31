import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselHeader = () =>{
  const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <Carousel responsive={responsive} showDots={true} infinite={true}
    transitionDuration={500} removeArrowOnDeviceType={["tablet", "mobile"]}>
      <div className='bg-white w-full text-center h-64'>
        <img src='https://jkt48.com/images/banner.home.summerfest.jpg?v=2'
        className='w-full h-full object-cover'/>
      </div>
      <div className='bg-white w-full text-center h-64'>
        <img src='https://jkt48.com/images/banner.home.valkyrie48_2023.jpg'
        className='w-full h-full object-cover'/>
      </div>
      <div className='bg-white w-full text-center h-64'>
        <img src='https://jkt48.com/images/banner.home.tokopedia.jpg'
        className='w-full h-full object-cover'/>
      </div>
    </Carousel>
  )
  
  
  
}
export default CarouselHeader