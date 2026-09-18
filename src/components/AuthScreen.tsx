"use client";

import { FormEvent, useState } from "react";
import { login, register } from "@/lib/store";

type Props = {
  onAuthed: (username: string) => void;
};

export function AuthScreen({ onAuthed }: Props) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setBusy(true);
    try {
      const name =
        mode === "login"
          ? await login(username, password)
          : await register(username, password);
      onAuthed(name);
    } catch (err) {
      setError(err instanceof Error ? err.message : "發生錯誤");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-full w-full max-w-md flex-col justify-center px-5 py-12">
      <p className="text-sm tracking-widest text-orange-300">烏梅劇場</p>
      <h1 className="mt-2 text-3xl font-bold text-white">公演座位紀錄</h1>
      <p className="mt-3 text-sm leading-6 text-zinc-400">
        每人一個帳戶，點座位記下自己坐過哪裡。資料存在這台瀏覽器，部署在
        GitHub Pages 上不需要伺服器。
      </p>

      <div className="mt-8 flex rounded-full bg-zinc-800 p-1">
        <button
          className={`flex-1 rounded-full py-2 text-sm ${
            mode === "login" ? "bg-orange-500 text-white" : "text-zinc-300"
          }`}
          onClick={() => setMode("login")}
          type="button"
        >
          登入
        </button>
        <button
          className={`flex-1 rounded-full py-2 text-sm ${
            mode === "register" ? "bg-orange-500 text-white" : "text-zinc-300"
          }`}
          onClick={() => setMode("register")}
          type="button"
        >
          註冊
        </button>
      </div>

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <label className="block text-sm text-zinc-300">
          帳號
          <input
            className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none focus:border-orange-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </label>
        <label className="block text-sm text-zinc-300">
          密碼
          <input
            className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none focus:border-orange-400"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            required
          />
        </label>
        {error ? <p className="text-sm text-rose-300">{error}</p> : null}
        <button
          className="w-full rounded-xl bg-orange-500 py-2.5 font-semibold text-white disabled:opacity-60"
          disabled={busy}
          type="submit"
        >
          {busy ? "處理中…" : mode === "login" ? "登入" : "建立帳戶"}
        </button>
      </form>
    </main>
  );
}
