/**
 * IMPORTANT
 * This token should be be in the backend code and API calls should be
 * proxied by the app serve so we don't expose this in network requests
 *
 * Otherwise you configure a whitelist of domains on IPINFO options
 */
export const IP_INFO_TOKEN = '65966fb3bf7f36';

export const IP_INFO_EMPTY_RESPONSE = {
  ip: null,
  hostname: null,
  city: null,
  region: null,
  country: null,
  loc: null,
  org: null,
  postal: null,
  timezone: null,
};