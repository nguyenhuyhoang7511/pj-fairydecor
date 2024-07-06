<template>
  <div class="container-info">
    <div class="container-info-left">
      <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        containerStyle="max-width: 640px"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            style="width: 100%"
          />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
        </template>
      </Galleria>
    </div>
    <div class="container-info-right">
      <p class="product-title">
        (Có ẢNH THẬT) Tranh Treo Tường Canvas,Tranh treo phòng ngủ,phòng khách,cầu thang
        đẹp⚡FREE SHIP⚡Bức đồng quê
      </p>
      <p class="product-tk">
        <Rating v-model="rating" :cancel="false" class="mr-5" />
        <span>
          <span class="number">15</span> Đánh Giá | <span class="number">48</span> Đã
          Bán</span
        >
      </p>
      <p class="product-price">₫199.000 - ₫450.000</p>

      <span
        ><span style="font-weight: 600">Chính Sách Trả Hàng:</span> Trả hàng 15 ngày (Đổi
        ý miễn phí)</span
      >
      <div class="mt-30">
        <span style="font-weight: 600">Vận Chuyển:</span> Miễn phí vận chuyển (nội thành)
      </div>

      <div class="list-category">
        <p class="label-common">Mẫu</p>
        <div class="container-list">
          <div
            class="list"
            v-for="(item, index) in 50"
            :key="index"
            @click="handleSelectedCategory(index)"
          >
            <div class="item" :class="{ selected: selectedCategory === index }">
              <img
                src="https://down-vn.img.susercontent.com/file/vn-11134201-23030-fd076luxmwov31"
                alt=""
              />
              <span class="name"> SET {{ index + 1 }} </span>
              <div :class="{ 'icon-selected': selectedCategory === index }"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="size">
        <p class="label-common">Kích thước</p>
        <div class="list-size">
          <div class="item-size">40x60 cm</div>
          <div class="item-size">40x60 cm</div>
        </div>
      </div>

      <div class="quantity">
        <p class="label-common">Số Lượng</p>
        <div class="list-size">
          <InputNumber
            inputId="horizontal-buttons"
            showButtons
            v-model="quantity"
            buttonLayout="horizontal"
            :step="1"
          >
            <template #incrementbuttonicon> + </template>
            <template #decrementbuttonicon> - </template>
          </InputNumber>
        </div>
      </div>

      <div class="container-btn">
        <Button class="mr-30 btn" label="Thêm Vào giỏ hàng" icon="pi pi-shopping-cart" />
        <Button class="btn" label="Mua ngay" icon="pi pi-money-bill" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { PhotoService } from "@/service/PhotoService";

const rating = ref(5);

const selectedCategory = ref<number>(0);

const quantity = ref<number>(1);

const handleSelectedCategory = (index: number) => {
  selectedCategory.value = index;
};
const images = ref();
const responsiveOptions = ref([
  {
    breakpoint: "1300px",
    numVisible: 4,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);

onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data));
});
</script>

<style lang="scss" scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}
:deep(.p-inputnumber-input) {
  width: 2.5rem !important;
  height: 2.2rem;
}
:deep(.p-inputnumber-button) {
  height: 2.2rem;
}
:deep(.p-galleria-item-wrapper) {
  border: 1px solid #cccccc93;
  height: 630px;
}

.container-info {
  display: flex;
  justify-content: start;
  gap: 2rem;
  .container-info-left {
    width: 50%;
  }
  .container-info-right {
    width: 50%;
    .product-title {
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      margin: 0;
      max-height: 48px;
      max-width: 665px;
      overflow: hidden;
      overflow-wrap: break-word;
      vertical-align: sub;
    }
    .product-tk {
      display: flex;
      justify-content: start;
      .number {
        text-decoration: underline;
      }
      span {
        margin-left: 8px;
      }
      p {
        margin: 0;
      }
    }
    .product-price {
      color: #ee4d2d;
      font-size: 1.875rem;
      font-weight: 500;
    }
    .label-common {
      margin: 0;
      width: 8rem;
      margin-right: 1rem;
      font-weight: 600;
    }
    .list-category {
      display: flex;
      align-items: start;
      margin-top: 2rem;
      width: 50rem;
      .container-list {
        display: flex;
        width: 60%;
        flex-wrap: wrap;
        gap: 1rem;
        max-height: 10rem;
        overflow-y: scroll;
        .list {
          .item {
            cursor: pointer;
            border: 1px solid #ccc;
            padding: 4px 10px;
            border: 1px solid #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 6rem;
            img {
              width: 25px;
              margin-right: 0.5rem;
            }
            span {
              font-size: 0.7rem;
            }
            .icon-selected {
              background-color: #ee4d2d;
              width: 2rem;
              height: 2rem;
              position: absolute;
              bottom: -0.5px;
              clip-path: polygon(100% 55%, 50% 100%, 100% 100%);
              right: -0.5px;
            }
          }
          .selected {
            border: 1px solid orangered;
            position: relative;
          }
        }
      }
    }
    .size {
      margin-top: 3rem;
      display: flex;
      align-items: center;
      .list-size {
        display: flex;
        gap: 1rem;
        .item-size {
          cursor: pointer;
          border: 1px solid #ccc;
          padding: 8px 12px;
          border: 1px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 6rem;
          font-size: 0.9rem;
        }
      }
    }
    .quantity {
      margin-top: 3rem;
      display: flex;
      align-items: center;
    }
    .container-btn {
      margin-top: 4rem;
      .btn {
        padding: 1rem 2rem;
      }
    }
  }
}

@media screen and (max-width: 1225px) {
  .container-info {
    .container-info-right {
      .list-category {
        flex-direction: column;
        gap: 1rem;
        width: 40rem;
      }
      .size {
        flex-direction: column;
        align-items: start;
        gap: 1rem;
      }
      .quantity {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1rem;
      }
      .container-btn {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1rem;
        .btn {
          width: 20rem;
          padding: 1rem 2rem;
        }
      }
    }
  }
}

@media screen and (max-width: 796px) {
  .container-info {
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 2rem;
    .container-info-left{
      width: 100%;
    }
    .container-info-right{
      width: 100%;
      .container-btn {
        .btn {
          width: 100%;
          padding: 1rem 2rem;
        }
      }
    }
    .list-category{
      width: 100% !important;
      .container-list{
        width: 100% !important;
      }
    }
  }
}
</style>
