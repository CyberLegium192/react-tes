import Hero from '../component/hero/hero.jsx'
import Navbar from '../component/navbar/navbar.jsx'
import CarouselHeader from '../component/carousel/carousel.jsx'
import News from '../component/news/news.jsx'
import Schedule from '../component/schedule/schedule.jsx'
import Birthday from '../component/birthday/birthday.jsx'
import Release from '../component/release/release.jsx'
import Video from '../component/video/video.jsx'
import Footer from '../component/footer/footer.jsx'
import Groub from '../component/48grub/grub.jsx'
import SpecialLink from '../component/specialLink/specialLink.jsx'
const Home = () => {
  return(
    <>
    <CarouselHeader />
    <News />
    <Schedule />
    <Birthday />
    <Release />
    <Video />
    <SpecialLink />
    <Groub />
    </> 
  )
}
export default Home