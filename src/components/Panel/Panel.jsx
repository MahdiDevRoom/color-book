import { NavLink } from 'react-router';
import { usePanelStore } from '@/stores';
import { LangSwitch, Text, ThemeSwitch } from '@/components';
import css from './Panel.module.css';

import {
  X as IconClose,
  Home4 as IconHome,
  TestTube as IconLab,
  Book as IconDocs,
  UserHeart as IconAbout,
} from 'reicon-react';

const views = [
  { to: '/', Icon: IconHome, label: 'home-title', end: true },
  { to: '/lab', Icon: IconLab, label: 'lab-title' },
  { to: '/docs', Icon: IconDocs, label: 'docs-title' },
  { to: '/about', Icon: IconAbout, label: 'about-title' },
]

export default () => {
  const isOpen = usePanelStore((s) => s.isOpen);
  const close = usePanelStore((s) => s.close);
  const className = isOpen ? `${css.panel} ${css.active}` : css.panel;

  if (isOpen) window.onkeydown = (e) => { if (e.code == 'Escape') close() };

  const Nav = ({ onClick })=> {
    return views.map(({ to, label, end, Icon }) => (
      <NavLink
        key={to}
        to={to}
        end={end}
        onClick={onClick}
        tabIndex={isOpen ? 0 : -1}
        className={({ isActive }) => isActive ? `${css.active} ${css.nav}` : css.nav}>
        {({ isActive }) => (
          <>
            <div className={css.icon}> <Icon weight={isActive ? 'Filled' : 'Outline'} /> </div>
            <div className={css.label}> <Text.bodyLarge label={label} /> </div>
          </>
        )}
      </NavLink>
    ))
  }

  return (
    <div className={className}>
      <div className={css.header}>
        <Text.title as="div" label="app-title" className={css.title} />
        <div className={css.btn} onClick={close}> <IconClose size={28} /> </div>
      </div>
      <div className={css.body}>
        <Nav onClick={close} />
      </div>
      <div className={css.footer}>
        <div>
          <Text.labelLarge label="theme" />
          <ThemeSwitch />
        </div>
        <div>
          <Text.labelLarge label="lang" />
          <LangSwitch />
        </div>
      </div>
    </div>
  )
}