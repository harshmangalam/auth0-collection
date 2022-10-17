import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <Link
        to={"/"}
        className="h-16 flex items-center container mx-auto px-6 justify-between"
      >
        <img className="w-12 h-12" src="auth0.svg" alt="Auth0" />
      </Link>
    </nav>
  );
}
