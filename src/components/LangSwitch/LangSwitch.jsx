import { useLangStore, usePanelStore } from '@/stores';
import { Text } from '@/components';
import css from './LangSwitch.module.css';

const tabs = [
  { label: 'En', action: 'en'},
  { label: 'Ko', action: 'ko'},
  { label: 'Fa', action: 'fa'},
]

export default () => {
  const isOpen = usePanelStore((s) => s.isOpen);
  const lang = useLangStore((s) => s.lang);
  const setLang = useLangStore((s) => s.setLang);

  return (
    <div className={css['lang-switch']}>
      {tabs.map(({ label, action }) => (
        <button
          key={label}
          onClick={() => setLang(action)}
          tabIndex={isOpen ? 0 : -1}
          className={lang == action ? css.active : ''}>
          <Text.label> {label} </Text.label>
        </button>
      ))}
    </div>
  )
}