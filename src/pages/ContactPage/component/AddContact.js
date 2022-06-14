import "./addContact.scss";
import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import ContactUsDataService from "../../ContactPage/services/ContactService";

const AddContact = ({ id, setContactId }) => {
  const [name, setName] = useState("");
  const [phone_number , setPhone_Number] = useState("");
  const [email , setEmail] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || phone_number === "" || email === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newContact = {
      name,
      phone_number,
      email,
      status,
    };
    console.log(newContact);

    try {
      if (id !== undefined && id !== "") {
        await ContactUsDataService.updateContact(id, newContact);
        setContactId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await ContactUsDataService.addContact(newContact);
        setMessage({ error: false, msg: "New admin added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setPhone_Number("");
    setEmail("");
  };

 
  useEffect(() => {
    const editHandler = async () => {
      setMessage("");
      try {
        const docSnap = await ContactUsDataService.getContact(id);
        console.log("the record is :", docSnap.data());
        setName(docSnap.data().name);
        setPhone_Number(docSnap.data().phone_number);
        setEmail(docSnap.data().email);
        setStatus(docSnap.data().status);
      } catch (err) {
        setMessage({ error: true, msg: err.message });
      }
    };
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit} >
          <Form.Group  controlId="formContactName" className="form">
            <InputGroup>
              <InputGroup.Text id="formContactName">Name : </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group  controlId="formContactPhone_Number" className="form">
            <InputGroup>
              <InputGroup.Text id="formContactPhone_Number">PhoneNo: </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Phone_Number"
                value={phone_number}
                onChange={(e) => setPhone_Number(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formContactEmail" className="form">
            <InputGroup>
              <InputGroup.Text id="formContactEmail">Email_Id : </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Email_id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example"  className="form">
            <Button
              className="button"
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              className="notAvailable"
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="add">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddContact;