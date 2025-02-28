import React from "react";
import { useAuth } from "../Context/Authprovider.jsx"; // Import correctly
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth(); // Fix destructuring

  console.log("Auth User:", authUser); // Check if it logs correctly

  const handleLogout = () => {
    localStorage.removeItem("Users");
    toast.success("Logout success");
    window.location.reload()
    setAuthUser(null); // Clear auth state
  };

  return (
    authUser && (
      <button
        onClick={handleLogout}
        className="cursor-pointer px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Logout
      </button>
    )
  );
}

export default Logout;
