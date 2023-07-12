export default async function getIp() {
  const response = await fetch(`https://api.ipify.org`);
  return await response.text();
}
