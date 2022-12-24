import type { ReactNode } from 'react';

export interface HeaderProps {
  brandText?: string | null;
  logo?: ReactNode;
  /**
   * List of pages to display in the header
   */
  pages?: ReactNode[];
  /**
   * Avatar menu settings list dropdown
   */
  headerRight?: ReactNode;
}
