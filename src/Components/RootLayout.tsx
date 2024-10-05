import { Outlet, useNavigate } from "react-router-dom";
import { useSessionQuery } from "../apis/useSessionQuery";
import { useEffect } from "react";
import { CustomError } from "../types";
import { SessionProvider } from "../contexts/SessionContext";

const RootLayout = () => {
  const navigate = useNavigate();
  const { data: user, isLoading, isError, error } = useSessionQuery();

  useEffect(() => {
    if (isError && (error as CustomError)?.status === 401) {
      if (location.pathname !== "/app/signin") {
        navigate("/app/signin");
      }
    }
  }, [isError, error, navigate]);

  return (
    <SessionProvider value={{ user, isLoading, isError, error }}>
      <Outlet />
    </SessionProvider>
  );
};

export default RootLayout;
