import type { InjectionKey } from 'vue'

type RadioGroupProps = {
  modelValue?: number | string | boolean;
  size?: string | number;
  type?: 'radio' | 'button';
  solid?: boolean;
  disabled?: boolean;
};

interface RadioGroupContext extends RadioGroupProps {
  changeEvent : (val: RadioGroupProps['modelValue']) => void;
}

export const radioKey: InjectionKey<RadioGroupContext> =Symbol('radio')