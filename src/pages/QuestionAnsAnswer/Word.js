import React, {useState} from 'react'
import db from "../firebase"
import {  Timestamp,addDoc, collection} from 'firebase/firestore';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {v4} from 'uuid';
import { useNavigate } from 'react-router-dom'


const QuestionAndAnswer = () => {
    const [newWord, setWord] = useState("");
    const [newMeaning, setMeaning] = useState("");
    const [newSynonym, setSynonym] = useState("");
    const [newTranslation, setTranslation] = useState("");
    const [day, setDay]=useState("");
 
  

    
                const collectionRef = collection(db, "words" );
                addDoc(collectionRef, {
                    day: day,
                    word: newWord,
                    meaning: newMeaning,
                    synonym: newSynonym,
                    translation: newTranslation,
                    audioUrl: url,
                    createdAt: Timestamp.now().toDate()
                  });
         
  return (
    <div className="form-container">
        <button onClick={goBack}>Back</button>
        <div className="register-form">
        <input
            placeholder="Word No"
            className="form-field"
            onChange={(event) => {
            setDay(event.target.value);
            }}
        />
        <input
            placeholder="Word"
            className="form-field"
            onChange={(event) => {
            setWord(event.target.value);
            
            }}
        />
        <input
            placeholder="Meaning"
            className="form-field"
            onChange={(event) => {
            setMeaning(event.target.value);
            }}
        />
        <input
            placeholder="Synonym"
            className="form-field"
            onChange={(event) => {
            setSynonym(event.target.value);
            }}
        />
        <input
            placeholder="Translation"
            className="form-field"
            onChange={(event) => {
            setTranslation(event.target.value);
            }}
        />
        <div>
        </div>
        
        {/* {audioList.map((url)=> {
            return <div>
            <audio controls>
             <source src={url} type="audio/mpeg" />
            </audio>
          </div>
        })} */}
        
        <button className="form-field" onClick={createWord}>New</button>
        </div>
    </div>
  )
}

export default QuestionAndAnswer;