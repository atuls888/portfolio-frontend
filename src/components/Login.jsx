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

  // const encodeData = (str) => {
  //   return str
  //     .split("")
  //     .map((char) => {
  //       // 1. Handle Lowercase (a-z) -> Shift 4
  //       if (/[a-z]/.test(char)) {
  //         return String.fromCharCode(((char.charCodeAt(0) - 97 + 4) % 26) + 97);
  //       }

  //       // 2. Handle Uppercase (A-Z) -> Shift 4
  //       if (/[A-Z]/.test(char)) {
  //         return String.fromCharCode(((char.charCodeAt(0) - 65 + 4) % 26) + 65);
  //       }

  //       // 3. Handle Numbers (0-9) -> Shift 33
  //       // (Digit + 33) % 10 keeps it a digit
  //       if (/[0-9]/.test(char)) {
  //         let digit = parseInt(char);
  //         return ((digit + 33) % 10).toString();
  //       }

  //       // Keep special characters (@, .) as they are
  //       return char;
  //     })
  //     .join("");
  // };

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
    // let encryptedData = encodeData(userDetails);
    let url = `${redirectUrl}?p=${encryptedData}`;

    sessionStorage.setItem("user", JSON.stringify(encryptedData));

    window.location.href = url;
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
