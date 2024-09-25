import { useEffect } from "react";
import { apiFetch } from "./utils/api";

function App() {
  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await apiFetch("/api");
        const data = await response.json();
        console.log("Data:", data);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    fetchTest();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Basic React Vite Tailwind App
      </h1>
    </>
  );
}

export default App;
