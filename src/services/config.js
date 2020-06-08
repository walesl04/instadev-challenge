const headers = new Headers();
headers.append("Accept", "application/json");
headers.append("Content-Type", "application/json");

const config = {
  baseUrl: "https://5e7d0266a917d70016684219.mockapi.io/api/v1/",
  headers,
};

export default config;
