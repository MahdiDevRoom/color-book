import { usePanelStore } from '@/stores';
import css from './Main.module.css';


export default ({ children }) => {
  const isOpen = usePanelStore((s)=> s.isOpen);
  const className = isOpen ? `${css.main} active` : css.main;
  return (
    <div className={className}> {children} </div>
  )
}