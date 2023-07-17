import React, { Fragment } from 'react';
import { getStoryblokApi } from '@storyblok/react';
import HeroSection from '@/components/HeroSection';
import TextSection from '@/components/TextSection';

function Home(props) {
  const components = props.story.content.body;
  console.log(props);
  return (
    <div className='c-home-page'>
      {components?.length
        ? components.map((c) => {
            switch (c.component) {
              case 'hero-section':
                return (
                  <Fragment key={c._uid}>
                    <HeroSection data={c} />{' '}
                  </Fragment>
                );
                break;

              case 'text-section':
                return (
                  <Fragment key={c._uid}>
                    <TextSection data={c} />
                  </Fragment>
                );
                break;

              default:
                return (
                  <Fragment key={c._uid}>
                    <h1>{c.component}</h1>
                  </Fragment>
                );
                break;
            }
          })
        : null}
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
  console.log(params);
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
