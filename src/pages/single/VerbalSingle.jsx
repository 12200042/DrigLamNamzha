import "./verbalSingle.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
const updateUser = async (id) =>{};
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <button className="editButton" onClick={updateUser}>Edit</button>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Cheytam</h1>
                <div className="detailItem">
                  <span className="itemKey">Title:</span>
                  <span className="itemValue">Education</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Cheytam:</span>
                  <span className="itemValue">importance of Education</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Explantaion:</span>
                  <span className="itemValue">
                   Importance of sharing ones ideas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};