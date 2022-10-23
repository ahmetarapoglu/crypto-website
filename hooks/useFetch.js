import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/router";
// contetx
// import { AuthContext } from "context/auth-context/auth-context";
// import { logout } from "context/auth-context/auth-actions";
// cookies
import { useSession, signOut } from "next-auth/react";
const useFetch = (
  url = "",
  method = "post",
  params = {},
  immediate = true,
  token = true,
  headers = {}
) => {
  const router = useRouter();
  const { data: cookies, status } = useSession();

  // states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const source = axios.CancelToken.source();

  console.log("UseFetch Big cookies => ", url);
  console.log(cookies);

  // useCallBack for post submit ..
  const executeFetch = useCallback(
    async (data, formData = false) => {
      //   if (token === true) {
      //     // check cookies
      //   }
      //   let cookies = parseCookies();
      //   if (cookies?.user) {
      //     cookies = JSON.parse(cookies?.user);
      //   } else {
      //     cookies = {};
      //   }
      console.log("User Fetch User Cookies =>", url);
      console.log(cookies);
      setLoading(true);
      setData(null);
      setError(null);

      const __data = formData ? data : { ...params, ...data };
      const __params =
        method?.toLocaleLowerCase() === "get" ? { ...params, ...data } : {};
      try {
        const { data: response } = await axios({
          method: method,
          url: url,
          data: __data,
          headers: {
            ...headers,
            lang: router.locale,
            Authorization: `Bearer ${cookies?.user?.token}`,
          },
          params: __params,
          timeout: 1000 * 30, // wait to 10 seconds for response or cancel the request ..
        });
        setLoading(false);
        if (response.status === true) {
          setData(response); // setting incomed data here
        } else {
          setError(
            response?.description === false
              ? "Something went wrong! Please try again later"
              : response?.description
          ); // setting error here
        }
      } catch (err) {
        setLoading(false);
        if (err?.response?.status === 401) {
          // signOut({ callbackUrl: "/" });
        } else if (err?.response?.status === 400) {
          setError(
            err?.response?.description ||
              "Something went wrong! Please try again later."
          );
        } else if (err?.response?.status === 404) {
          setError("Wrong endpoint error");
        }
      }
    },
    [url, method, params, headers, token, cookies, status]
  );

  // useEffects
  useEffect(() => {
    const start = async () => {
      if (immediate) {
        immediate = false;
        executeFetch();
      }
    };
    if (status !== "loading") start();
    return () => {
      source.cancel(); // clear axios when this hook unmounted
    };
  }, [immediate, status]);

  return { data, loading, error, executeFetch };
};

export default useFetch;
