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

export const ICONS = {
  Git: {
    href: "https://git-scm.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
    alt: "Git",
  },
  Java: {
    href: "https://www.oracle.com/java/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg",
    alt: "Java",
  },
  Python: {
    href: "https://www.python.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    alt: "Python",
  },
  TypeScript: {
    href: "https://www.typescriptlang.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
    alt: "TypeScript",
  },
  HTML5: {
    href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
    alt: "HTML5",
  },
  CSS3: {
    href: "https://www.w3.org/TR/CSS/#css",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
    alt: "CSS3",
  },
  React: {
    href: "https://reactjs.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
    alt: "React",
  },
  NextJs: {
    href: "https://nextjs.org/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg",
    alt: "NextJs",
  },
  Astro: {
    href: "https://astro.build/",
    src: "https://cdn.simpleicons.org/astro",
    alt: "Astro",
  },
  TailwindCSS: {
    href: "https://tailwindcss.com/",
    src: "https://cdn.simpleicons.org/tailwindcss",
    alt: "TailwindCSS",
  },
  ChakraUI: {
    href: "https://chakra-ui.com/",
    src: "https://cdn.simpleicons.org/chakraui",
    alt: "ChakraUI",
  },
  ShadCN: {
    href: "https://ui.shadcn.com/",
    src: "https://cdn.simpleicons.org/shadcnui/black/white",
    alt: "Shadcn UI",
  },
  NodeJS: {
    href: "https://nodejs.org/en/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
    alt: "NodeJS",
  },
  MySQL: {
    href: "https://www.mysql.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg",
    alt: "MySQL",
  },
  Firebase: {
    href: "https://firebase.google.com/",
    src: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg",
    alt: "Firebase",
  },
  OpenAi: {
    href: "https://platform.openai.com/docs/introduction",
    src: "https://cdn.simpleicons.org/openai",
    alt: "OpenAi",
  },
  MantineUI: {
    href: "https://mantine.dev/",
    src: "https://cdn.simpleicons.org/mantine",
    alt: "MantineUI",
  },
  Go: {
    href: "https://go.dev/",
    src: "https://cdn.simpleicons.org/go",
    alt: "Go",
  },
  PayloadCMS: {
    href: "https://payloadcms.com/",
    src: "https://cdn.simpleicons.org/payloadcms/white",
    alt: "PayloadCMS",
  },
  Strapi: {
    href: "https://strapi.io/",
    src: "https://cdn.simpleicons.org/strapi/",
    alt: "Strapi",
  },
  MaterialUI: {
    href: "https://mui.com/",
    src: "https://cdn.simpleicons.org/mui",
    alt: "MaterialUI",
  },
} as const;
