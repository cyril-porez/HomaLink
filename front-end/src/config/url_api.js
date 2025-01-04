// const address = "https://homalink-back-master.development.atelier.ovh";
// const localAddressStrapi = "http://localhost:1337";
const localAddress = "http://localhost:8080";

export const URL = `${localAddress}`;

export const URL_LOGIN = `${localAddress}/api/auth/sign-in`;
export const URL_REGISTER = `${localAddress}/api/auth/local/register`;

export const URL_HORSES = `${localAddress}/api/horses/`;
export const URL_HORSES_BY_USER = `${localAddress}/api/users/4?populate[0]=horses`;
