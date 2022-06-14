import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss"
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import { Link } from "react-router-dom";
import Silver from '../../image/book.jpg'

export const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="image"/>
          <Widget type="video"/> 
        </div>
        {/* <div className="charts">
          <Featured/>
          <Chart/>
        </div> */}

<div >
          <h2 className="rental">TDriglam Namzha application can be access from everywhere!</h2>

        </div>
        <div className="image">
          <img
            src={Silver}
            alt=" "
            className="avatars" />
        </div>
        <h2 className="below">Here We can upload the images along with description and videos of driglam Namzha</h2>
        <Link to="/image" style={{ textDecoration: "none" }}>

          <h4 className="goToImage">Driglam Namzha Images</h4>
        </Link>
        <div className="link">For more the above button</div>
      </div>
      </div>
  )
}

export default Home