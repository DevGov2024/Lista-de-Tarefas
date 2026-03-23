import { useState } from "react";

export default function Login({ setIsAuthenticated }: any) {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "1234") {
      localStorage.setItem("auth", "true");
      setIsAuthenticated(true);
      alert("Login realizado!");
    } else {
      alert("Senha incorreta");
    }
  };

  return (
    <div>
      <h1>Login Professor</h1>
      <input
        type="password"
        placeholder="Digite a senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}