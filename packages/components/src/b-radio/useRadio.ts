import { computed, inject, SetupContext } from "vue";
import { radioKey } from "./constant";

  type RadioBaseProps = {
  size?: string;
  value: number | string | boolean;
  disabled?: boolean;
};
export  type RadioProps = RadioBaseProps & {
  modelValue?: number | string | boolean;
  name?: string;
  border?: boolean;
  type?: 'radio' | 'button';
  solid?: boolean;
};
export const radioEmits = {
  'update:modelValue': (val: RadioProps['modelValue']) => val,
  'change': (val: RadioProps['modelValue']) => val,
};
export type RadioEmits = typeof radioEmits;
export  const useRadio = (props:RadioProps, emits:SetupContext<RadioEmits>['emit'],) => {
  const radioProps = inject(radioKey, undefined);
  const isGroup = computed(() => !!radioProps);
  const modelValue = computed({
    get() {
      return isGroup.value ? radioProps!.modelValue : props.modelValue!;
    },
    set(val) {
      if (isGroup.value) {
        radioProps!.changeEvent(val);
      } else {
        emits && emits('update:modelValue', val);
      }
    }
  })
  const disabled = computed<RadioProps['disabled']>(
    () => radioProps?.disabled || props.disabled!,
  );
  return {
    modelValue,
    disabled: disabled.value,
    type: radioProps?.type ?? props.type,
    size: radioProps?.size ?? props.size,
    solid: radioProps?.solid ?? props.solid,
  };
}