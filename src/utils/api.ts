export const API_URL = import.meta.env.VITE_API_URL;

export const apiFetch = (endpoint: string, options = {}) => {
  // Shared options like auth, headers, etc.
  const url = `${API_URL}${endpoint}`;
  return fetch(url, options);
};
