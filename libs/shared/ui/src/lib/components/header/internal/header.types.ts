import type { ComponentProps, ReactNode } from 'react';
import { SettingsMenu } from '../../settings-menu';

type Settings = ComponentProps<typeof SettingsMenu> & {
  key: string;
};
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
