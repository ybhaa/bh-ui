<template>
  <div :class="ns.b('group')">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import './style/index.scss'
import { useNamespace } from '../hooks/use-namespace'
import { nextTick, provide, reactive, toRefs } from 'vue';
import { useRadio, radioEmits } from './useRadio'
import { radioKey } from './constant'
export type GapSize = string | number;
type RadioGroupProps = {
  modelValue?: number | string | boolean;
  size?: GapSize;
  type?: 'radio' | 'button';
  solid?: boolean;
  disabled?: boolean;
};
defineOptions({ name: 'b-radio-group' })
const ns = useNamespace('radio')
const props = withDefaults(defineProps<RadioGroupProps>(), {
  direction: 'horizontal',
  type: 'radio',
  size: 'l',
  solid: false,
})
const emits = defineEmits(radioEmits)
const changeEvent = (value: RadioGroupProps['modelValue']) => {
  emits('update:modelValue', value)
  nextTick(() => emits('change', value))
}
provide(
radioKey,
  reactive({
    ...toRefs(props),
    changeEvent,
  })
)
</script>
<style lang="scss" scoped>
</style>