const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const addPickups = async ({ data }) =>
  await fetch(`${BASE_URL}/pickups`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  }).then((res) => res.json());
