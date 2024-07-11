<template>
  <div class="container-info">
    <div class="container-info-left">
      <Galleria
        v-model:activeIndex="activeIndex"
        :value="product?.image_slide"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        containerStyle="max-width: 640px"
      >
        <template #item="slotProps">
          <img
            :src="imageSelected ? imageSelected : slotProps.item.link"
            :alt="imageSelected ? imageSelected : slotProps.item.link"
            style="width: 100%"
          />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.link" :alt="slotProps.item.link" />
        </template>
      </Galleria>
    </div>
    <div class="container-info-right">
      <p class="product-title">
        {{ product ? product.title : "" }}
      </p>
      <p class="product-tk">
        <Rating v-model="rating" :cancel="false" class="mr-5" />
        <span>
          <span class="number">{{ product?.total_rating }}</span> Đánh Giá |
          <span class="number">{{ product?.sold }}</span> Đã Bán</span
        >
      </p>
      <p class="product-price">{{ priceProduct }}</p>

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
            v-for="(item, index) in product?.list_type"
            :key="index"
            @click="handleSelectedCategory(item)"
          >
            <div class="item" :class="{ selected: selectedCategory?.id === item.id }">
              <img :src="item.image" alt="" />
              <span class="name"> {{ item.name }} </span>
              <div :class="{ 'icon-selected': selectedCategory?.id === item.id }"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="size" v-if="product?.option">
        <p class="label-common">Kích thước</p>
        <div class="list-size" v-for="item in product.option">
          <div
            @click="() => changeSelectedSize(item)"
            class="item-size mr-10"
            :class="selectedSize.id == item.id ? 'item-size-selected' : ''"
          >
            {{ item.value }}
          </div>
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
        <p class="ml-30">{{ product?.quantity }} sản phẩm có sẵn</p>
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
import { ProductServiceApi } from "~/service/ProductServiceApi";
import type { Product, Option,ProductType } from "~/interface/product";

const product = ref<Product | null>(null);
const rating = ref(5);
const quantity = ref<number>(1);
const route = useRoute();
const priceProduct = ref();
const imageSelected = ref()
const activeIndex = ref(2);

const selectedCategory = ref<ProductType>(
  {
    id: 1,
    name: '',
    image: '',
    option1: 0,
    option2: 0,
    thumbnail: ''
  }
);
const selectedSize = ref<Option>({
  id: 1,
  value: "",
});

const updatePriceProduct = () => {
  let optionKey = `option${selectedSize.value.id}`;
  priceProduct.value = selectedCategory.value[optionKey];
};

const changeSelectedSize = (item: Option) => {
  selectedSize.value = item;
};

const handleSelectedCategory = (item: ProductType) => {
  selectedCategory.value = item;
  imageSelected.value = item.image
};

watch([selectedSize, selectedCategory], updatePriceProduct);

watch(() => activeIndex.value, () => {
  imageSelected.value = null;
});

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

const getProductDetail = async () => {
  const productId = route.query.id;
  const response: any = await ProductServiceApi.getProductDetail(productId);
  product.value = response[0];
  priceProduct.value = response[0].price_text;
  console.log(product.value);
};
onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data));
  getProductDetail();
});
</script>

<style lang="scss" scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}
:deep(.p-galleria-thumbnail-item-content img) {
  width: 60% !important;
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
        .item-size-selected {
          background-color: brown !important;
          color: #ffffff !important;
          border: none !important;
        }
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
    .container-info-left {
      width: 100%;
    }
    .container-info-right {
      width: 100%;
      .container-btn {
        .btn {
          width: 100%;
          padding: 1rem 2rem;
        }
      }
    }
    .list-category {
      width: 100% !important;
      .container-list {
        width: 100% !important;
      }
    }
  }
}
</style>
