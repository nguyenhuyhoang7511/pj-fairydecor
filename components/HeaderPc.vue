<template>
  <div class="container">
    <header>
      <nav>
        <div class="nav-brand">
          <div class="container-logo">
            <img
              class="image-logo"
              src="https://beedesign.com.vn/wp-content/uploads/2020/09/thiet-ke-logo-con-heo-res.jpg"
              alt="logo"
            />
            <div class="tablet-none company-name">
              <p>Bán tranh treo tường</p>
              <h4>Fairy-decor</h4>
            </div>
          </div>
          <div style="width:50%">
            <IconField iconPosition="left">
              <InputIcon class="pi pi-search"> </InputIcon>
              <InputText placeholder="Tìm kiếm sản phẩm " style="width: 100%" />
            </IconField>
          </div>
          <div class="container-cart">
            <Button icon="pi pi-cart-plus"  class="btn mr-20" label="Giỏ hàng" />
            <Button class="btn btn-style" label="Liên hệ" />
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
const inputSearch = reactive({
  target: "",
  keyword: "",
});
</script>

<style scoped lang="scss">
.p-inputtext::placeholder {
  color: #aaa;
  font-size: 14px;
  font-family: emoji;
}
.company-name {
  font-size: 1.2rem;
}
.btn{
  background-color: brown;
  border: none;
}

.btn-style {
  font-weight: 300 !important;
  padding: 0.5rem 2rem;
}
header {
  margin-top: 0.5rem;
  box-shadow: inset 0 -1px 0 0 #fbeded;
  padding-bottom: 10px;
}
.nav-brand {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 19px;
  .container-logo {
    display: flex;
    align-items: center;
  }
  img {
    width: 56px;
    height: 56px;
    margin-right: 0px;
  }
  p,
  h4 {
    margin: 0;
  }
  p {
    font-size: 12px;
  }
  h4 span {
    font-weight: 300;
    font-size: 12px;
  }
}
.container-cart {
  color: #313131 !important;
  font-size: 1.2rem;
  i {
    font-size: 1.2rem;
    margin-right: 0.2rem;
  }
}
nav {
  display: flex;
  justify-content: space-between;
  .refine {
    background-color: #ffffff;
    font-size: 12px;
    width: 74px;
    height: 42px;
    border-radius: 4px;
    line-height: 16px;
  }
  .input :deep(.p-dropdown) {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input :deep(.p-inputtext) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .input :deep(.p-dropdown) {
    width: 88px;
    height: 32px;
  }
  .right {
    a p {
      font-size: 12px;
      font-weight: 700;
    }
  }
  .btn-cart {
    background-color: #1571da;
    border: 0;
    font-size: 15px;
    min-width: 101px;
  }
}

.nav-link-bottom {
  grid-column-end: 4;
  grid-column-start: 2;
  .parent {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      height: 51px;
      &:hover {
        .parent-link {
          color: #1571da;
        }
        .divi {
          background-color: #1571da;
        }
        .panel {
          display: block !important;
        }
      }
      a {
        font-size: 15px;
        font-weight: 700;
      }
    }
  }
  .divi {
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 100%;
    background-color: #ffffff;
  }
  .panel {
    background-color: #ffffff;
    z-index: 99;
    top: 100%;
    left: 0;
    border: 1px solid #eeeeee;
    min-width: 100%;
    display: none;
    ul {
      min-width: max-content;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    ul li {
      height: auto;
      padding: 5px 10px;
      border-bottom: 1px solid #eeeeee;
      &:last-child {
        border-bottom: 0;
      }
      a {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}

a {
  text-decoration: none;
  color: black;
}
.w-258 {
  width: 258px;
}
.h-32 {
  height: 32px;
}

@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .tablet-none {
    display: none;
  }
}
</style>
