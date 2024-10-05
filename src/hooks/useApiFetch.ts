import { apiFetch, FetchOptions } from "../utils/api";

export function useApiFetch() {
  const fetchWithToken = async (endpoint: string, options?: FetchOptions) => {
    return apiFetch(endpoint, { ...options });
  };

  return { fetchWithToken };
}
