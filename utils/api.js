// utils/api.js
export const apiBaseUrl = "http://localhost:8000/api";
const tokenStore = useTokenStore();

const Api = async (endpoint, options = {}) => {
  const url = `${apiBaseUrl}${endpoint}`;

  const token = tokenStore.token ? tokenStore.token : null;

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };

  const { data, error } = await useFetch(url, {
    ...options,
    headers,
    baseURL: apiBaseUrl,
  });

  if (error.value) {
    throw new Error(`API fetch error: ${error.value.message}`);
  }

  return data.value;
};

Api.get = (endpoint, options = {}) => {
  return Api(endpoint, { ...options, method: "GET" });
};

Api.post = (endpoint, body, options = {}) => {
  return Api(endpoint, {
    ...options,
    method: "POST",
    body: JSON.stringify(body),
  });
};

Api.put = (endpoint, body, options = {}) => {
  return Api(endpoint, {
    ...options,
    method: "PUT",
    body: JSON.stringify(body),
  });
};

Api.delete = (endpoint, options = {}) => {
  return Api(endpoint, { ...options, method: "DELETE" });
};

export default Api;
