import { useState } from "react";
import api from "../../api";

interface Props {
  setIsAuthenticated: (value: boolean) => void;
}

function Login({ setIsAuthenticated }: Props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      const response = await api.get(
        `/users?username=${username}&password=${password}`
      );

      if (response.data.length > 0) {

        setIsAuthenticated(true);

        localStorage.setItem("auth", "true");

        alert("Login realizado com sucesso");

      } else {
        alert("Usuário ou senha incorretos");
      }

    } catch (error) {
      console.error("Erro no login", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>

      <input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Login
      </button>

    </form>
  );
}

export default Login;