import { useState } from "react";

export function UploadsNew(props) {
  const [uploadedImg, setUploadedImg] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    params.append("image_file", uploadedImg);
    props.onCreateUpload(params, () => event.target.reset());
  };

  const handleSetFile = (event) => {
    if (event.target.files.length > 0) {
      setUploadedImg(event.target.files[0]);
    }
  };

  return (
    <div>
      <h1>New Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          {/* Image: <input name="image" type="text" /> */}
          Upload Image: <input type="file" onChange={handleSetFile} />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
