export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="h-16 flex items-center container mx-auto px-6 justify-between">
        <img className="w-12 h-12" src="auth0.svg" alt="Auth0" />

        <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 text-sm">
          Sign In
        </button>
      </div>
    </nav>
  );
}
