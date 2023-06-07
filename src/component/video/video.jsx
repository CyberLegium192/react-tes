import ReactPlayer from "react-player"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Video = () => {
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
  return(
    <>
    <div className='py-3 flex justify-center items-end text-center mt-7'>
      <h3 className='text-2xl text-red-600 font-poppins'>Video</h3>
    </div>
    <Carousel responsive={responsive} showDots={true} infinite={true}
    transitionDuration={500} removeArrowOnDeviceType={["tablet", "mobile"]}>
      
      <VideoBox urlVideo='https://youtube.com/embed/2HPbAvzPVlo?autoplay=0'/>
      <VideoBox urlVideo='https://youtube.com/embed/K4mdjMH9K4c?autoplay=0'/>
      <VideoBox urlVideo='https://youtube.com/embed/RITMvJDoAwI?autoplay=0'/>
      <VideoBox urlVideo='https://youtube.com/embed/G7KTMp7hhhQ?autoplay=0'/>
      <VideoBox urlVideo='https://youtube.com/embed/g2QSP2xxmkg?autoplay=0'/>
      
    </Carousel>
    </> 
  )
}


function VideoBox(props) {
  return(
    <>
    <div className='w-full flex justify-center mt-1 mb-3 pb-4 select-none'>
      <div className='p-2 w-full h-64'>
        <iframe className='w-full h-full'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={props.urlVideo}>
      </iframe>
      </div>
    </div>
    </>  
  )
}
export default Video