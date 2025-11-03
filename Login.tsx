'use client'

import { useState } from "react";
import { Input } from "@heroui/input"; 
import { Button } from "@heroui/button"
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();


  const handleNext = () => {
    if (email.trim() !== "") setShowPassword(true);
  };

  const handleRedirect = () => {
    router.push('/panel');
  }

  return (
    <div className="animate-fadeIn max-w-[400px] mx-auto p-6 flex flex-col gap-4">
      {!showPassword ? (
        <>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            size="lg"
            className="w-full transition-all duration-300"
          />
          <Button
            onClick={handleNext}
            color="primary"
            fullWidth
            size="lg"
            className="transition-all duration-300"
          >
            Submit
          </Button>
        </>
      ) : (
        <>
          <Input
            label="Пароль"
            type="password"
            required
            fullWidth
            size="lg"
            className="w-full transition-all duration-300"
          />
          <Button
            onClick={handleRedirect}
            fullWidth
            size="lg"
            className="transition-all duration-300 bg-blue-500"
          >
            Login
          </Button>
        </>
      )}
    </div>
  );
}
