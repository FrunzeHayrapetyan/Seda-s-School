import { cookies } from "next/headers";

export default async function Lang() {
  const cookieStore = await cookies();
  return cookieStore.get("lang")?.value || "en";
}