<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import "primeicons/primeicons.css";

useHead({
  title: "Fairy Decor",
});

const { t } = useI18n();
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.p-button {
  background-color: brown !important;
  border: 0;
  color: #ffffff;
}
.p-highlight button{
  background-color: brown;
  color: brown;
}
.p-rating-icon{
  color: brown;
}
:root{
  --p-focus-ring-color: brown 
}
.p-checkbox.p-highlight .p-checkbox-box{
  color: brown;
  background: brown;
  border-color: brown;
}
</style>
