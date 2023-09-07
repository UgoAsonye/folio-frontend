export function Index(props) {
  return (
    <div>
      <h1>All Uploads</h1>
      {props.uploads.map((upload) => (
        <div key={upload.id}>
          <h2>{upload.title}</h2>
          <img src={upload.image} />
          <p>{upload.description}</p>
        </div>
      ))}
    </div>
  );
}
