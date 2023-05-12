import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>LogIn</button>
      <button onClick={handleLogout}>LogOut</button>
      <div>User is logged {isLoggedIn ? "in" : "out"}</div>
    </div>
  );
};
