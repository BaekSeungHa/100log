const CONFIG = {
  // profile setting (required)
  profile: {
    name: "BaekSeungHa",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Frontend Developer",
    bio: "건강하고 행복하게",
    email: "qortmdgk12@naver.com",
    linkedin: "",
    github: "baekseungha",
    instagram: "000seungha",
  },
  projects: [
    {
      name: `B1ND-Design-System`,
      href: "https://github.com/team-b1nd/b1nd-Design-System/",
    },
    {
      name: `Dgit(Dgsw Github Ranking)`,
      href: "https://github.com/Team-B1ND/DGIT_WEB_V3",
    },
    {
      name: "BambooForest",
      href: "https://github.com/Team-DGSW-BambooForest/Bamboo-Frontend",
    },
  ],

  // blog setting (required)
  blog: {
    title: "seungha's blog",
    description: "welcome to morethan-log!",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
