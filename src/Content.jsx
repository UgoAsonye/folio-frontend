import { Index } from "./Index";
import axios from "axios";
import { useState, useEffect } from "react";
import { UploadsNew } from "./UploadsNew";

export function Content() {
  const [uploads, setUploads] = useState([]);
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

  useEffect(handleIndex, []);

  return (
    <div>
      <UploadsNew onCreateUpload={handleCreateUpload} />
      <Index uploads={uploads} />
    </div>
  );
}
