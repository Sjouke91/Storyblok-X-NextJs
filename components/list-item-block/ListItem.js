import { storyblokEditable } from '@storyblok/react';

export default function ListItem({ blok }) {
  const { title } = blok;

  return (
    <div {...storyblokEditable(blok)} className='c-list-item-block__list-item'>
      <h4>{title}</h4>
    </div>
  );
}
