type FetchOptions = Omit<RequestInit, "headers"> & {
  headers?: HeadersInit;
  token: string | null;
};

export const API_URL = import.meta.env.VITE_API_URL;

export const apiFetch = async (
  endpoint: string,
  options: FetchOptions = { token: null }
): Promise<Response> => {
  const { token, headers: customHeaders, ...restOptions } = options;
  const headers = new Headers(customHeaders);

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const url = `${API_URL}${endpoint}`;
  const response = await fetch(url, {
    ...restOptions,
    headers,
  });
  return response;
};
