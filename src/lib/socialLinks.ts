export type SocialPlatform = "instagram" | "linkedin" | "x";

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ia.hono/",
    platform: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-honorato-27ba0933b/",
    platform: "linkedin",
  },
  {
    label: "X",
    href: "https://x.com/DanielHonorat06",
    platform: "x",
  },
] as const satisfies ReadonlyArray<{
  label: string;
  href: string;
  platform: SocialPlatform;
}>;
