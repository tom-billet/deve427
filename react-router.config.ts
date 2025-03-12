import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false, //Retirer le pré-render côté serveur pour pouvoir utiliser localStorage
} satisfies Config;
