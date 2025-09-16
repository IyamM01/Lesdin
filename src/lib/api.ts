import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getUsers() {
  const res = await axios.get(`${API_BASE_URL}/users`);
  return res.data;
}

export async function createUser(data: { name: string; email: string }) {
  const res = await axios.post(`${API_BASE_URL}/users`, data);
  return res.data;
}
