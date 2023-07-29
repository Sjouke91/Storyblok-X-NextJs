import { render } from 'storyblok-rich-text-react-renderer';

export function useRichText(bodyText) {
  return render(bodyText);
}
