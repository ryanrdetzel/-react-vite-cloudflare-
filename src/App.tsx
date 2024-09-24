import { useEffect } from "react";
import { Button } from "@/components/ui/button";

function App() {
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        console.log("Todo:", data);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    fetchTodo();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Basic React Vite Tailwind App
        <Button>Click me</Button>
      </h1>
    </>
  );
}

export default App;
