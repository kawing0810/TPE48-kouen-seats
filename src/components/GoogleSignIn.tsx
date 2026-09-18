"use client";

import { useEffect, useRef, useState } from "react";
import { GOOGLE_CLIENT_ID, loadGoogleIdentity, parseGoogleCredential } from "@/lib/google";
import { loginWithGoogle } from "@/lib/store";

type Props = {
  onAuthed: (username: string) => void;
  onError: (message: string) => void;
};

export function GoogleSignIn({ onAuthed, onError }: Props) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID) return;
    let cancelled = false;

    loadGoogleIdentity()
      .then(() => {
        if (cancelled || !buttonRef.current || !window.google) return;
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          auto_select: false,
          ux_mode: "popup",
          callback: (response) => {
            try {
              if (!response.credential) {
                throw new Error("沒有收到 Google 登入結果");
              }
              const profile = parseGoogleCredential(response.credential);
              onAuthed(loginWithGoogle(profile));
            } catch (err) {
              onError(err instanceof Error ? err.message : "Google 登入失敗");
            }
          },
        });
        window.google.accounts.id.renderButton(buttonRef.current, {
          theme: "filled_black",
          size: "large",
          text: "signin_with",
          shape: "pill",
          locale: "zh-TW",
          width: Math.max(
            240,
            Math.min(buttonRef.current.parentElement?.clientWidth || 280, 400),
          ),
        });
        setReady(true);
      })
      .catch((err) => {
        if (!cancelled) {
          onError(err instanceof Error ? err.message : "無法載入 Google 登入");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [onAuthed, onError]);

  if (!GOOGLE_CLIENT_ID) {
    return (
      <p className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-500">
        尚未設定 Google 登入。請在本機 `.env.local` 與 GitHub Actions
        變數加入 `NEXT_PUBLIC_GOOGLE_CLIENT_ID`。
      </p>
    );
  }

  return (
    <div className="flex min-h-11 w-full justify-center">
      <div ref={buttonRef} className={ready ? "w-full" : "h-11 w-full"} />
    </div>
  );
}
