<template>
  <div>
    <FooterPc v-if="width > 1024" />
      <FooterMobile v-else />
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '~/composables/useWindowSize';

const { width } = useWindowSize();
</script>

<style scoped lang="scss">

</style>
