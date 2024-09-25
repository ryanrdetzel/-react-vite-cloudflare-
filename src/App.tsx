import { getExample } from "./apis/example";
import { useQuery } from "@tanstack/react-query";
function App() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["example"],
    queryFn: getExample,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data...</div>;
  }

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
