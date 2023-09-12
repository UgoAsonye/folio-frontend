export function Profile() {
  return (
    <div key={localStorage.id} className="card">
      <img src={localStorage.profile_pic} className="card-img-top" alt="profile pic" />
      <div className="card-body"></div>
    </div>
  );
}
