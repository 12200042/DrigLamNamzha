import "./videoCategory.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";


export const VideoCategory = () => {
  return (
    <div className='list'>
    <Sidebar/>
    <div className="listContainer">
     <Navbar/> 
     <div className="Category">
         Category of Driglam Namzha
         </div>
     <Link to="/PhysicalVideo" style={{textDecoration:"none"}}>
        <div className="physical"> Physical Driglam Namzha</div>
     </Link>
     
     <Link to="/VerbalVideo" style={{textDecoration:"none"}}>
         <div className="physical"> Verbal Driglam Namzha</div>
     </Link>
        
     <Link to="/MentalVideo" style={{textDecoration:"none"}}>
         <div className="physical">Mental Driglam Namzha</div>
     </Link>


     
    </div>
    </div>
  )
}
