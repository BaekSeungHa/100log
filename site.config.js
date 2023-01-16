const CONFIG = {
  // profile setting (required)
  profile: {
    name: "baekseungha",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "행복하게 살자",
    email: "qortmdgk12@naver.com",
    linkedin: "",
    github: "baekseungha",
    instagram: "000seungha",
  },
  projects: [
    {
      name: `MenToMen`,
      href: "https://github.com/B1ND-7th/MenToMen-Web",
    },
    {
      name: `MenToMen-V2`,
      href: "https://github.com/B1ND-7th/MenToMen_Web_V2",
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
