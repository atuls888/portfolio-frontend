import { useEffect, useRef, useState } from "react";
import CryptoJS from "crypto-js";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID; 
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

export default function Login() {
  const googleBtnRef = useRef(null);
  const [appUrl, setAppUrl] = useState(""); // Added state for iframe

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.google && googleBtnRef.current && !appUrl) {
        clearInterval(interval);
        initGoogle();
      }
    }, 100);

    return () => clearInterval(interval);
  }, [appUrl]);

  function initGoogle() {
    window.google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleLogin,
    });

    window.google.accounts.id.renderButton(googleBtnRef.current, {
      theme: "filled_black",
      size: "large"
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
    let timer = Date.now();

    let userDetails = `${email}|${name}|${picture}|${timer}`;
    let encryptedData = encryptData(userDetails);
    let url = `${redirectUrl}?p=${encryptedData}`;

    sessionStorage.setItem("user", JSON.stringify(encryptedData));

    // window.location.href = url; // Replaced with state update
    setAppUrl(url); 
  }

  return (
    <div style={styles.container}>
      {!appUrl ? (
        <div ref={googleBtnRef}></div>
      ) : (
        <iframe
          src={appUrl}
          style={styles.iframe}
          title="App"
          allow="storage-access; clipboard-write"
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
    backgroundColor: "#09090B",
    margin: 0,
    overflow: "hidden"
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  }
};