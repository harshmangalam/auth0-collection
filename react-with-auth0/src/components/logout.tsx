import { useAuth0 } from "@auth0/auth0-react";

export default function Logout() {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() => logout()}
      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 bg-red-500 transition duration-150 ease-in-out hover:bg-red-600 lg:text-xl lg:font-bold   text-white px-4 sm:px-10 border border-red-700 py-2 text-sm rounded-full"
    >
      Logout
    </button>
  );
}
