import Cookies from "js-cookie";

// urls
export const getApiBaseUrl = () => process.env.NEXT_PUBLIC_API_BASE_URL;

// tokens
export const getAccessToken = () => Cookies.get("accessToken") || "";
export const getRefreshToken = () => Cookies.get("refreshToken") || "";
