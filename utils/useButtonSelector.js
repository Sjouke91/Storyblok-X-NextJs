import { render } from 'storyblok-rich-text-react-renderer';

export function useButtonSelector({ buttonData, className }) {
  if (!buttonData) return null;
  return (
    <a className={className} href={buttonData.linkedpage.cached_url}>
      {buttonData.buttonText}
    </a>
  );
}
