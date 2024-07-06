<template>
  <footer>
    <div class="flex">
      <div class="logo">
        <p class="mb-4 mt-12">Số điện thoại : 0356579021</p>
        <p class="mb-4 mt-0">Email liên hệ: nguyenhoang080721@gmail.com</p>
        <small>© 2024. Ha Noi- Viet Nam.</small>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
a {
  color: #ffffff;
  text-decoration: none;
}
footer {
  background-color: #333333;
  padding: 21px 111px 32px 111px;
  color: #ffffff;
  .logo {
    width: 40%;
  }
  .book,
  .membership {
    width: 30%;
    ul {
      width: fit-content;
      list-style-type: none;
      margin: 0;
      padding: 0 0 0 30px;
      display: grid;
      column-gap: 37px;
      row-gap: 16px;
      grid-template-columns: auto auto;
      li a {
        font-weight: 700;
      }
    }
  }
  img {
    width: 64px;
    height: 46px;
  }
  small {
    font-size: 12px;
  }
}
</style>