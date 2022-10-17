import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex items-center flex-col space-y-4">
      <img src={user?.picture} alt={user?.name} className="w-56 h-56 rounded" />
      <div>
        <h1>{user?.name}</h1>
        <h2>{user?.email}</h2>

        <h3>
          Account updated: {new Date(user?.updated_at).toLocaleDateString()}
        </h3>
        <h3>Locale: {user?.locale}</h3>
      </div>
      <div
        className={`px-4 border py-1 text-sm text-white inline-flex rounded-full font-semibold ${
          user?.email_verified ? "border-green-500 text-green-500" : "border-red-500 text-red-500"
        }`}
      >
        {user?.email_verified ? "Verified" : "Not Verified"}
      </div>
      
    </div>
  );
}

// {
//     "given_name": "Harsh",
//     "family_name": "Mangalam",
//     "nickname": "harshdev8218",
//     "name": "Harsh Mangalam",
//     "picture": "https://lh3.googleusercontent.com/a/ALm5wu1YSkuVNyHm_v3FG3tmMjUWBzK8V3a3nOwV-CAU=s96-c",
//     "locale": "en",
//     "updated_at": "2022-10-17T08:34:49.150Z",
//     "email": "harshdev8218@gmail.com",
//     "email_verified": true,
//     "sub": "google-oauth2|111627030256528312080"
// }
