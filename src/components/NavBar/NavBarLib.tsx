import { Link } from '../../types/linkType';

export const useRenderLinks = (links: Link[]): JSX.Element[] => {
  return links.map((link) => (
    <a
      key={link.id}
      href={link.href}
      className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
    >
      {link.text}
    </a>
  ));
};
