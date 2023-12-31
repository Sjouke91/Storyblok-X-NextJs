import { useButtonSelector } from '@/utils/useButtonSelector';
import { useRichText } from '@/utils/useRichText';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

export default function Paragraph({ blok }) {
  const {
    title,
    subtitle,
    bodyText,
    image,
    imagePosition,
    background,
    button,
  } = blok;
  const parsedBodyText = useRichText(bodyText);

  return (
    <section
      {...storyblokEditable(blok)}
      className={`c-paragraph__outer-wrapper outer-wrapper ${background}`}
    >
      <div
        className={`c-paragraph__inner-wrapper  inner-wrapper ${imagePosition}`}
      >
        <div
          className={`c-paragraph__text-container text-container ${
            imagePosition === 'right' ? 'left' : 'right'
          }`}
        >
          {subtitle ? (
            <h6 className='c-paragraph__subtitle subtitle'>{subtitle}</h6>
          ) : null}
          {title ? <h2 className='c-paragraph__title'>{title}</h2> : null}
          {parsedBodyText ? (
            <div className='c-paragraph__body-text'>{parsedBodyText} </div>
          ) : null}
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
        {image ? (
          <div
            className={`c-paragraph__image-container image-container ${imagePosition}`}
          >
            <Image
              className='c-paragraph__image image'
              width='500'
              height='500'
              src={image.filename}
              alt={image.alt ? image.alt : 'paragraph image'}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
