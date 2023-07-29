import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import React from 'react';

export default function Config({ blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.headerMenu.map((item) => {
        return <StoryblokComponent blok={item} key={item._uid} />;
      })}
    </div>
  );
}
