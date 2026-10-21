import { useLangStore } from '@/stores';
import { Text } from '@/components';
import css from './LangSwitch.module.css';

const tabs = [
  { label: 'En', action: 'en'},
  { label: 'Ko', action: 'ko'},
  { label: 'Fa', action: 'fa'},
]

export default () => {
  const lang = useLangStore((s) => s.lang);
  const setLang = useLangStore((s) => s.setLang);

  return (
    <div className={css['lang-switch']}>
      {tabs.map(({ label, action }) => (
        <span
          key={label}
          onClick={() => setLang(action)}
          className={lang == action ? css.active : ''}>
          <Text.label> {label} </Text.label>
        </span>
      ))}
    </div>
  )
}