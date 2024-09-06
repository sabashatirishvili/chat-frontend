export default function getCookie (name: string) {
  const values = `; ${document.cookie}`;
  const parts = values.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return null;
}