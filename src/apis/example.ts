import { useApiFetch } from "../hooks/useApiFetch";
import { useQuery } from "@tanstack/react-query";

export function useExampleQuery() {
  const { fetchWithToken } = useApiFetch();

  return useQuery({
    queryKey: ["example"],
    queryFn: async () => {
      const response = await fetchWithToken("/api/example");
      return response.json();
    },
  });
}
