import Image from 'next/image';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

export default function Page({ blok }) {
  const components = blok.pageBlocks;
  console.log(components);
  return (
    <main {...storyblokEditable(blok)} className='c-home-page'>
      {components.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
