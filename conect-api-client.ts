const API_URL = process.env.API_URL;

export async function getActive() {
  return fetch(`${API_URL}/api/active`).then(r => r.json());
}
export async function getClaim() {
  return fetch(`${API_URL}/api/claim`).then(r => r.json());
}