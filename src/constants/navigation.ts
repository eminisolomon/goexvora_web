import {
  BoltIcon,
  CreditCardIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';

export interface NavItem {
  label: string;
  href?: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  items?: SubNavItem[];
}

export interface SubNavItem {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    isActive: true,
  },
  {
    label: 'Features',
    hasDropdown: true,
    items: [
      { label: 'Send Money', href: '/send-money', icon: BanknotesIcon },
      { label: 'Receive Money', href: '/receive-money', icon: BanknotesIcon },
      { label: 'One Card', href: '/one-card', icon: CreditCardIcon },
      { label: 'Bill Payment', href: '/bill-payment', icon: BoltIcon },
      { label: 'Gift Cards', href: '/gift-card', icon: CreditCardIcon },
      { label: 'Cashback', href: '/cashback', icon: BanknotesIcon },
    ],
  },
  {
    label: 'About',
    href: '/about-us',
  },
  {
    label: 'Contact',
    href: '/contact-us',
  },
];
