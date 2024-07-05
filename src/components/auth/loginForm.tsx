import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../../axiosConfig"; /// настроить конфиг
import Input from "../ui/input";
import Button from "../ui/button";

function LoginForm(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation({
    mutationFn: async ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => {
      const response = await apiClient.post("/", { // путь к апи
        username,
        password,
      });
      return response.data.token;
    },
    onSuccess: (token) => {
      localStorage.setItem("token", token);
      window.location.href = ""; /// Указать путь
    },
    onError: (error) => {
      console.error("Ошибка авторизации", error);
    },
  });

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ username, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg bg-white p-6 shadow-lg dark:bg-slate-800"
    >
      <h2 className="mb-4 text-center text-2xl font-bold">Вход</h2>
      {loginMutation.isError && (
        <p className="mb-4 text-center text-red-500">Ошибка авторизации</p>
      )}
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
      <Button
        type="submit"
        className="mt-6 w-full"
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? "Вход..." : "Войти"}
      </Button>
    </form>
  );
}

export default LoginForm;
