<template>
  <footer>
    <div class="flex justify-between items-center px-6 pt-10">
      <p class="my-0">Số điện thoại : 0356579021</p>
    </div>
    <Divider />
    <div class="flex justify-between items-center px-6">
      <p class="my-0">Email liên hệ: nguyenhoang080721@gmail.com</p>
    </div>
    <Divider />

    <div class="flex justify-between items-center px-6">
      <p class="my-0">© 2024. Ha Noi- Viet Nam.</p>
    </div>
    <Divider />


  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
footer {
  background-color: #333333;
  padding: 10px 8px;
  color: #ffffff;
}
:deep(.p-divider.p-divider-horizontal:before) {
  border-color: #9a9a9a;
}
</style>
