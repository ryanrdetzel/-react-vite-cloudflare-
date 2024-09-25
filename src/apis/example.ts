import { apiFetch } from "../utils/api";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
export const getExample = async () => {
  try {
    const response = await apiFetch("/api");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching todo:", error);
  }
};
