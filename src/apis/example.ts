import { apiFetch } from "../utils/api";

export const getExample = async () => {
  try {
    const response = await apiFetch("/api");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching todo:", error);
  }
};
