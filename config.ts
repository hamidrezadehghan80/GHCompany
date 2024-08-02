export const BASE_API_URL = process.env.BASE_API_URL as string;

export const API_URL = BASE_API_URL;

if (!BASE_API_URL) {
  console.error("REQUIRED_ENV_VAR is missing. Build process cannot continue.");
  process.exit(1); // Exit the process with a non-zero status code
}
