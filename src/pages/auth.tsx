import { useState } from "react";
import Button from "../components/ui/button";
import LoginForm from "../components/auth/loginForm";
import RegisterForm from "../components/auth/registerForm";

function Auth(): JSX.Element {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = (formType: boolean) => {
    setIsLogin(formType);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <div className="mb-6 flex space-x-4">
        <button
          className={`text-lg font-medium ${isLogin ? "border-b-2 border-emerald-500 text-emerald-500" : "text-gray-500"}`}
          onClick={() => toggleForm(true)}
        >
          Вход
        </button>
        <span className="text-lg text-gray-500">/</span>
        <button
          className={`text-lg font-medium ${!isLogin ? "border-b-2 border-emerald-500 text-emerald-500" : "text-gray-500"}`}
          onClick={() => toggleForm(false)}
        >
          Регистрация
        </button>
      </div>
      <div className="w-full max-w-md">
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}

export default Auth;