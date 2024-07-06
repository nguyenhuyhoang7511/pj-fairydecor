<template>
  <div>
    <HeaderPc v-if="width > 1023" />
    <HeaderMobile v-else />
  </div>
</template>

<script setup lang="ts">
const { width } = useWindowSize();
</script>

<style lang="scss" scoped>

</style>
