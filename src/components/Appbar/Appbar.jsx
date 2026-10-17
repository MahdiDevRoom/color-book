import { Menu as MenuIcon} from 'reicon-react';
import css from './Appbar.module.css';

export default ()=> {
  return (
    <div className={css.appbar}>
      <div className={css.fg}>
        <div className={css.start}>
          <img src='logos/fg/colorbook.svg'/>
        </div>
        <div className={css.title}>
          Color Book
        </div>
        <div className={css.end}>
          <button> <MenuIcon/> </button>
        </div>
      </div>
    </div>
  )
}