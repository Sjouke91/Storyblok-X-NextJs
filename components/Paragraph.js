import { useButtonSelector } from '@/utils/useButtonSelector';
import { useRichText } from '@/utils/useRichText';
import { storyblokEditable } from '@storyblok/react';
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
  const parsedButton = useButtonSelector({
    buttonData: button ? button[0] : null,
    className: `c-paragraph__button show-as-button ${
      button?.length ? button[0].type : null
    }`,
  });

  console.log({ blok });
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
          {parsedButton}
        </div>
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
      </div>
    </section>
  );
}
