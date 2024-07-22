import type { TelegramWebApps } from "telegram-webapps-types";

declare global {
  interface Window {
    Telegram: TelegramWebApps.SDK;
  }

  type ReactTagProps<T> = import("react").ComponentPropsWithRef<T>;
}
