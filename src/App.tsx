import { useSessionQuery, CustomError } from "./apis/session";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

interface SessionQueryResult {
  data: object;
  isLoading: boolean;
  isError: boolean;
  error: CustomError | null;
}

function App() {
  const navigate = useNavigate();
  const { data, isError, error } = useSessionQuery() as SessionQueryResult;

  useEffect(() => {
    if (isError && error?.status === 404) {
      navigate("/new-user");
    }
  }, [isError, error, navigate]);

  if (!data) {
    return null;
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Basic React Vite Tailwind App
      </h1>
      <ul>
        <li>Name: {data.name}</li>
      </ul>
    </>
  );
}

export default App;
