import "./image.scss"
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import Featured from "../../../components/featured/Featured";
import Chart from "../../../components/chart/Chart";
export const Image = () => {
  return (
    <div className='list'>
    <Sidebar/>
    <div className="listContainer">
     <Navbar/> 
     <div className="charts">
          <Featured/>
          <Chart/>
        </div>
    </div>
    </div>
  )
}
