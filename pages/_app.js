import { storyblokInit, apiPlugin } from '@storyblok/react';
import Hero from '../components/Hero';
import Paragraph from '../components/Paragraph';
import Page from '../components/Page';
import ListItemBlock from '@/components/ListItemBlock';
import ListItem from '@/components/ListItem';
import '../theme/main.scss';

const components = {
  Hero: Hero,
  Paragraph: Paragraph,
  listItemBlock: ListItemBlock,
  listItem: ListItem,
  page: Page,
};

storyblokInit({
  accessToken: 'ckxSNwazcbNs3JE9WN54Qgtt',
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
  components,
});

const MyApp = ({ Component, pageProps, auth }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
