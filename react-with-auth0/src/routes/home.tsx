import { useAuth0 } from "@auth0/auth0-react";
import LoginWithRedirect from "../components/login-with-redirect";
import ProfileLink from "../components/profile-link";

export default function Home() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="max-w-4xl w-full mx-auto flex flex-col items-center py-12 sm:py-24">
      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
        <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-10">
          Authentication in <span className="text-blue-500"> React</span> using
          <span className="text-orange-600"> Auth0</span>
        </h1>
      </div>
      <div className="flex justify-center items-center">
        {isAuthenticated ? <ProfileLink /> : <LoginWithRedirect />}
      </div>
    </div>
  );
}
