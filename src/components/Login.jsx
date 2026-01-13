import { useEffect, useRef } from "react";

const CLIENT_ID =import.meta.env.VITE_CLIENT_ID // from GCP

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

  function handleLogin(response) {
    const token = response.credential;
    const payload = JSON.parse(atob(token.split(".")[1]));

    let { email, name, picture } = payload;
    let redirectUrl = import.meta.env.VITE_REDIRECT_URL;
    // console.log("User:", payload);

    // localStorage.setItem("user", JSON.stringify(payload));

    // window.location.href = "https://example.com/dashboard";
    window.location.href = `${redirectUrl}?email=${email}&name=${name}&picture=${picture}`;
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
