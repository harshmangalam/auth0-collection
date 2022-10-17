import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="max-w-4xl w-full mx-auto flex flex-col items-center py-12 sm:py-24">
      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
        <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-10">
          Authentication in <span className="text-blue-500"> React</span> using
          <span className="text-orange-600"> Auth0</span>
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => loginWithRedirect()}
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 lg:text-xl lg:font-bold   text-white px-4 sm:px-10 border border-blue-700 py-2 sm:py-4 text-sm rounded-full"
        >
          Authenticate
        </button>
      </div>
    </div>
  );
}
