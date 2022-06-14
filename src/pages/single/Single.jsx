import "./single.scss";
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart'

// const updateUser = async (id)=>{};
export const Single = () => {

  // function selectUser(id)
  // {
  //   let item=users[id-1];
  //   setName(item.name)
  //       setEmail(item.email)
  //       setMobile(item.mobile);
  //       setUserId(item.id)
  // }
  return (
    <div className="single">
        <Sidebar/>
        <div className="singleContainer">
        <Navbar/>
        {/* <div className="top"> */}
            {/* <div className="left">
                <button className="editButton" onClick={updateUser}>Edit</button>
                <h1 className="title">Information</h1>
                <div className="item">
                    <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg? auto=compress&cs=tinysrgb&h=350" 
                    alt="" 
                    className="itemImg" 
                    />
                    <div className="details">
                      <h1 className="itemTitle">Deki Yangden</h1>
                      <div className="detailItem">
                        <span className="itemkey">Email:</span>
                        <span className="itemValue">12200042.gcit@rub.edu.bt</span>
                      </div>

                      <div className="detailItem">
                        <span className="itemkey">Phone:</span>
                        <span className="itemValue">+975 17283994</span>
                      </div>

                      <div className="detailItem">
                        <span className="itemkey">Address:</span>
                        <span className="itemValue">Gyalposhing</span>
                      </div>

                      <div className="detailItem">
                        <span className="itemkey">Country:</span>
                        <span className="itemValue">Bhutan</span>
                      </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="right"> */}
              {/* <Chart/> */}
            {/* </div> */}
        {/* </div> */}
        {/* <div className="bottom"></div> */}


        </div>

    </div>
  )
}
