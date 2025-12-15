const API_URL = process.env.API_URL;

export async function getGridStatus() {
  return fetch(`${API_URL}/grid-status`).then(r => r.json());
}
export async function simulateStressEvent() {
  return fetch(`${API_URL}/simulate-stress-event`, { method: 'POST' }).then(r => r.json());
}
export async function reportSavings() {
  return fetch(`${API_URL}/report-savings`, { method: 'POST' }).then(r => r.json());
}