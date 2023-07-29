import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

export default function HeaderMenu({ blok }) {
  return (
    <nav
      {...storyblokEditable(blok)}
      className='c-header-menu__outer-wrapper outer-wrapper background primary'
    >
      <div className='c-header-menu__inner-wrapper inner-wrapper'>
        <Image
          src={blok.logo.filename}
          height='100'
          width='200'
          alt={blok.logo.alt}
        />
        <ul className='c-header-menu__menu-container'>
          {blok.menuLink.map((nestedBlok) => {
            return (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
