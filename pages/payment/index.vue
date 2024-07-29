<template>
    <div class="container pb-100">
      <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items">
          <template #item="{ item, props }">
            <router-link
              v-if="item.route"
              v-slot="{ href, navigate }"
              :to="item.route"
              custom
            >
              <a :href="href" v-bind="props.action" @click="navigate">
                <span :class="[item.icon, 'text-color']" />
                <span class="text-primary font-semibold ml-10">{{ item.label }}</span>
              </a>
            </router-link>
            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
              <span class="text-color">{{ item.label }}</span>
            </a>
          </template>
        </Breadcrumb>
      </div>
      <Payment />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  
  const home = ref({
    icon: "pi pi-home",
    label: "Trang chủ",
    route: "/",
  });
  const items = ref([
    { label: "Giỏ hàng" },
    { label: "Danh sách giỏ hàng" },
    { label: "Thông tin khách hàng" },
    { label: "Thanh toán" },
  ]);
  </script>
  
  <style scoped lang="scss">
  :deep(.p-breadcrumb) {
    padding: 0;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    overflow: auto;
    .p-menuitem {
      font-size: 0.8rem;
      text-wrap: nowrap;
    }
  }
  </style>
  