import React, { Fragment } from 'react';
import { StoryblokComponent, getStoryblokApi } from '@storyblok/react';
import Page from '@/components/Page';
import Head from 'next/head';

function Home({ story }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export default Home;

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        urlPath: [],
      },
    },
    {
      params: {
        urlPath: ['about-me'],
      },
    },
  ];
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(params) {
  // home is the default slug for the homepage in Storyblok
  let slug;
  if (!params.params.urlPath) {
    slug = 'home';
  } else {
    slug = params.params.urlPath?.join('/');
  }
  // load the draft version
  let sbParams = {
    version: 'draft', // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
