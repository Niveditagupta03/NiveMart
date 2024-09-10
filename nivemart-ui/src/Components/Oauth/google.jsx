import axios from "axios";
import { useEffect } from "react";

export default function Google() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/v1/auth/oauth",
      data: {
        code,
      },
    }).then((res) => {
      console.log(res.data);
      window.localStorage.setItem("userJWT", res.data);
      window.dispatchEvent(new Event("storage"));
      window.location.href = "/";
    });
  }, []);
  return undefined;
}
