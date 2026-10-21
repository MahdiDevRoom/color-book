import { Menu as MenuIcon} from 'reicon-react';
import { Text } from '@/components';
import { usePanelStore, useTitleStore } from '@/stores';
import css from './Appbar.module.css';

export default ()=> {
  const open = usePanelStore((s)=> s.open);
  const title = useTitleStore((s)=> s.title);

  return (
    <div className={css.appbar}>
      <div className={css.fg}>
        <div className={css.title}>
          <Text.title> {title} </Text.title>
        </div>
        <div className={css.end}>
          <button onClick={open}> <MenuIcon size={28}/> </button>
        </div>
      </div>
    </div>
  )
}