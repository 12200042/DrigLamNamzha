import "./mentalTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {usersColumn} from "../../dataSource/MentalDataSource"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

const MentalTable = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const unsub = onSnapshot(
      collection(db, "Mental"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete ?")){
    try {
      await deleteDoc(doc(db, "Mental", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err)
    }
  }
  };
    const actionColumn = [
        {
            field:"action", 
            headerName:"Action", 
            width:200, 
            renderCell:(params)=>{
                return (
                <div className="cellAction">
                  {/* <Link to = "/Mental/userID" style={{textDecoration:"none"}}>
                    <div className="viewButton">Edit</div>
                  </Link> */}
                    <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                </div>
                )
            } }
        ]
  return (
    <div className="datatable">
      <div className="datatableTittle">
        Add New Image
        <Link to="/mental/MentalNew" style={{textDecoration:"none"}} className="link">
          Add New
        </Link>
      </div>
        <DataGrid
        className="datagrid"
        rows={data}
        columns={usersColumn.concat(actionColumn)}
        pageSize={4}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default MentalTable