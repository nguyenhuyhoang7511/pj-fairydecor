<template>
  <div>
    <header class="pr-14 flex items-center header-style">
      <div class="container-logo" @click="router.push('/')">
        <div class="logo-style">
          <i class="pi pi-star-fill"></i>
        </div>
        <div class="tablet-none company-name">
          <p class="name">Fairy-decor</p>
          <p>Bán tranh treo tường</p>
        </div>
      </div>
      <Button
        type="button"
        icon="pi pi-bars"
        @click="toggleMenu"
        aria-haspopup="true"
        aria-controls="overlay_menu"
      />
      <Menu ref="menu" id="overlay_menu" :model="listMenu" :popup="true" />
    </header>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const visible = ref(false);

watch(
  () => route.path,
  (newVal, oldVal) => {
    if (newVal !== oldVal) visible.value = false;
  }
);

const menu = ref();
const listMenu = ref([
  {
    items: [
      {
        label: "Giỏ hàng",
        icon: "pi pi-cart-plus",
        command: () =>{
          router.push('/my-shopping-cart')
        }
      },
      {
        label: "Liên hệ",
        icon: "pi pi-whatsapp",
        command: () => {
          handleRedirect();
        },
      },
      {
        label: "Hướng dẫn",
        icon: "pi pi-file-check",
      },
    ],
  },
]);

const handleRedirect = () => {
  window.open("https://zalo.me/0333568062", "_blank");
};

const toggleMenu = (event: any) => {
  menu.value.toggle(event);
};
</script>

<style lang="scss" scoped>
.logo-style {
  width: 66px;
  height: 46px;
  background-color: brown;
  display: flex;
  justify-content: center;
  align-items: center;
  color: yellow;
  border-radius: 4px;
  margin: .5rem;
  i {
    font-size: 1.5rem;
  }
}
.container-logo {
  img {
    width: 72px;
    height: 72px;
    margin-right: 12px;
  }
  .name {
    font-size: 2rem;
    font-weight: bold;
    font-family: system-ui;
  }
  p {
    margin: 0;
  }
  display: flex;
  align-items: center;
}
header {
  justify-content: space-between;
  border-bottom: 1px solid #9e9e9e;
  padding-bottom: 5px;
  padding: 0.5rem 0rem;
  div {
    .name-logo {
      font-size: 1.5rem;
      font-weight: 700 !important;
    }
  }
}

img {
  transition: transform 0.3s;
}
img.rotated {
  transform: rotate(90deg);
}
.logo {
  width: 46px;
  height: 46px;
  object-fit: contain;
}
.btn-menu button {
  background-color: transparent;
  border: 0;
  outline: none;
  i {
    font-size: 24px;
  }
  p {
    font-size: 8px;
  }
}
.title {
  align-items: flex-end;
}
.title p {
  font-size: 17px;
  font-weight: 500;
}
.mobile-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.3);
}
.mobile {
  background: #f5f5f5;
  z-index: 9999;
  max-width: 360px;
  .header {
    justify-content: space-between;
  }
  .header p {
    font-size: 12px;
  }
  .pi-times {
    font-size: 24px;
  }
  .input :deep(.p-inputtext) {
    width: 212px;
    height: 28px;
  }
  .btn-all {
    font-size: 12px;
    background-color: #ffffff;
    width: 54px;
    height: 28px;
    border: 1px solid #cccccc;
    outline: none;
  }
  .link-top {
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: auto auto auto;
      column-gap: 13px;
      row-gap: 16px;
      li a {
        width: 103px;
        height: 34px;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
        font-size: 12px;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .link-bottom {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: auto auto auto;
      column-gap: 13px;
      li a {
        width: 103px;
        height: 50px;
        border: 1px solid #e0e0e0;
        background-color: #ffffff;
        border-radius: 3px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        text-decoration: none;
        color: #000000;
      }
    }
  }
  .tree-area {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      padding-left: 12px;
    }
  }
  .btn-card {
    background-color: #1571da;
    border: 1px solid #1571da;
  }
}
.mobile {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.mobile-enter-active,
.mobile-leave-active {
  transition: all 0.3s ease;
}
.mobile-enter-from,
.mobile-leave-to {
  transform: scale(0);
  opacity: 0;
}
.mobile-enter-to,
.mobile-leave-from {
  transform: scale(1);
  opacity: 1;
}
</style>
