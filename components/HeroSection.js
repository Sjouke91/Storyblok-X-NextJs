import React from 'react';

export default function HeroSection({ data }) {
  const {
    headline,
    subheadline,
    horizontal_alignment,
    image,
    background_image,
  } = data;
  return (
    <section
      className='outer-wrapper background primary'
      style={{ backgroundImage: `url(${background_image.filename})` }}
    >
      <div className='inner-wrapper'>
        <h1 className={`c-headline ${horizontal_alignment}`}>{headline}</h1>
        <h3 className={`c-subheadline ${horizontal_alignment}`}>
          {subheadline}
        </h3>
      </div>
    </section>
  );
}
