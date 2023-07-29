import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import Link from 'next/link';

export default function MenuLink({ blok }) {
  return (
    <li
      {...storyblokEditable(blok)}
      className='c-header-menu__menu-link menu-link'
    >
      <Link href={blok.linkedPage.cached_url}>{blok.linkTitle}</Link>
    </li>
  );
}
