import Config from "./config";

export const Api = {
  get: async (route, params) => {
    return fetch(`${Config.baseUrl}${route}`, {
      method: "GET",
      mode: "cors",
      headers: Config.headers,
      cache: "default",
    }).then((res) => res.json());
  },
  post: async (route, params) => {
    return fetch(`${Config.baseUrl}${route}`, {
      method: "POST",
      mode: "cors",
      headers: Config.headers,
      cache: "default",
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  put: async (route, params) => {
    return fetch(`${Config.baseUrl}${route}`, {
      method: "PUT",
      mode: "cors",
      headers: Config.headers,
      cache: "default",
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  delete: async (route) => {
    return fetch(`${Config.baseUrl}${route}`, {
      method: "DELETE",
      mode: "cors",
      headers: Config.headers,
      cache: "default",
    }).then((res) => res.json());
  },
};
