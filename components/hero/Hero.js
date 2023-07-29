import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

export default function Hero({ blok }) {
  const { title, subtitle, image, button } = blok;
  console.log(button);
  return (
    <section
      {...storyblokEditable(blok)}
      className='c-hero__outer-wrapper outer-wrapper background primary'
    >
      <div className='c-hero__inner-wrapper inner-wrapper'>
        <div className='c-hero__text-container'>
          <h6 className='c-hero__subtitle subtitle'>{title}</h6>
          <h1 className='c-hero__title'>{title}</h1>
          {button?.length
            ? button.map((nestedBlok) => (
                <StoryblokComponent
                  blok={nestedBlok}
                  key={nestedBlok._uid}
                  className='c-hero__button'
                />
              ))
            : null}
        </div>
        <div className='c-hero__image-container'>
          <Image
            className='c-hero__image image'
            width='500'
            height='500'
            src={image.filename}
            alt={image.alt ? image.alt : 'hero image'}
          />
        </div>
      </div>
    </section>
  );
}
