export {};

type GoogleCredentialResponse = {
  credential?: string;
};

type GoogleIdConfig = {
  client_id: string;
  callback: (response: GoogleCredentialResponse) => void;
  auto_select?: boolean;
  ux_mode?: "popup" | "redirect";
};

type GoogleButtonOptions = {
  theme?: "outline" | "filled_blue" | "filled_black";
  size?: "large" | "medium" | "small";
  text?: "signin_with" | "signup_with" | "continue_with" | "signin";
  shape?: "rectangular" | "pill" | "circle" | "square";
  locale?: string;
  width?: number;
};

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: GoogleIdConfig) => void;
          renderButton: (
            parent: HTMLElement,
            options: GoogleButtonOptions,
          ) => void;
          disableAutoSelect: () => void;
        };
      };
    };
  }
}
