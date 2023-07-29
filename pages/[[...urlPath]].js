import React, { Fragment } from 'react';
import { StoryblokComponent, getStoryblokApi } from '@storyblok/react';
import Page from '@/components/page/Page';
import Head from 'next/head';
import Link from 'next/link';

export default function Home({ story, config }) {
  return (
    <>
      <StoryblokComponent blok={story.content} />
    </>
  );
}

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
  let { data: pageData } = await storyblokApi.get(
    `cdn/stories/${slug}`,
    sbParams
  );

  const { data: configData } = await storyblokApi.get('cdn/stories/config', {
    version: 'draft',
    resolve_links: 'url',
  });

  return {
    props: {
      story: pageData ? pageData.story : false,
      config: configData ? configData.story : false,
      key: pageData ? pageData.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
