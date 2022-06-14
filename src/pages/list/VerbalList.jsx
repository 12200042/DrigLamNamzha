import "./verbalList.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import VerbalDataTable from "../../components/datatable/VerbalDataTable"

const VerbalList = () => {
  return (
    <div className='list'>
    <Sidebar/>
    <div className="listContainer">
     <Navbar/> 
    <VerbalDataTable/>
     
    </div>
    </div>
  )
}

export default VerbalList