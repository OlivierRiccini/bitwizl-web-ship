import { INavigationLink } from 'src/app/models/navigation-link';

export const NAVIGATION_LINKS: INavigationLink[] = [
  {
    name: 'Shipper',
    href: 'shipper',
    alt: 'shipper',
    navigationType: 'internal'
  },
  {
    name: 'Client',
    href: 'client',
    alt: 'client',
    navigationType: 'internal'
  },
  {
    name: 'Courier',
    href: 'courier',
    alt: 'Courier',
    navigationType: 'internal'
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
