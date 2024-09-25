import { useApiFetch } from "../hooks/useApiFetch";
import { useQuery, useMutation } from "@tanstack/react-query";

export interface CustomError extends Error {
  status?: number;
}

export function useSessionQuery() {
  const { fetchWithToken } = useApiFetch();

  return useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const response = await fetchWithToken("/api/session");
      console.log(response.status);
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
      if (
        error instanceof Error &&
        (error.status === 404 || error.status === 401)
      ) {
        return false; // Do not retry on 404
      }
      console.log(retryCount);
      return retryCount < 2;
    },
  });
}

export function useCreateSessionMutation() {
  const { fetchWithToken } = useApiFetch();

  return useMutation({
    mutationFn: async (sessionData: any) => {
      const response = await fetchWithToken("/api/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sessionData),
      });

      if (!response.ok) {
        const error: CustomError = new Error(
          `HTTP error, status = ${response.status}`
        );
        error.status = response.status;
        throw error;
      }

      return response.json();
    },
  });
}
