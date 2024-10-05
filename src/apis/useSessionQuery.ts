import { useApiFetch } from "../hooks/useApiFetch";
import { useQuery } from "@tanstack/react-query";
import { CustomError } from "../types";

export function useSessionQuery() {
  const { fetchWithToken } = useApiFetch();

  return useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const response = await fetchWithToken("/api/session");
      if (!response.ok) {
        const error: CustomError = new Error(
          `HTTP error, status = ${response.status}`
        );
        error.status = response.status;
        throw error;
      }
      return response.json();
    },
    retry: (retryCount, error: CustomError) => {
      if (error && error.status === 401) {
        return false; // Do not retry on 401
      }
      console.log(retryCount);
      return retryCount < 2;
    },
  });
}
