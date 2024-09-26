import { useSessionQuery, CustomError } from "../apis/session";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

type UserType = {
  email: string;
};

interface SessionQueryResult {
  data: UserType;
  isLoading: boolean;
  isError: boolean;
  error: CustomError | null;
}

function App() {
  const navigate = useNavigate();
  const { data, isError, error } = useSessionQuery() as SessionQueryResult;

  useEffect(() => {
    if (isError && error?.status === 401) {
      navigate("/app/signin");
    }
  }, [isError, error, navigate]);

  if (!data) {
    return null;
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Basic React Vite Tailwind App</h1>
      <ul>
        <li>Email: {data.email}</li>
      </ul>
    </>
  );
}

export default App;
