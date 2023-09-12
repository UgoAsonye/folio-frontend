export function Index(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateComment(params);
    event.target.reset();
  };
  return (
    <div>
      <h1 className="text-center">All Uploads</h1>
      {props.uploads.map((upload) => (
        <div key={upload.id} className="card mx-5" style={{ width: "50rem" }}>
          <img src={upload.image} className="card-img-top" alt="Image" />
          <div className="card-body">
            <h5 className="card-title">{upload.title}</h5>
            <p className="card-text">{upload.description}</p>
          </div>
          <div className="card-body">
            <button onClick={() => props.onShowUpload(upload)}>Show Photo</button>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div>
                <form onSubmit={handleSubmit}>
                  <div>
                    Comment: <input name="comment" type="text" />
                  </div>
                  <div>
                    Upload ID: <input name="upload_id" type="number" placeholder={upload.id} readOnly />
                  </div>
                  <button type="submit">Post Comment</button>
                </form>
              </div>
            </li>
            <li className="list-group-item">
              {/* {upload.comments.map((comment) => (
                <div key={comment.id}>
                  <p>{comment}</p>
                </div>
              ))} */}
              {upload.comments}
            </li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
