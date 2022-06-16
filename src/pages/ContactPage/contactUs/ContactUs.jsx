import "./contactUs.scss"
import { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import { Container, Row, Col } from "react-bootstrap";
import AddContact from "../component/AddContact";
import ContactList from "../component/ContactList";

export const ContactUs = () => {

  const [contactId, setContactId] = useState("");

  const getContactIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setContactId(id);
  };
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="header">Contact Us Page  </div>
        <div className="contactUs">
          <Container style={{ width: "500px" }}>
            <Row className="row">
              <Col>
                <AddContact id={contactId} setContactId={setContactId} />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="contactlist">
              <Col>
                <ContactList getContactId={getContactIdHandler} />
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    </div>
  )
}