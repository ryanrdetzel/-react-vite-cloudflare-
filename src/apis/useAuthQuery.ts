import { useMutation } from "@tanstack/react-query";
import { useApiFetch } from "../hooks/useApiFetch";
import { CustomError } from "../types";

export function useAuthMutation() {
  const { fetchWithToken } = useApiFetch();

  return useMutation({
    mutationFn: async (data: object) => {
      const response = await fetchWithToken("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorPayload = await response.json();
        const error: CustomError = new Error(
          errorPayload.error || "Failed to register"
        );
        error.status = response.status;
        throw error;
      }
      return response.json();
    },
  });
}

export function useAuthRegisterMutation() {
  const { fetchWithToken } = useApiFetch();

  return useMutation({
    mutationFn: async (data: object) => {
      const response = await fetchWithToken("/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorPayload = await response.json();
        const error: CustomError = new Error(
          errorPayload.error || "Failed to register"
        );
        error.status = response.status;
        throw error;
      }
      return response.json();
    },
  });
}
