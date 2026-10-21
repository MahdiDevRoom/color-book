import { Outlet } from 'react-router';
import { useLang, useResponsive, useStatusbar, useTheme, useTitle } from '@/hooks';
import { Desktop, Laptop, Mobile, NotSupport } from '@/layouts';

const RESPONSIVE = {
  mobile: 300,
  laptop: 750,
  desktop: 1024,
}

const TITLES = {
    '/': 'app-title',
    '/lab': 'lab-title',
    '/docs': 'docs-title',
    '/about': 'about-title',
    '*': 'not-found-title',
  };

export default ()=> {
  const theme = useTheme();
  const phase = useResponsive(RESPONSIVE);
  
  useStatusbar(theme);
  useTitle(TITLES);
  useLang();

  switch (phase) {
    case 'notSupport': return <NotSupport/>;
    case 'mobile': return <Mobile> <Outlet/> </Mobile>;
    case 'laptop': return <Laptop> <Outlet/> </Laptop>;
    case 'desktop': return <Desktop> <Outlet/> </Desktop>;
    default: return null;
  }
}
