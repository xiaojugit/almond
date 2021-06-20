<template>
  <button class="e-button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EButton',
})
</script>

<style lang="scss" scoped>
.e-button {
  height: 30px;
  border: 1px solid #ccc;
}
</style>
