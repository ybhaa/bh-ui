<template>
  <button class="b-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import "./style/index.scss";
import { computed } from "vue";
import {useNamespace} from "../hooks/use-namespace";
defineOptions({ name: "b-button" });

type ButtonProps = {
  type?: string;
  size?: string;
  plain?: string;
  round?: string;
  disabled?: string;
  circle?: string;
  loading?: boolean;
  icon?: string;
};
const buttonProps = defineProps<ButtonProps>();
const ns = useNamespace("button");
const buttonStyle = computed(() => {
  return [
    ns.b(),
    ns.m(buttonProps.type),
    ns.m(buttonProps.size),
    ns.m(buttonProps.plain),
    ns.m(buttonProps.round),
    ns.m(buttonProps.circle),
    ns.m(buttonProps.disabled),
  ];
});
</script>


