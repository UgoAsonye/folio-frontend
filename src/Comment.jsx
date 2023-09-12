export function Comment(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateComment(params);
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Comment: <input name="comment" type="text" />
        </div>
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
}
