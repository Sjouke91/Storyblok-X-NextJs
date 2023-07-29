import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';
import React from 'react';

export default function Button({ blok, className = '' }) {
  return (
    <Link
      {...storyblokEditable(blok)}
      className={`${className} ${blok.type} show-as-button`}
      href={blok.linkedpage.cached_url}
    >
      {blok.buttonText}
    </Link>
  );
}
