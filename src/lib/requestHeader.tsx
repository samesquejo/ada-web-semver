// HOOKS
import useCookieHook from "@/hooks/useCookieHook";

export interface HeadersInterface {
  headers: {
    Authorization: string;
  };
}

const RequestHeaders = () => {
  const { getCookie } = useCookieHook();

  const headers: HeadersInterface = {
    headers: {
      Authorization: `Bearer ${getCookie("at")}`,
    },
  };
  return headers;
};

export default RequestHeaders;
