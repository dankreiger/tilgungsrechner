import { SettingsMenu, SettingsMenuItem } from '@immo/shared/ui';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

export const useLangSettings = () => {
  const t = useTranslations('hooks.useLangSettings');
  const { asPath, locale, locales, pathname, push, query } = useRouter();

  const handleClick = useCallback(
    (lng) => () =>
      push({ pathname, query }, asPath, {
        locale: lng,
      }),
    [asPath, pathname, push, query]
  );

  const menu = useMemo(() => {
    const items = locales.map<SettingsMenuItem>((current) => ({
      text: current,
      onClick: handleClick(current),
    }));

    return (
      <SettingsMenu
        activeItem={locale}
        tooltipTitle={t('tooltipTitle')}
        items={items}
        avatarProps={{
          src: `flags/${locale}.webp`,
          alt: locale,
        }}
      />
    );
  }, [locales, t, locale, handleClick]);

  return {
    menu,
  };
};
