<template>
  <div>
    <main>
      <ClientOnly>
        <LayoutHeader />
        <div class="main-body">
          <slot />
        </div>
        <LayoutFooter />
      </ClientOnly>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.main-body {
  flex-grow: 1;
}
a {
  text-decoration: none;
  color: #ACACAC;
  font-size: 12px;
  &.router-link-active {
    font-size: 12px;
    color: #ACACAC;
  }
}
:deep(.p-menubar .p-menubar-root-list > .p-menuitem:not(.p-highlight):not(.p-disabled) > .p-menuitem-content:hover) {
  background-color: transparent;
}
:deep(.p-menubar-root-list) {
  width: 100%;
  justify-content: space-between;
  padding: 0 16px;
}
</style>
