import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

export default function ListItemBlock({ blok }) {
  const { title, subtitle, background } = blok;
  const components = blok.listItem;
  return (
    <section
      {...storyblokEditable(blok)}
      className={`c-list-item-block__outer-wrapper outer-wrapper ${background}`}
    >
      <div className='c-list-item-block__inner-wrapper inner-wrapper'>
        <div className='c-list-item-block__text-container'>
          <h6 className='c-list-item-block__subtitle subtitle'>{subtitle}</h6>
          <h2 className='c-list-item-block__title'>{title}</h2>
        </div>
        <div className='c-list-item-block__list-item-container'>
          {components.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
