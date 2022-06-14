
import { db } from "../../../firebase";

import { 
    collection, 
    getDocs, 
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
     doc,
     } from "firebase/firestore";


const contactUsCollectionRef = collection(db, "ContactUs");

class ContactUsDataService {
    addContact = (newContact) => {
        return addDoc(contactUsCollectionRef, newContact);
    };

    updateContact = (id, updatedContact) => {
        const contactDoc =doc(db, "ContactUs", id);
        return updateDoc(contactDoc, updatedContact);
    };

    deleteContact = (id) => {
        const contactDoc = doc(db, "ContactUs", id);
        return deleteDoc(contactDoc);
    };

    getAllContact = () => {
        return getDocs(contactUsCollectionRef);
    };

    getContact = (id) => {
        const  contactDoc = doc(db, "ContactUs" ,id);
        return getDoc(contactDoc);
    };
}
export default new ContactUsDataService();