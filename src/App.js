import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/home.jsx";
import Navbar from './component/navbar/navbar.jsx'
import Footer from './component/footer/footer.jsx'
import Member from "./pages/asset/member/member.jsx";
import MemberPage from "./pages/asset/member/memberPage.jsx";
import AllNews from "./pages/asset/news/news.jsx";
import AllSchedule from "./pages/asset/schedule/schedule.jsx";
import Theater from "./pages/asset/theater/theater.jsx";
function App() {
  
      // <Route path="/member/profile/details/" element={<MemberSinglePage />}/>
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="member" element={<Member />}/>
      <Route path="member/profile/details" element={<MemberPage />}/>
      <Route path="jkt48/news" element={<AllNews />}/>
      <Route path="schedule/jkt48" element={<AllSchedule />}/>
      <Route path="theater" element={<Theater />}/>
    </Routes>
    <Footer />
    
    </>
  );
}
export default App;
