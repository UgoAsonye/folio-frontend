export function Index(props) {
  return (
    <div>
      <h1>All Uploads</h1>
      {props.uploads.map((upload) => (
        <div key={upload.id} className="card" style={{ width: "50rem" }}>
          <img src={upload.image} className="card-img-top" alt="Image" />
          <div className="card-body">
            <h5 className="card-title">{upload.title}</h5>
            <p className="card-text">{upload.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <div className="card-body">
              <button onClick={() => props.onShowUpload(upload)}>Show Photo</button>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
}
