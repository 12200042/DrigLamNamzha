import "./contactList.scss";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ContactUsDataService from "../../ContactPage/services/ContactService";

const ContactList = ({ getContactId }) => {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    getContact();
  }, []);

  const getContact = async () => {
    const data = await ContactUsDataService.getAllContact();
    console.log(data.docs);
    setContact(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ContactUsDataService.deleteContact(id);
    getContact();
  };
  return (
    <>
      <div className="refresh">
        <Button variant="dark edit" onClick={getContact}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Admin Name</th>
            <th>Phone_Number</th>
            <th>Email_Id</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>{doc.phone_number}</td>
                <td>{doc.email}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getContactId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ContactList;