import "./mentalList.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Datatable from "../../components/datatable/Datatable";

import MentalTable from "../../components/datatable/MentalTable";


export const MentalList = () => {
  return (
    <div className='list'>
    <Sidebar/>
    <div className="listContainer">
     <Navbar/> 
     {/* <Datatable/> */}
     <MentalTable/>
     {/* <MentalDataTable/> */}
    </div>
    </div>
  )
}
