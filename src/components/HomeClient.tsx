"use client";

import { useEffect, useState } from "react";
import { getSessionUser } from "@/lib/store";
import { AuthScreen } from "./AuthScreen";
import { SeatApp } from "./SeatApp";

export function HomeClient() {
  const [username, setUsername] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUsername(getSessionUser());
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <main className="flex min-h-full items-center justify-center text-zinc-400">
        載入中…
      </main>
    );
  }

  if (!username) {
    return <AuthScreen onAuthed={setUsername} />;
  }

  return <SeatApp username={username} onLogout={() => setUsername(null)} />;
}
