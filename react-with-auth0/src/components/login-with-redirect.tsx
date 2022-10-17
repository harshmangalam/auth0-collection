import { useAuth0 } from "@auth0/auth0-react";

export default function LoginWithRedirect() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() => loginWithRedirect()}
      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 lg:text-xl lg:font-bold   text-white px-4 sm:px-10 border border-blue-700 py-2 sm:py-4 text-sm rounded-full"
    >
      Authenticate
    </button>
  );
}
