// Auto-generated API client
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const fetch_grid_status = () => fetch(`${API_URL}/grid-status`).then(r => r.json());
export const fetch_simulate_stress_event = () => fetch(`${API_URL}/simulate-stress-event`).then(r => r.json());
export const fetch_report_savings = () => fetch(`${API_URL}/report-savings`).then(r => r.json());
export const fetch_regulate = () => fetch(`${API_URL}/regulate`).then(r => r.json());
export const fetch_health = () => fetch(`${API_URL}/health`).then(r => r.json());
