import "./feedback.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import React, {useState, useEffect} from "react";
import { db } from "../../firebase";
import { collection, doc, onSnapshot, deleteDoc,  } from "firebase/firestore";
import { Button } from "react-bootstrap";
export const Feedback = () => {
 

  const [users, setUsers] = useState([{ name: "Loading...." }]);
  const usersCollectionRef = collection(db, "feedbacks");

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
    const userDoc = doc(db, "feedbacks", id);
    await deleteDoc(userDoc);
    }
  };

  useEffect(() => {
    const unsub = onSnapshot(usersCollectionRef, (snapshot) =>
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  });

  return (
    <div className='list'>
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <div className='feedback'> Feedback Page</div>
      <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Feeback</th>
                <th>Delete</th>
            </tr>
            
        </thead>
        <tbody>
          {users.map((user,index) => (
              <tr key={user.id}>
                <th style={{textAlign: "center",paddingTop:14.5,paddingBottom:14.5}}>{index + 1}</th>
                <th className="pding" style={{textAlign: "center"}} >{user.title}</th>
                <th className="pding" style={{textAlign: "center"}} >{user.description}</th>
                <td className="pding-l">
                <Button className="button"
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete
                  </Button>
                 
                </td>
              </tr>
            ))}
          </tbody>
      </table>

    </div>
  </div>
  )
}
