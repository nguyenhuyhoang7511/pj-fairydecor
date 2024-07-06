<template>
  <div>
    <div class="container pb-100">
      <Home />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
h2 {
  font-size: 28px;
  font-weight: 400;
}

@media screen and (max-width: 1024px) {
  .container {
    padding-left: 10px;
    padding-bottom: 0;
  }
  h2 {
    font-weight: 400;
    font-size: 16px;
  }
}
</style>
