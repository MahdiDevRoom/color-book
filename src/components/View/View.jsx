import { usePanelStore } from '@/stores';
import css from './View.module.css';

export default ({ children }) => {
  const isOpen = usePanelStore((s) => s.isOpen);
  const close = usePanelStore((s) => s.close);

  const className = isOpen ? `${css.view} ${css.push}` : css.view;
  const handleClick = () => { if (isOpen) close() };

  return (
    <div
      className={className}
      onClick={handleClick}>
      {children}
    </div>
  )
}