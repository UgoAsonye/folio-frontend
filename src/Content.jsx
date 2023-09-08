import { Index } from "./Index";
import axios from "axios";
import { useState, useEffect } from "react";
import { UploadsNew } from "./UploadsNew";
import { Modal } from "./Modal";
import { UploadsShow } from "./UploadsShow";

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

  useEffect(handleIndex, []);

  return (
    <div>
      <UploadsNew onCreateUpload={handleCreateUpload} />
      <Index uploads={uploads} onShowUpload={handleShowUpload} />
      <Modal show={isUploadsShowVisible} onClose={handleClose}>
        <UploadsShow upload={currentUpload} />
      </Modal>
    </div>
  );
}
