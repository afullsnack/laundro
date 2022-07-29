const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getPickups = async () =>
  await fetch(`${BASE_URL}/pickups`, {
    headers: { "Content-type": "application/json" },
  }).then((res) => res.json());
