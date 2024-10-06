<template>
  <div :class="inputStyle" style="width: 240px">
    <div :class="wrapperKls">
      <input
        :value="modelValue"
        @input="changeInputVal"
        type="text"
        :class="innerKls"
        :placeholder="placeholder"
        :disabled="disabled"
        v-bind="attrs"
      />
      <span :class="ns.e('suffix')">
        <span :class="ns.e('suffix-inner')">
          <b-icon :size="12" :class="[ns.e('icon'), ns.e('clear')]" @click="clearInput">
            <component :is="CircleClose" v-if="clearable"></component>
          </b-icon>
        </span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import './style/index.scss'
import { CircleClose } from '@element-plus/icons-vue'
import BIcon from '../b-icon/icon.vue'
import { useNamespace } from '../hooks/use-namespace'
import { computed, useAttrs } from 'vue'
defineOptions({ name: 'b-input' })

type inputProps = {
  modelValue: string | number
  size: string
  disabled: boolean
  error: boolean
  clearable: boolean
  prefixIcon: string
  suffixIcon: string
  placeholder: string
  type: string
  maxlength: number
  showWordLimit: boolean
  autosize: boolean
  autocomplete: string
  form: string
  formaction: string
  formenctype: string
}
const ns = useNamespace('input')
const attrs = useAttrs()
const inputProps = withDefaults(defineProps<inputProps>(), {
  modelValue: '',
})
const inputEmits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const inputStyle = computed(() => {
  return [ns.b(), ns.is('disabled', inputProps.disabled), ns.m(inputProps.size)]
})
const wrapperKls = computed(() => [ns.e('wrapper')])
const innerKls = computed(() => [ns.e('inner')])
const changeInputVal = (e: Event) => {
  inputEmits('update:modelValue', (e.target as HTMLInputElement).value)
}
const clearInput = () => {
  inputEmits('update:modelValue', '')
}
</script>
<style lang="scss" scoped></style>
