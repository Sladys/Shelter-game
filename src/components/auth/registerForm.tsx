import { useState } from "react";
import Input from "../ui/input";
import Button from "../ui/button";

function RegisterForm(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      alert("Пароли не совпадают");
      return;
    }
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-center text-2xl font-bold">Регистрация</h2>
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
      <Button type="submit" className="w-full">
        Зарегистрироваться
      </Button>
    </form>
  );
}

export default RegisterForm;
