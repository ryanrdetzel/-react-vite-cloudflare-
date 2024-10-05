import { useSession } from "../hooks/useSession";

import React from "react";

const App: React.FC = () => {
  const { user } = useSession();

  const handleLogout = async () => {
    try {
      await fetch("/auth/logout", { method: "POST" });
      window.location.href = "/app/signin";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!user) {
    return null;
  }
  return (
    <>
      <h1 className="text-3xl font-bold">Welcome Home</h1>
      Email: {user.email}{" "}
      <span
        className="underline cursor-pointer text-primary hover:text-primary/80"
        onClick={handleLogout}
      >
        Logout
      </span>
    </>
  );
};

export default App;
