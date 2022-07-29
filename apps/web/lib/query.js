const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getPickups = async ({ token }) =>
  await fetch(`${BASE_URL}/pickups`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
