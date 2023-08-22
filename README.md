# :zap: [Ysfbenali.com](https://ysfbenali.com/)

**next-portfolio** : My personal website, a basic portfolio for developers, built from scratch with Next.js.

## :sparkles: Features

- Support Light & Dark Theme via [`Styled-Components`](https://github.com/styled-components/styled-components).
- High Score on `Performance`, `a11y`, `Best Practices`, `SEO`, `PWA`:
  > [Lighthouse test](https://builder-dot-lighthouse-ci.appspot.com/report.1647794926218.html) <br />
  [Page speed test](https://pagespeed.web.dev/report?url=https%3A%2F%2Fwww.ysfbenali.com%2F) <br />
  [Pingdom test](https://tools.pingdom.com/#5fea0d93f4000000)

- Fully Responsive.
- PWA (desktop & mobile).
- A contact form protected by `Google Recaptcha` powered by `Formium`.
- Fetches Github projects with most stars.
- Easy to customize.
- One Click Production Serverless Deploy to [`Vercel`](https://vercel.com/home).
- Google analytics.
- Prettier, ESLint Integration.



## :pencil: Sections
> :heavy_check_mark: **Quick Into** 
>
> :heavy_check_mark: **About :**  *A summary about me and my skills.*
>
> :heavy_check_mark: **Popular Projects :** *Showcase my Open Source Projects with most stars on my Github.*
>
> :heavy_check_mark: **Contact Me** 
>
> :heavy_check_mark: **Social Media Links :** *Discord, Github, Linkedin, Twitter.*
## :rocket: Getting Started

1. Grab your Github token from [GitHub](https://github.com/settings/tokens/new)
2. Create an account at [Formium](https://formium.io/) and grab your form endpoint url
3. Grab a Google recaptcha V2 key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
4. Clone this repo
	```bash
	git clone https://github.com/ysfBenali/next-portfolio && cd next-portfolio
	```
5. Run `cp .env.development.local.template .env`
6. Run `yarn && yarn dev` 
	> Serve with hot reload at localhost:3000

## :construction_worker_man: Build With

- Next.js
- TypeScript
- Styled Components
- Formium
- Google Recaptcha

## :monocle_face: What's inside?
A quick look at the top-level files and directories :
```bash
├── node_modules
├── package.json
├── public
│   ├── assets				# Assets
│   │   ├── contact.svg			# Illustrations from (undraw.co)
│   │   ├── icons			# Icons
│   │   └── thumbnail			# Cover of your website when it's shared to social media
├── src
│   ├── app				# AppDir
│   │	├── api
│   │	│   └── contact                 # Route Handler for sending contact form data
│   │	├── error.tsx
│   │   ├── head.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components			# Components
│   │   ├── common
│   │   │   ├── ...			# Common components
│   │   │   ├── GlobalStyles.tsx	# Contains all your global styles
│   │   └── modules
│   ├──config
│   │   └── next-seo.config.ts	        # Default SEO related tags
│   ├── constants 			# Contains Global `BREAKPOINTS` and `Z_INDICES` constants
│   ├── generated
│   │	├── ...
│   │	└── graphql.d.ts 	        # Generated types from github graphql schema
│   ├── hooks				# Custom hooks
│   ├── pages
│   │   └── api			        # APIs
│   └── providers
│       └── ThemeProvider.tsx   	# Theme Provider
└── yarn.lock
```
## :pushpin: Todo

- [x] ~~Improuve **Performance**, **a11y**, **SEO**, **PWA**~~ .
- [ ] Add Blog Section .

## :pray: Credits

You can check out the articles below which were quite helpful in getting this project done.  	   	

- [CSS Variables for React Devs](https://www.joshwcomeau.com/css/css-variables-for-react-devs/)&ensp;_and_&ensp;[The Quest for the Perfect Dark Mode](https://www.joshwcomeau.com/react/dark-mode/)&ensp;&ndash;&ensp;**Josh W. Comeau** 


- [How To add dark mode easily with a custom React hook](https://smakosh.com/how-to-add-dark-mode-easily-with-a-custom-react-hook) &ensp;&ndash;&ensp;**Smakosh**

- [Image Component with Next.js](https://image-component.nextjs.gallery/)&ensp;&ndash;&ensp;**Nextjs**

- [Create a PWA With Next.js](https://blog.avneesh.tech/how-to-create-a-pwa-with-nextjs)&ensp;&ndash;&ensp;**Avneesh Agarwal**&ensp;_and_&ensp;**James Q Quick**

- [Managing your SEO easier in Next.js projects](https://github.com/garmeeh/next-seo)&ensp;&ndash;&ensp;**Gary Meehan**
