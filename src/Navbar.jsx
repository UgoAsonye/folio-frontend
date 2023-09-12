export function Navbar() {
  return (
    <nav className="navbar sticky-bottom bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/profile">
          <img src="src/assets/person_110935.png" alt="Profile" width="30" height="24" />
        </a>
        <a className="navbar-brand" href="/homepage">
          <img src="src/assets/Home-512.webp" alt="Home" width="30" height="24" />
        </a>
        <a className="navbar-brand" href="/new_upload">
          <img src="src/assets/Plus-Symbol-Transparent-Images.png" alt="Bootstrap" width="30" height="24" />
        </a>
      </div>
    </nav>
  );
}
