import { useState } from "react";
import Input from "../ui/input";
import Button from "../ui/button";

function LoginForm(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg bg-white p-6 shadow-lg dark:bg-slate-800"
    >
      <h2 className="mb-4 text-center text-2xl font-bold">Вход</h2>
      <div className="mb-4">
        <label htmlFor="login-username" className="mb-1 block">
          Логин
        </label>
        <Input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Введите логин"
          id="login-username"
          className="w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="login-password" className="mb-1 block">
          Пароль
        </label>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Введите пароль"
          id="login-password"
          className="w-full"
          autoComplete="current-password"
          required
        />
      </div>
      <Button type="submit" className="mt-6 w-full">
        Войти
      </Button>
    </form>
  );
}

export default LoginForm;
