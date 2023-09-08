export function UploadsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateUpload(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Image: <input name="image" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
