type navigationLinkType = 'default' | 'dropdownMenu';
type navigationType = 'internal' | 'external';

export interface INavigationLink {
    name: string;
    type?: navigationLinkType;
    navigationType?: navigationType;
    href?: string;
    alt?: string;
    menuLinks?: INavigationLink[];
    customClass?: string;
}
