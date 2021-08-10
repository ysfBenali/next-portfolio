import React from 'react';
import { NextSeo } from 'next-seo';

const url =
  process.env.NODE_ENV !== 'development'
    ? process.env.NEXT_PUBLIC_PORTFOLIO_URL
    : 'http://localhost:3000';

const SEO = ({
  location = url,
  title = 'Youssef BenAli | Hello world !',
  description = "I'm Youssef BenAli, a full stack developer, super curious and spends a lot of time building software.",
}) => (
  <NextSeo
    title={title}
    description={description}
    additionalMetaTags={[
      {
        name: 'image',
        content: `${url}/assets/thumbnail/thumbnail.png`,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:url',
        content: `${url}${location}`,
      },
      {
        property: 'og:image',
        content: `${url}/assets/thumbnail/thumbnail.png`,
      },
      {
        name: 'twitter:url',
        content: `${url}${location}`,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image:src',
        content: `${url}/assets/thumbnail/thumbnail.png`,
      },
      {
        name: 'twitter:image',
        content: `${url}/assets/thumbnail/thumbnail.png`,
      },
    ]}
  />
);

export default SEO;
