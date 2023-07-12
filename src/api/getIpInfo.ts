export default async function getIpInfo(ip: string) {
  const response = await fetch(
    `https://ipinfo.io/${ip}?token=${process.env.REACT_APP_IP_INFO_TOKEN}`
  );
  return await response.json();
}
