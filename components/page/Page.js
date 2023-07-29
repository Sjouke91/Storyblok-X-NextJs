import Image from 'next/image';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import Head from 'next/head';

export default function Page({ blok }) {
  const { pageBlocks, pageTitle } = blok;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main {...storyblokEditable(blok)} className='c-home-page'>
        {pageBlocks.length
          ? pageBlocks.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))
          : null}
      </main>
    </>
  );
}
