import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Root() {
  const {isLoading} = useAuth0()
  if(isLoading){
    return <div>Loading...</div>
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="py-4 px-4">
        <Outlet />
      </main>
    </div>
  );
}
