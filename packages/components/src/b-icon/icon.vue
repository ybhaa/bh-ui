<template>
  <i :class="ns.b()" :style="style" v-bind="$attrs">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import "./style/index.scss";
import { useNamespace } from "../hooks/use-namespace";
import { computed, CSSProperties } from "vue";

defineOptions({ name: "b-icon" });
const props = defineProps({
  size: {
    type: Number, String,
  },
  color: {
    type: String,
  }
})
const ns = useNamespace("icon");

const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}

  return {
    fontSize: size,
    '--color': color,
  }
})
</script>
<style lang="scss" scoped>
</style>