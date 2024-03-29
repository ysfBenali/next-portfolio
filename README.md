# :zap: [Ysfbenali.com](https://ysfbenali.com/)

**next-portfolio** : My personal website, a basic portfolio for developers, built from scratch with Next.js.

## :sparkles: Features

- Support Light & Dark Theme via [`Tailwindcss`](https://tailwindcss.com/).
- High Score on `Performance`, `A11y`, `Best Practices`, `SEO` and `PWA`:

  > [Lighthouse test](https://builder-dot-lighthouse-ci.appspot.com/report.1647794926218.html) <br /> > [Page speed test](https://pagespeed.web.dev/analysis/https-www-ysfbenali-com/8kusnhc228?form_factor=desktop) <br /> > [Pingdom test](https://tools.pingdom.com/#5fea0d93f4000000)

- Fully Responsive.
- PWA (desktop & mobile).
- A contact form protected by `Google Recaptcha` powered by `Formium`.
- Fetches Github projects with most stars using `Github GraphQL API`.
- Easy to customize.
- One Click Production Serverless Deploy to [`Vercel`](https://vercel.com/home).
- Google analytics.
- Prettier, ESLint, Husky and Lint-staged integration.

## :rocket: Getting Started

1. Grab your Github token from [GitHub](https://github.com/settings/tokens/new)
2. Create an account at [Formium](https://formium.io/) and grab your form endpoint url
3. Grab a Google recaptcha V2 key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
4. Create an account at [Cal](https://cal.com/) and grab your calendar id.
5. Clone this repo
   ```bash
   git clone https://github.com/ysfBenali/nex-portfolio && cd next-portfolio
   ```
6. Run `cp .env.development.local.template .env`
7. Run `nvm use` to use the correct node version defined in `.nvmrc`
8. Run `yarn && yarn dev`
   > Serve with hot reload at localhost:3000

## :construction_worker_man: Build With

- Next.js
- TypeScript
- Tailwindcss
- Formium
- Google Recaptcha

## :monocle_face: What's inside?

A quick look at the top-level files and directories :

```bash
├── .husky 				# Husky config (pre-commit hooks, ...)
├── node_modules
├── public
│   ├── assets				# Assets
│   │   ├── contact.svg			# Illustrations from (undraw.co)
│   │   ├── icons			# Icons
│   │   └── thumbnail			# Cover of your website when it's shared to social media
│   ├── fonts				# Self-hosted fonts with @next/font
├── src
│   ├── app				# AppDir
│   │	├── api
│   │	│   └── contact
│   │ 	│ 	└── route.ts		# Route Handler for sending contact form data
│   │	├── error.tsx
│   │   ├── head.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components			# Components
│   │   ├── common			# Common components
│   │   └── modules			# Modules components (About, Contact, Projects)
│   ├──config
│   │   └── next-seo.config.ts	        # Default SEO related tags
│   ├── generated
│   │	├── ...
│   │	└── graphql.d.ts 	        # Generated types from github graphql schema
│   ├── hooks				# Custom hooks
│   │	├── lib
│   │	│   └── utils.ts		# Utils functions
│   └── providers
│       └── ThemeProvider.tsx   	# Theme Provider
├── globals.css 			# Global styles (css variables, colors, classes, ...)
├── package.json
├── tailwind.config.js 			# Tailwind config
├── tsconfig.json 			# Typescript config
└── yarn.lock
```

## :pushpin: Todo

- [x] ~~Improuve **Performance**, **a11y**, **SEO**, **PWA**~~ .
- [ ] Add Blog Section .
