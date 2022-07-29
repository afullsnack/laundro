export const MAIN_URL =
  process.env.NODE_ENV === "production"
    ? `https://laundro.vercel.app`
    : `http://localhost:3000`;
