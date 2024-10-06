<template>
  <div>
    <table>

    </table>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'b-table' })

interface TableProps {
  // id?: string;
  data: Record<string, any>[];
  height?: string | number;
}
const props = withDefaults(defineProps<TableProps>(), {
  height: 56,
})
</script>
<style lang="scss" scoped>
</style>