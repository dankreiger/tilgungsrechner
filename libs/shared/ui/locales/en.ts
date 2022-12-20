import type { de } from './de';

const translation: Record<keyof typeof de['translation'], string> = {
  account: 'Account',
  amountFinancial: 'Amount',
  brandText: 'Puppy',
  clicked: 'clicked',
  contact: 'Contact',
  logout: 'Log Out',
  pricing: 'Pricing',
  products: 'Products',
  profile: 'Profile',
};
export const en = { translation } as const;
