export const APP_STATIC_LINKS = {
  home: "/",
  about: "/about",
  projects: "/projects",
} as const;

export const NAV_LINKS = [
  {
    href: APP_STATIC_LINKS.home,
    label: "Home",
  },
  {
    href: APP_STATIC_LINKS.about,
    label: "About",
  },
  {
    href: APP_STATIC_LINKS.projects,
    label: "Projects",
  },
];

export const CONTACT_LINKS = {
  github: "https://github.com/christian-anunciado",
  linkedin: "https://www.linkedin.com/in/christiananunciado/",
  email: "christianjay.anunciado@gmail.com",
} as const;
