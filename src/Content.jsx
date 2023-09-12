import { Index } from "./Index";
import axios from "axios";
import { useState, useEffect } from "react";
import { UploadsNew } from "./UploadsNew";
import { Modal } from "./Modal";
import { UploadsShow } from "./UploadsShow";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Profile } from "./Profile";
import { Comment } from "./Comment";

export function Content() {
  const [uploads, setUploads] = useState([]);
  const [isUploadsShowVisible, setIsUploadsShowVisible] = useState(false);
  const [currentUpload, setCurrentUpload] = useState({});
  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/uploads.json").then((response) => {
      console.log(response.data);
      setUploads(response.data);
    });
  };

  const handleCreateUpload = (params, successCallBack) => {
    console.log("handleCreateUpload", params);
    axios.post("http://localhost:3000/uploads.json", params).then((response) => {
      setUploads([...uploads, response.data]);
      successCallBack();
    });
  };

  const handleShowUpload = (upload) => {
    console.log("handleShowUpload", upload);
    setIsUploadsShowVisible(true);
    setCurrentUpload(upload);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsUploadsShowVisible(false);
  };

  const handleDestroyUpload = (upload) => {
    console.log("handleDestroyUpload", upload);
    axios.delete(`http://localhost:3000/uploads/${upload.id}.json`).then((response) => {
      setUploads;
      uploads.filter((p) => p.id !== upload.id);
      handleClose();
    });
  };

  const handleShowUser = (user) => {
    console.log("handleShowUser", user);
  };

  const handleCreateComment = (params) => {
    console.log("handleCreateComment", params);
    axios.post("http://localhost:3000/comments.json", params).then((response) => {
      console.log(response);
    });
  };

  useEffect(handleIndex, []);

  return (
    <div>
      <Routes>
        <Route path="/new_upload" element={<UploadsNew onCreateUpload={handleCreateUpload} />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route
          path="/homepage"
          element={<Index uploads={uploads} onShowUpload={handleShowUpload} onCreateComment={handleCreateComment} />}
        />
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Modal show={isUploadsShowVisible} onClose={handleClose} onDestroyUpload={handleDestroyUpload}>
        <UploadsShow upload={currentUpload} />
      </Modal>
    </div>
  );
}
