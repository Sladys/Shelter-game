import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../../axiosConfig";
import Input from "../ui/input";
import Button from "../ui/button";

function RegisterForm(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerMutation = useMutation({
    mutationFn: async ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => {
      const response = await apiClient.post("/auth/register", {
        username,
        password,
      });
      return response.data.token;
    },
    onSuccess: (token) => {
      localStorage.setItem("token", token);
    },
    onError: () => {
      console.error("Ошибка регистрации");
    },
  });

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Пароли не совпадают");
      return;
    }
    registerMutation.mutate({ username, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg bg-white p-6 shadow-lg dark:bg-slate-800"
    >
      <h2 className="mb-4 text-center text-2xl font-bold">Регистрация</h2>
      {registerMutation.isError && (
        <p className="mb-4 text-center text-red-500">Ошибка регистрации</p>
      )}
      <div className="mb-4">
        <label htmlFor="register-username" className="mb-1 block">
          Логин
        </label>
        <Input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Введите логин"
          id="register-username"
          className="w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="register-password" className="mb-1 block">
          Пароль
        </label>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Введите пароль"
          id="register-password"
          className="w-full"
          autoComplete="new-password"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirm-password" className="mb-1 block">
          Подтвердите пароль
        </label>
        <Input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Подтвердите пароль"
          id="confirm-password"
          className="w-full"
          autoComplete="new-password"
          required
        />
      </div>
      <Button
        type="submit"
        className="mt-6 w-full"
        disabled={registerMutation.isPending}
      >
        {registerMutation.isPending ? "Регистрация..." : "Зарегистрироваться"}
      </Button>
    </form>
  );
}

export default RegisterForm;
