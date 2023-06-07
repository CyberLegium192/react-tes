import ReleaseBox from './releaseBox.jsx'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Release = () =>{
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
    <div className='bg-red-300 mt-24 px-4 py-2 pb-16 rounded-2xl'>
      <div className='py-3 mt-3 flex justify-center items-end text-center'>
        <h3 className='text-2xl text-red-600 font-poppins '>Release
        </h3>
      </div>
      <Carousel responsive={responsive}  removeArrowOnDeviceType={["tablet",
      "mobile"]} showDots={true} draggable={true} swipeable={true} transitionDuration={500}>
        <ReleaseBox 
        image='https://jkt48.com/images/dummy/release1-2.jpeg'
        judul='Rapsodi'
        tracklist1='1. Rapsodi'
        tracklist2='2. sweet & bitter'
        tracklist3='3. menanti'
        tracklist4='4. Minpi yang hina - gesu na yume'
        tracklist5='5. siapa yang membuat kita berdia bertemu? - dare ga futari
        wo deawaseta no ka?'
        dvd='1. rapsodi music video'
        dvd2='2. sweet & bitter music video'
        dvd3='3. rapsodi music video behind the scene'
        />
        <ReleaseBox 
        image='https://jkt48.com/images/dummy/release2-2.jpeg'
        judul='high tension'
        tracklist1='1. high tension'
        tracklist2='2. Musin yang selanjutnya - tsugi no season'
        tracklist3='3. after rain'
        tracklist4='4. kesucian hati hingga umur 19 tahun - junjou U-19 (心の純粋さ U-19)'
        tracklist5='5. kenyataan yang ternoda - kagereteiru shinjitsu'
        dvd='1. high tension music video'
        dvd2='2. musin yang selanjutnya music video'
        dvd3='3. high tension music video behind the scene'
        />
      </Carousel>
    </div>
    </>
  )
}
export default Release