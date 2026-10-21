import { useThemeStore } from '@/stores';
import {
  Autobrightness as IconAuto,
  Moon3 as IconDark,
  Sun as IconLight,
} from 'reicon-react';

import css from './ThemeSwitch.module.css';

const tabs = [
  { label: 'light', Icon: IconLight },
  { label: 'auto', Icon: IconAuto },
  { label: 'dark', Icon: IconDark },
]

export default () => {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  return (
    <div className={css['theme-switch']}>
      {tabs.map(({ label, Icon }) => (
        <span
          key={label}
          onClick={() => setTheme(label)}
          className={theme == label ? css.active : ''}>
          <Icon
            size={24}
            weight={theme == label ? 'Filled' : 'Outline'} />
        </span>
      ))}
    </div>
  )
}