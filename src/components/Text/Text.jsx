import { useLangStore } from '@/stores';
import { String } from '@/langs';
import css from './Text.module.css';

const Text = ({
  as: Tag = 'span',
  label, variant, children,
  className = '', ...props
}) => {
  const lang = useLangStore((s)=> s.lang);
  const result = label === undefined ? children : String(lang, label, '[!]');
  const cName = `${variant == undefined ? '' : css[variant]} ${className}`;
  return (
    <Tag className={cName} {...props}> {result} </Tag>
  )
}

Text.displayLarge  = ({ children, ...props }) => <Text variant='display-large'  {...props}>{children}</Text>;
Text.display       = ({ children, ...props }) => <Text variant='display'        {...props}>{children}</Text>;
Text.displaySmall  = ({ children, ...props }) => <Text variant='display-small'  {...props}>{children}</Text>;
Text.headlineLarge = ({ children, ...props }) => <Text variant='headline-large' {...props}>{children}</Text>;
Text.headline      = ({ children, ...props }) => <Text variant='headline'       {...props}>{children}</Text>;
Text.headlineSmall = ({ children, ...props }) => <Text variant='headline-small' {...props}>{children}</Text>;
Text.titleLarge    = ({ children, ...props }) => <Text variant='title-large'    {...props}>{children}</Text>;
Text.title         = ({ children, ...props }) => <Text variant='title'          {...props}>{children}</Text>;
Text.titleSmall    = ({ children, ...props }) => <Text variant='title-small'    {...props}>{children}</Text>;
Text.bodyLarge     = ({ children, ...props }) => <Text variant='body-large'     {...props}>{children}</Text>;
Text.body          = ({ children, ...props }) => <Text variant='body'           {...props}>{children}</Text>;
Text.bodySmall     = ({ children, ...props }) => <Text variant='body-small'     {...props}>{children}</Text>;
Text.labelLarge    = ({ children, ...props }) => <Text variant='label-large'    {...props}>{children}</Text>;
Text.label         = ({ children, ...props }) => <Text variant='label'          {...props}>{children}</Text>;
Text.labelSmall    = ({ children, ...props }) => <Text variant='label-small'    {...props}>{children}</Text>;

export default Text;