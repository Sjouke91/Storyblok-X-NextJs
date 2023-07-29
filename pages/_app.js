import { storyblokInit, apiPlugin } from '@storyblok/react';
import Hero from '../components/hero/Hero';
import Paragraph from '../components/paragraph/Paragraph';
import Page from '../components/page/Page';
import ListItem from '@/components/list-item-block/ListItem';
import ListItemBlock from '@/components/list-item-block/ListItemBlock';
import Config from '@/components/config/Config';
import Layout from '@/components/Layout';
import HeaderMenu from '@/components/header-menu/HeaderMenu';
import MenuLink from '@/components/header-menu/MenuLink';
import Button from '@/components/button/Button';

import '../theme/main.scss';

const components = {
  page: Page,
  layout: Layout,
  config: Config,
  headerMenu: HeaderMenu,
  hero: Hero,
  paragraph: Paragraph,
  menuLink: MenuLink,
  listItemBlock: ListItemBlock,
  listItem: ListItem,
  button: Button,
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
  return (
    <Layout story={pageProps.config}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
