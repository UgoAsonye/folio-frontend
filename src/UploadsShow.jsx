export function UploadsShow(props) {
  const handleClick = () => {
    props.onDestroyUpload(props.upload);
  };

  return (
    <div>
      <img src={props.upload.image} style={{ width: "50rem", height: "25rem" }} />
      {/* <button onClick={handleClick}>Delete Upload</button> */}
    </div>
  );
}
