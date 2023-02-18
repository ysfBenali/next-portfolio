import { NextSeo } from 'next-seo';
import NEXT_SEO_DEFAULT from '../config/next-seo.config';

const Head = () => {
  return <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />;
};

export default Head;
