import { useState } from "react";
import { Sun, Moon, Eye, EyeOff } from "lucide-react";

export default function App() {
  const [dark, setDark] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen w-full bg-background flex items-center justify-center px-4 transition-colors duration-300 relative">

        {/* Theme toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-foreground shadow-sm hover:opacity-80 transition-opacity"
          aria-label="Alternar tema"
        >
          {dark ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        {/* Card */}
        <div className="w-full max-w-[370px] bg-card rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center gap-0">

          {/* Logo */}
          <div className="relative flex items-center justify-center mb-6">
            <span
              className="absolute -top-1 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full"
              style={{ backgroundColor: "#F5C84A" }}
            />
            <span
              className="relative z-10 font-extrabold text-3xl tracking-tight select-none"
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "#E84E1E",
              }}
            >
              delivery
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-xl font-bold text-card-foreground text-center mb-1"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Que bom te ver por aqui!
          </h1>
          <p
            className="text-sm text-muted-foreground text-center mb-6"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Faça login para gerenciar seus pedidos.
          </p>

          {/* Email input */}
          <div className="w-full mb-3">
            <input
              type="text"
              placeholder="E-mail ou número de celular"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-card-foreground placeholder:text-muted-foreground text-sm outline-none focus:ring-2 transition-all"
              style={{
                fontFamily: "'Nunito', sans-serif",
                focusRingColor: "#E84E1E",
              }}
            />
          </div>

          {/* Password input */}
          <div className="w-full relative mb-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-card-foreground placeholder:text-muted-foreground text-sm outline-none focus:ring-2 transition-all pr-10"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-card-foreground transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* Forgot password */}
          <div className="w-full flex justify-end mb-5">
            <button
              className="text-xs text-muted-foreground hover:text-card-foreground transition-colors"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Esqueceu sua senha?
            </button>
          </div>

          {/* Entrar button */}
          <button
            className="w-full py-3 rounded-lg text-white font-bold text-sm mb-5 transition-opacity hover:opacity-90 active:opacity-75"
            style={{
              backgroundColor: "#E84E1E",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Entrar
          </button>

          {/* Divider */}
          <div className="w-full flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-border" />
            <span
              className="text-xs text-muted-foreground whitespace-nowrap"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              ou continue com
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Google button */}
          <button
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-border bg-card text-card-foreground text-sm font-semibold mb-3 hover:bg-muted transition-colors"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            <GoogleIcon />
            Entrar com o Google
          </button>

          {/* Apple button */}
          <button
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-border bg-card text-card-foreground text-sm font-semibold mb-6 hover:bg-muted transition-colors"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            <AppleIcon dark={dark} />
            Entrar com a Apple
          </button>

          {/* Sign up link */}
          <p
            className="text-sm text-muted-foreground"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Novo por aqui?{" "}
            <button
              className="font-bold hover:underline"
              style={{ color: "#E84E1E" }}
            >
              Criar conta
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z"
        fill="#EA4335"
      />
    </svg>
  );
}

function AppleIcon({ dark }: { dark: boolean }) {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 814 1000"
      fill={dark ? "#ffffff" : "#000000"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.5-57.9-155.5-127.4C46.2 790 0 698.4 0 610.1c0-154.4 100.2-236.4 198.9-236.4 52.6 0 96.5 34.6 129.4 34.6 31.8 0 81.6-36.6 143.8-36.6 22.9 0 108.2 2 159.6 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  );
}
