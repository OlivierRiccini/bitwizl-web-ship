import { INavigationLink } from 'src/app/models/navigation-link';
import { environment } from 'src/environments/environment';

export const NAVIGATION_LINKS: INavigationLink[] = [
  {
    name: 'Bitwizl Home',
    href: environment.homeAppUrl,
    alt: 'Bitwizl Home',
    navigationType: 'external'
  },
  {
    name: 'Guides',
    type: 'dropdownMenu',
    menuLinks: [
      {
        name: 'White Paper',
        href: '',
        alt: 'White Paper',
        navigationType: 'external'
      },
      {
        name: 'Get Started',
        href: 'guides/get-started',
        alt: 'Get Started',
        navigationType: 'internal'
      },
      {
        name: 'FAQs',
        href: 'guides/faq',
        alt: 'FAQs',
        navigationType: 'internal'
      }
    ]
  },
  {
    name: 'Login',
    href: 'auth',
    alt: 'Login',
    navigationType: 'internal',
    customClass: 'btn btn-medium btn-white'
  }
];
