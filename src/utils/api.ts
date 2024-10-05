export type FetchOptions = Omit<RequestInit, "headers"> & {
  headers?: HeadersInit;
  token?: string;
  queryParams?: Record<string, string>;
};

export const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);
export const apiFetch = async (
  endpoint: string,
  options: FetchOptions = {}
): Promise<Response> => {
  const { headers: customHeaders, queryParams, ...restOptions } = options;
  const headers = new Headers(customHeaders);

  let url = `${API_URL}${endpoint}`;

  if (queryParams && Object.keys(queryParams).length > 0) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(queryParams)) {
      searchParams.append(key, value);
    }
    url += (url.includes("?") ? "&" : "?") + searchParams.toString();
  }

  const response = await fetch(url, {
    ...restOptions,
    headers,
  });
  return response;
};
