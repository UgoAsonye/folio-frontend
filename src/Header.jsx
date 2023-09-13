import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <a href="/">
            <img src="src/assets/logo-transparent-png.png" alt="FOLIO" width="30" height="24" />
          </a>
          |<a href="/signup">Signup</a> |<a href="/login">Login</a> |<LogoutLink />
        </div>
      </nav>
    </header>
  );
}
