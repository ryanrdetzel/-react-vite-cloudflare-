import { useRouteError } from "react-router-dom";

interface RouterError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouterError;

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-sm text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
