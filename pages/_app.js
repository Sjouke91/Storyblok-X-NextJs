import { storyblokInit, apiPlugin } from '@storyblok/react';
import '../theme/globals.scss';

storyblokInit({
  accessToken: 'spuGMQpDrdclCtrXw31ytgtt',
  // previewToken: 'spuGMQpDrdclCtrXw31ytgtt',
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
});

const MyApp = ({ Component, pageProps, auth }) => {
  return <Component {...pageProps} />;
};
export default MyApp;
