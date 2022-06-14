import React, { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  addDoc,
} from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage, db } from "../../../firebase";
import { toast } from "react-toastify";
import "./mentalVideo.scss";

export default function PhysicalVideo() {
  const [formData, setFormData] = useState({
    title: "",
    video: "",
    createdAt: Timestamp.now().toDate(),
  });
  const [progress, setProgress] = useState(0);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleVideoChange = (e) => {
    setFormData({ ...formData, video: e.target.files[0] });
  };
  const handleAdd = () => {
    if (!formData.title || !formData.video) {
      alert("Please fill all the fields");
      return;
    }
    const storageRef = ref(
      storage,
      `/videos/${Date.now()}${formData.video.name}`
    );
    const uploadVideo = uploadBytesResumable(storageRef, formData.video);
    uploadVideo.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          video: "",
        });
        getDownloadURL(uploadVideo.snapshot.ref).then((url) => {
          const videoRef = collection(db, "MentalVideos");
          addDoc(videoRef, {
            title: formData.title,
            videoUrl: url,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              toast("Video added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding Video", { type: "error" });
            });
        });
      }
    );
  };
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const videoRef = collection(db, "MentalVideos");
    const q = query(videoRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const videos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVideos(videos);
      console.log(videos);
    });
  }, []);
  // const handleDelete = async () => {
  //   if (window.confirm("Are you sure you want to delete this video?")) {
  //     try {
  //       await deleteDoc(doc(db, "Videos", id));
  //       toast("Video deleted successfully", { type: "success" });
  //       const storageRef = ref(storage, videoUrl);
  //       await deleteObject(storageRef);
  //     } catch (error) {
  //       toast("Error deleting video", { type: "error" });
  //       console.log(error);
  //     }
  //   }
  // };
  return (
    <div className="container">
      <h2 className="h2">Add Video</h2>
      <div className="formContainer">
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) => handleChange(e)}
        />
        {/* video */}
        <label htmlFor="">Video</label>
        <input
          type="file"
          name="video"
          accept="video/*"
          onChange={(e) => handleVideoChange(e)}
        />
        <button className="add" onClick={handleAdd}>
          Add
        </button>
      </div>
      {progress === 0 ? null : (
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped mt-2"
            style={{ width: `${progress}%` }}
          >
            {`uploading video ${progress}%`}
          </div>
        </div>
      )}
      <div>
        {videos.length === 0 ? (
          <p>No videos found!</p>
        ) : (
          videos.map(({ id, title, videoUrl, createdAt }) => (
            <div className="videoList" key={id}>
              <video height="300" width="500" controls>
                <source src={videoUrl} />
              </video>
              <h3>{title}</h3>
              <p>{createdAt.toDate().toDateString()}</p>
              <button className="delete">
                {/* onClick={handleDelete} */}
                delete video
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}