import { useAuth } from "@clerk/clerk-react";
import { apiFetch } from "../utils/api";

export function useApiFetch() {
  const { getToken } = useAuth();

  const fetchWithToken = async (
    endpoint: string,
    options: RequestInit = {}
  ) => {
    const token = await getToken();
    return apiFetch(endpoint, { ...options, token });
  };

  return { fetchWithToken };
}
