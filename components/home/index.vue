<template>
  <div class="card mt-30">
    <Galleria
      class="slide-image"
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="5"
      :circular="true"
      :autoPlay="true"
      :transitionInterval="5000"
      :showItemNavigators="true"
      :showItemNavigatorsOnHover="true"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          class="image-item"
        />
      </template>
    </Galleria>

    <div class="container-type">
      <p class="title">Phân loại tranh và sản phẩm khác</p>
      <div class="container-item-type">
        <div class="item-type" v-for="product in typeProduct" :key="product.id">
          <p>{{ product.name }}</p>
        </div>
      </div>
    </div>

    <div class="about-me">
      <p class="title-common">THÔNG TIN SHOP</p>
      <div class="info">
        <p>FAIRY DECOR</p>
        <p>Hotline: 033 356 8062</p>
        <p>Thời gian thành lập: 9 năm</p>
        <p>- Xưởng tranh CANVAS TẠO ĐIỂM NHẤN CHO KHÔNG GIAN NHÀ BẠN</p>
        <p>- Xưởng nhận in kích thước theo yêu cầu</p>
        <p>- Vật liệu in:</p>
        <p>
          Canvas - Vật liệu chuyên để vẽ tranh của các họa sĩ, in trên chất liệu canvas
          cho bản in sống động, sắc nét. Dễ dàng lau, vệ sinh bề mặt bằng nước, khăn ẩm.
        </p>
        <p>Mực eco thân thiện với môi trường cho độ bền đáng kinh ngạc.</p>
        <p>Xưởng đảm bảo 5 năm không phai</p>
      </div>
    </div>
    <div class="recommend">
      <p class="title-common">GỢI Ý CHO BẠN</p>
      <div class="card">
        <Carousel
          :value="suggestedProducts"
          :numVisible="3"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
          :autoplayInterval="3000"
        >
          <template #item="slotProps">
            <div class="card-style">
              <div
                class="mb-3 cursor-pointer"
                @click="router.push(`/product/detail?id=${slotProps.data.id}`)"
              >
                <div>
                  <img
                    :src="slotProps.data.avatar"
                    :alt="slotProps.data.avatar"
                    class="w-full border-round"
                  />
                  <Tag
                    :value="slotProps.data.inventoryStatus"
                    :severity="'success'"
                    class="absolute"
                    style="left: 5px; top: 5px"
                  />
                </div>
              </div>
              <div
                class="mb-3 font-medium cursor-pointer"
                @click="router.push(`/product/detail?id=${slotProps.data.id}`)"
              >
                {{ slotProps.data.name }}
              </div>
              <div class="info-product">
                <div class="mt-0 font-semibold text-xl price-common">
                  {{ formatPrice(slotProps.data.price_start) }}-
                  {{ formatPrice(slotProps.data.price_end) }}
                </div>
                <span>
                  <Button icon="pi pi-heart" severity="secondary" outlined />
                  <Button icon="pi pi-shopping-cart" class="ml-2" />
                </span>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>

    <div class="best-seller">
      <p class="title-common">SẢN PHẨM BÁN CHẠY</p>
      <div class="products">
        <Card
          class="product-card-custom"
          v-for="(product, index) in topSoldProducts"
          :key="index"
        >
          <template #header>
            <img
              class="image-card cursor-pointer"
              :src="product.avatar"
              :alt="product.avatar"
              @click="router.push(`/product/detail?id=${product.id}`)"
            />
          </template>
          <template #title>
            <span
              class="product-title cursor-pointer"
              v-tooltip="{ value: product.title, autoHide: false }"
              @click="router.push(`/product/detail?id=${product.id}`)"
            >
              {{ product.title }}
            </span>
          </template>
          <template #subtitle>
            <span class="price-common"
              >{{ formatPrice(product.price_start) }}-
              {{ formatPrice(product.price_end) }}</span
            >
          </template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button icon="pi pi-shopping-cart" label="Thêm giỏ hàng" class="w-full" />
            </div>
          </template>
        </Card>
      </div>
    </div>

    <div class="list-products">
      <p class="title-common">TẤT CẢ SẢN PHẨM</p>
      <div class="actions">
        <div class="actions-left">
          <Dropdown
            v-model="actionsSort"
            :options="sortsType"
            optionLabel="name"
            placeholder="Sắp xếp sản phẩm"
            @change="() => handleSort()"
          />
        </div>
        <div class="actions-right">
          <IconField iconPosition="left">
            <InputIcon class="pi pi-search"> </InputIcon>
            <InputText
              placeholder="Nhập từ khóa tìm kiếm"
              class="input-search"
              v-model="keywordSearch"
              @keydown.enter="handleSearch"
            />
          </IconField>
        </div>
      </div>
      <div class="products">
        <Card
          class="product-card-custom"
          v-for="(product, index) in products"
          :key="index"
        >
          <template #header>
            <img
              class="image-card cursor-pointer"
              alt="Products image"
              :src="product.avatar"
              @click="router.push(`/product/detail?id=${product.id}`)"
            />
          </template>
          <template #title>
            <span
              class="product-title cursor-pointer"
              v-tooltip="{ value: product.title, autoHide: false }"
              @click="router.push(`/product/detail?id=${product.id}`)"
            >
              {{ product.title }}
            </span>
          </template>
          <template #subtitle>
            <span class="price-common"
              >{{ formatPrice(product.price_start) }}-
              {{ formatPrice(product.price_end) }}</span
            >
          </template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button icon="pi pi-shopping-cart" label="Thêm giỏ hàng" class="w-full" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { PhotoService } from "@/service/PhotoService";
import { ProductServiceApi } from "~/service/ProductServiceApi";
import type { Product } from "~/interface/product";

const router = useRouter();
const actionsSort = ref();
const products = ref<Product[] | []>([]);
const images = ref();
const keywordSearch = ref();
const suggestedProducts = ref()
const topSoldProducts = ref()

const sortsType = ref([
  { name: "Giá từ thấp đến cao", code: "NY" ,type : 1},
  { name: "Giá từ cao đến thấp", code: "RM" ,type : 2},
  { name: "Mức độ bán chạy nhất", code: "LDN" ,type : 3},
]);

const typeProduct = ref([
  { id: 1, name: "Nhà bếp" },
  { id: 2, name: "Ảnh cưới" },
  { id: 3, name: "Phong thủy" },
  { id: 4, name: "Nghệ thuật" },
  { id: 5, name: "Bộ 6 ảnh" },
  { id: 6, name: "Hà Nội xưa" },
  { id: 7, name: "Nail, Spa" },
  { id: 8, name: "Ảnh Phật" },
  { id: 9, name: "Hoa lá" },
  { id: 10, name: "Trẻ em" },
  { id: 11, name: "Phong cảnh" },
  { id: 12, name: "Mẫu tròn, tráng gương" },
]);

const responsiveOptions = ref([
  { breakpoint: "1400px", numVisible: 2, numScroll: 1 },
  { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
  { breakpoint: "767px", numVisible: 2, numScroll: 1 },
  { breakpoint: "575px", numVisible: 1, numScroll: 1 },
]);

function formatPrice(value: number) {
  const formattedValue = new Intl.NumberFormat("vi-VN").format(value);
  return `${formattedValue}đ`;
}

const getListProducts = async () => {
  const response: any = await ProductServiceApi.getProductsData();
  products.value = response;
};

const getSuggestedProducts = async () => {
  const response: any = await ProductServiceApi.topSoldProducts();
  suggestedProducts.value = response;
};
const getTopSoldProducts = async () => {
  const response: any = await ProductServiceApi.topSoldProducts();
  topSoldProducts.value = response;
};

// ACTION PRODUCTS 
const handleSearch = () => {
  if(keywordSearch.value == '')
  {
    getListProducts()
  }
  const response = products.value.filter((product) =>
    product.title.toLowerCase().includes(keywordSearch.value.toLowerCase())
  );
  products.value = response
};

const handleSort = () => {
  if(actionsSort.value.type == 2)
  {
    products.value.sort((a, b) => a.price_end - b.price_end);
  }
  if(actionsSort.value.type == 2)
  {
    products.value.sort((a, b) => b.price_end - a.price_end);
  }
  if(actionsSort.value.type == 3)
  {
    products.value.sort((a, b) => b.sold - a.sold);
  }
}
onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data));
  getListProducts();
  getSuggestedProducts()
  getTopSoldProducts()
});
</script>

<style scoped lang="scss">
.cursor-pointer {
  cursor: pointer !important;
}
.price-common {
  color: red !important;
  font-weight: 600;
  font-size: 1rem;
}
.product-card-custom {
  width: 22%;
  overflow: hidden;
}
:deep(.p-carousel-item) {
  padding: 1rem;
  border-radius: 1rem;
}

.image-item {
  border-radius: 1rem;
  width: 100%;
  height: 500px;
  display: block;
}
.title-common {
  margin-top: 3rem;
  font-weight: bold;
  font-size: 1.4rem;
}
.container-type {
  width: 100%;
  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 3rem;
  }
  .container-item-type {
    margin-top: 40px !important;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
    cursor: pointer;
    .item-type {
      width: 4rem;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3rem 6rem;
      border: 1px solid #e2eaf0;
      border-radius: 0.5rem;
      p {
        text-wrap: nowrap;
        font-size: 14px;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
  border-radius: 1rem;
}
.about-me {
  .info {
    font-size: 0.9rem;
    margin-left: 1rem;
  }
}
.recommend {
  margin-top: 5rem;
  .title {
    margin-top: 3rem;
    font-weight: bold;
    font-size: 1.4rem;
  }
  .info-product {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-style {
    margin: 0.1rem;
    padding: 1.5rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
  }
}
.list-products {
  margin-top: 5rem;
  .actions {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    .actions-left {
      display: flex;
      gap: 1rem;
    }
    .input-search {
      width: 17rem;
    }
  }
  .products {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 2rem;
    .product-title,
    .p-card-title {
      font-size: 0.9rem !important;
    }
  }
}
.best-seller {
  .products {
    display: flex;
    justify-content: start;
    gap: 2rem;
    flex-wrap: wrap;
    .product-title,
    .p-card-title {
      font-size: 0.9rem !important;
    }
  }
}
:deep(.p-card-title) {
  font-size: 1rem !important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
:deep(.p-card-subtitle) {
  padding-top: 0.5rem;
}
:deep(.p-card-body) {
  padding: 1rem;
  padding-top: 0.5rem;
  height: 11rem;
}

:deep(.p-galleria-thumbnail-container) {
  display: none;
}
@media screen and (max-width: 1286px) {
  .product-card-custom {
    width: 32%;
    overflow: hidden;
  }
}

@media screen and (max-width: 998px) {
  .product-card-custom {
    width: 45%;
    overflow: hidden;
  }
}

@media screen and (max-width: 768px) {
  .image-item {
    height: unset;
  }
  .actions {
    flex-direction: column;
    gap: 1rem;
    :deep(.p-dropdown) {
      width: 100%;
    }
    .input-search {
      width: 100% !important;
    }
  }
  .product-card-custom {
    width: 100%;
    overflow: hidden;
    .image-card {
      width: 100%;
    }
  }
  .container-item-type {
    .item-type {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3rem !important;
      padding: 0 !important;
      width: 100% !important;
      p {
        text-wrap: nowrap;
        font-size: 14px;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
  :deep(.p-galleria) {
  }
  :deep(.p-galleria .p-galleria-item-nav) {
    width: unset;
    height: unset;
    color: #ffffff;
    background-color: #ccc;
  }
}
</style>
