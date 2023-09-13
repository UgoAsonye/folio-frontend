export function Profile() {
  return (
    <div key={localStorage.id} className="card" style={{ width: "18rem" }}>
      <img src={localStorage.profile_pic} className="card-img-top" alt="profile pic" />
      <div className="card-body">
        <p>{localStorage.username}</p>
        <p>{localStorage.email}</p>
      </div>
    </div>
  );
}
