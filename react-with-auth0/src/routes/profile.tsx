import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex items-center justify-center flex-col space-y-4">
      <img src={user?.picture} alt={user?.name} className="w-56 h-56 rounded" />
      <div className="flex flex-col items-center">
        <h1 className="text-3xl">{user?.name}</h1>
        <h2 className="text-2xl">{user?.email}</h2>

        {user?.updated_at && (
          <h3 className="text-xl">
            Account updated: {new Date(user?.updated_at).toLocaleDateString()}
          </h3>
        )}
        {user?.locale && <h3 className="text-xl">Locale: {user?.locale}</h3>}
      </div>
      <div
        className={`px-4 border py-1 text-sm text-white inline-flex rounded-full font-semibold ${
          user?.email_verified
            ? "border-green-500 text-green-500"
            : "border-red-500 text-red-500"
        }`}
      >
        {user?.email_verified ? "Verified" : "Not Verified"}
      </div>
    </div>
  );
}
