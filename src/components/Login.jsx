import { useEffect, useRef } from "react";
import CryptoJS from "crypto-js";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID; // from GCP
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

export default function Login() {
  const googleBtnRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.google && googleBtnRef.current) {
        clearInterval(interval);
        initGoogle();
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  function initGoogle() {
    window.google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleLogin,
    });

    window.google.accounts.id.renderButton(googleBtnRef.current, {
      theme: "filled_black",
      size: "large",
      // text: "continue_with",
      // shape: "pill",
    });
  }

  function encryptData(text) {
    const ciphertext = CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
    return encodeURIComponent(ciphertext);
  }

  function handleLogin(response) {
    const token = response.credential;
    const payload = JSON.parse(atob(token.split(".")[1]));

    let { email, name, picture } = payload;
    let redirectUrl = import.meta.env.VITE_REDIRECT_URL;
    // console.log("User:", payload);

    // localStorage.setItem("user", JSON.stringify(payload));

    // window.location.href = "https://example.com/dashboard";

    let userDetails = `${email}|${name}|${picture}`;
    let encryptedData = encryptData(userDetails);
    let url = `${redirectUrl}?auth=${encryptedData}`;
    console.log(url);
    // window.location.href = url;
  }

  return (
    <div style={styles.container}>
      <div ref={googleBtnRef}></div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
    backgroundColor: "#09090B",
  },
};
