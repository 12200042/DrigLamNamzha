import "./category.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";


export const Category = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="bg">
          <div className="Category">Category of Driglam Namzha</div>
          <Link to="/physical" style={{ textDecoration: "none" }}>
            <div className="physical"> Physical Driglam Namzha</div>
          </Link>

          <Link to="/verbal" style={{ textDecoration: "none" }}>
            <div className="physical"> Verbal Driglam Namzha</div>
          </Link>

          <Link to="/mental" style={{ textDecoration: "none" }}>
            <div className="physical">Mental Driglam Namzha</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
