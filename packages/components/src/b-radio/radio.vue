<template>
  <label
    :class="[
      ns.b(),
      ns.is('disabled', disabled),
      ns.is('bordered', border),
      ns.is('checked', modelValue === value),
    ]"
  >
    <span
      :class="[
        ns.e('input'),
        ns.is('disabled', disabled),
        ns.is('checked', modelValue === value),
      ]"
    >
      <input
        ref="radioRef"
        v-model="modelValue"
        :class="ns.e('original')"
        :value="value"
        :disabled="disabled"
        type="radio"
        @change="handleChange"
        @click.stop
      />
      <span :class="ns.e('inner')" />
    </span>
    <span :class="ns.e('label')" @keydown.stop>
      <slot>
        <!-- {{ label }} -->
      </slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import './style/index.scss'
import { CircleClose } from '@element-plus/icons-vue'
import BIcon from '../b-icon/icon.vue'
import { useNamespace } from '../hooks/use-namespace'
import { useRadio ,radioEmits} from './useRadio'
import type {RadioEmits,RadioProps} from './useRadio'
import { computed, nextTick } from 'vue'
defineOptions({ name: 'b-radio' })
const ns = useNamespace('radio')
const emits = defineEmits(radioEmits)
const props = withDefaults(defineProps<RadioProps>(), {
  solid: false,
  type: 'radio',
  size: 'l',
})
const { modelValue, disabled, type, size, } = useRadio(props, emits)

// const isChecked = computed<boolean>(() => modelValue.value === props.value)
const handleChange = () => {
  nextTick(() => emits('change', modelValue.value))
}
</script>
<style lang="scss" scoped>
</style>