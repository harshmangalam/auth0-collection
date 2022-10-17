import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Root() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
