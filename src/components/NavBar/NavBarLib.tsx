import { Link } from '../../types/linkType';

export const useRenderLinks = (links: Link[]): JSX.Element[] => {
  return links.map((link) => (
    <a
      key={link.id}
      href={link.href}
      className="nav-link"
      onClick={(e) => {
        e.preventDefault();
        const target = document.querySelector(link.href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      {link.text}
    </a>
  ));
};
