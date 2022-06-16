import "./verbalTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, } from "../../dataSource/VerbalDataSource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const VerbalDatatable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "verbal"),
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
  // console.log(data)
  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete ?")){
    try {
      await deleteDoc(doc(db, "verbal", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err)
    }
  }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/verbal/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Image
        <Link to="/verbal/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};
export default VerbalDatatable;